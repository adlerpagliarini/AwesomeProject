import axios from 'axios';
import User from '../../model/user';
import Token from '../../model/token';
import {API_CONFIG, API_AUTH_URL} from '../../config';

const loginService = {
    RequestAxiosToken: async ({email, password} = new User()) => {
        const api = axios.create({});
        const data = {username: email, password};
        const token = await api.post(API_CONFIG.baseURL + API_AUTH_URL.Login, data).then(response => response.data)
                            .catch(error => console.log('There has been a problem with your request: ', error));        

        return new Token(token);
    }
}
export default loginService;