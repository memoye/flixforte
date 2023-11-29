import axios from "axios";

const client = axios.create({ baseURL: 'https://api.themoviedb.org/3' }),
    TOKEN = import.meta.env.VITE_TMDB_TOKEN

// Set up request interceptor
client.interceptors.request.use(config => {
    if (TOKEN) {
        config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
}, error => {
    console.log(error.message);
    return Promise.reject(error);
});

export const request = ({ ...options }) => {
    return client(options);
}