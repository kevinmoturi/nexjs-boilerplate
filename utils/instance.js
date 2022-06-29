import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'accept': 'application/json',
        'x-api-key': '1a620945-cc11-488a-8325-781ad3b23d88'
    }
});

export default instance;