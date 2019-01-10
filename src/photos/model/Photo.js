export default class Photo {
    constructor({id, thumbnailUrl, title, url} = {}) {
        ({ id: this.id, thumbnailUrl: this.thumbnailUrl, title: this.title, url: this.url } 
        = {id, thumbnailUrl, title, url});
    }
}

/*
albumId: 1
id: 3
thumbnailUrl: "https://via.placeholder.com/150/24f355"
title: "officia porro iure quia iusto qui ipsa ut modi"
url: "https://via.placeholder.com/600/24f355"
*/