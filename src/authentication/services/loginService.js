import User from '../model/user';
import Token from '../model/token';
import ClientService from './ClientService';
import {API_AUTH_URL} from '../config';

const _client = new ClientService();

const loginService = {
    GetUser: async() => {
        let {email, password} = await _client.Get(API_AUTH_URL.Root);
        return {email, password};
    },
    Register: async ({email, password} = new User()) => {
        const data = {email, password};
        const { username } = await _client.Post(API_AUTH_URL.Register, data);
        return username;
    },
    RequestToken: async ({email, password} = new User()) => {
        const data = {username: email, password};
        const { token, expiration }  = await _client.Post(API_AUTH_URL.Login, data);
        return {token, expiration};
    },
}
export default loginService;