import axios from 'axios';
import apiSettings from '../config/apiSettings';
import { GetPageSize } from './pagesInfoService';
import PhotoList from '../model/PhotoList';
import Photo from '../model/Photo';

const api = axios.create({});
const url = apiSettings.BaseUrl;

const photoService = {
    GetPhotosOffline: async () => {
        const photosToReturn = [];

        for (let index = 0; index < 25; index++) {
            var photo = new Photo({id: index, thumbnailUrl: "https://facebook.github.io/react-native/img/header_logo.png", title: `Photo ${index}`, url: "https://facebook.github.io/react-native/img/header_logo.png"});
            photosToReturn.push(photo);
        }        
        var photos = new PhotoList(photosToReturn);
        
        return { photos, pagesInfo: GetPageSize(photos.photoList) };
    },
    GetPhotos: async () => {
        const response = await api.get(url + '/photos');
        const photos = new PhotoList(response.data.slice(0, 35));
        return { photos, pagesInfo: GetPageSize(photos.photoList) };
    }
}
export default photoService;