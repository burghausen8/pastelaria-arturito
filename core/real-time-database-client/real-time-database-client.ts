import firebaseConfig from '../../env/firebase-config.json';
import { HttpClient } from '../http-client/httpClient';
const BASE_URL = `${firebaseConfig.databaseURL}/{path}.json`

export class RealtimeDataBaseClient {
    private client: HttpClient;

    constructor() {
        this.client = new HttpClient();
    }


    async get(path: string, options: any) {
        try {
            const response = await this.client.get(`${BASE_URL.replace('{path}', path)}`, options);

            return response
        } catch (error) {
            console.log(error)
        }
    }

    async post(path: string, data: any, options: any) {
        const headers = {
            'Content-Type': 'application/json',
            ...options
        }

        try {
            const response = await this.client.post(`${BASE_URL.replace('{path}', path)}`, data, headers);

            return response
        } catch (error) {


        }
    }
}