import axios from 'axios';
import { API_CONFIG } from '../config';
import _tokenManageService from './tokenManageService';

const configAxios = () => {  
    const defaultUrl = {
        baseURL: API_CONFIG.baseURL,
        timeout: 5000
    };
    const axiosInstance = axios.create(defaultUrl);
    
    axiosInstance.interceptors.request.use(async (config) => {
        let auth = await _tokenManageService.GetToken();
        config.headers.Authorization =  auth ? `Bearer ${auth.token}` : '';
        return config;
    }, (error) => {
        const { response } = error;
        console.log('[ERROR][ClientService:Request]', response);
        return Promise.reject(response.data);        
    });

    axiosInstance.interceptors.response.use((response) => {
        return response.data;
    }, (error) => {
        const { response } = error;
        console.log('[ERROR][ClientService:Response]', response);
        return Promise.reject(response.data);
    });
    return axiosInstance;
};

const ClientService = () => {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const axiosConfigured = configAxios();
    return {
        Get: async (path, options = {}) => await axiosConfigured.get(path, { ...defaultOptions, ...options }),
        Post: async (path, data, options = {}) => await axiosConfigured.post(path, data, { ...defaultOptions, ...options }),
        Put: async (path, data, options = {}) => await axiosConfigured.put(path, data, { ...defaultOptions, ...options }),
        Delete: async (path, options = {}) => await axiosConfigured.delete(path, { ...defaultOptions, ...options }),
    };
};
export default ClientService;