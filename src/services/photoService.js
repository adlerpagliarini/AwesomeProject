import axios from 'axios';
import apiSettings from '../config/apiSettings';
import { GetPageSize } from './pagesInfoService';
import PhotoList from '../model/PhotoList';

const api = axios.create({});
const url = apiSettings.BaseUrl;

const photoService = {
    GetPhotos: async () => {
        const response = await api.get(url + '/photos');
        const photos = new PhotoList(response.data.slice(0, 35));
        return { photos, pagesInfo: GetPageSize(photos.photoList) };
    }
}
export default photoService;