import Photo from './Photo';

export default class PhotoList {
    constructor(List = []) {
        this.photoList = new Array();
        List.forEach(element => {
            this.photoList.push(new Photo(element));
        });
    }
}