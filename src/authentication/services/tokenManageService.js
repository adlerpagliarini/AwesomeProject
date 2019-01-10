import { AsyncStorage } from 'react-native';
import Token from '../model/token';

const tokenManageService = {
    SetToken: async ({token, expiration} = new Token()) => {
        await AsyncStorage.multiSet([
            ['@CoreApi:token', token],
            ['@CoreApi:expiration', expiration]
        ]);
    },
    GetToken: async() => {
        let token = await AsyncStorage.getItem('@CoreApi:token');
        let expiration = await AsyncStorage.getItem('@CoreApi:expiration');
        return (token && expiration) ? new Token({token, expiration}) : null;
    },
    GetTokenPromisse: () => {
        return AsyncStorage.getItem('@CoreApi:token');
    },
    Clear: async () => {
        return await AsyncStorage.clear();
    }
}

export default tokenManageService;