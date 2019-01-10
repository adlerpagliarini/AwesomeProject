import ClientService from './ClientService';
import { API_VALUES_URL } from '../config';

const _client = new ClientService();
const valueService = {
    GetAmountOfValue: async (amount) => {
        const values = await _client.Get(`${API_VALUES_URL.Root}/${amount}`);
        return [...values];
    },
};

export default valueService;