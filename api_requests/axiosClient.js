const axios = require('axios');

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        console.log('➡️ [Request]', config.method.toUpperCase(), config.url);
        console.log('Payload', config.data || 'No data');
        return config;
    },
    (error) => {
        console.error('❌ [Request Error]', error.message);
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        console.log('➡️ [Response]', response.config.url, 'Status: ', response.status);
        console.log('Response Data', response.data);
        return response;
    },
    (error) => {
        console.error('❌ [Response Error]', error.message);
        return Promise.reject(error);
    }
);

module.exports = axiosClient;