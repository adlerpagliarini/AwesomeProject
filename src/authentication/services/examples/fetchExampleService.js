import User from '../../model/user';
import Token from '../../model/token';
import {API_CONFIG, API_AUTH_URL} from '../../config';

const loginService = {
    GetFetchUser: async() => {
        let user = new User();
        user = await fetch(API_CONFIG.baseURL + API_AUTH_URL.Root).then(response => response.json()).then(data => data).catch(err => console.log(err));
        return user;
    },
    RequestFetchToken: async ({email, password} = new User()) => {
        const data = {username: email, password};
        const token = await fetch(API_CONFIG.baseURL + API_AUTH_URL.Login, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json()).then(data => data)
        .catch((error) =>
            console.log('There has been a problem with your request: ', error)
        );
        return new Token(token);
    }
}
export default loginService;