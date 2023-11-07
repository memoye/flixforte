import axios from "axios";

const client = axios.create({ baseURL: 'https://api.themoviedb.org/3' }),
    TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const request = ({ ...options }) => { // 👈axios interceptor
    client.defaults.headers.common.Authorization = `Bearer ${TOKEN}`
    const onSuccess = response => response
    const onError = error => {
        // optionally catch error and handle however you like
        console.log(error.message)

        // make sure to return error though
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}