import localforage from "localforage";
import { fetchData } from "./utils";

const baseUrl = import.meta.VITE_TMDB_BASE_URL

export const getMovies = async (endpoint, options = {}) => {
    const url = `${baseUrl}/${endpoint}`; // Combine the base URL with the endpoint

    try {

        // Check if the data is cached
        const cachedData = await localforage.getItem(url);

        if (cachedData) {
            return cachedData;
        } else {
            // If not cached, make an API request using fetch with provided options
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();

            // Cache the response data
            await localforage.setItem(url, responseData);

            return responseData;
        }
    } catch (err) {
        throw err;
    }
}