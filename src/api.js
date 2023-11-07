import axios from 'axios';
import localforage from 'localforage';

const apiKey = import.meta.env.VITE_TMDB_KEY;

export const getMovies = async (endpoint) => {

    const cacheKey = `moviesCache:https://api.themoviedb.org/3${endpoint}`;
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3${endpoint}`,
        params: {
            language: 'en-US',
            api_key: apiKey, // Include your API key as a query parameter
        },
        headers: {
            accept: 'application/json',
        }
    }

    try {
        // Check if the data is cached
        const cachedData = await localforage.getItem(cacheKey);

        if (cachedData) {
            // Check if the cached data has expired
            const cacheExpiration = await localforage.getItem(`${cacheKey}:expiration`);
            if (cacheExpiration && Date.now() < cacheExpiration) {
                return cachedData;
            } else {
                // Data has expired, remove it from the cache
                await localforage.removeItem(cacheKey);
                await localforage.removeItem(`${cacheKey}:expiration`);
            }
        }

        // If not cached or data has expired, make an API request using Axios with provided options
        const response = await axios(options);

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }

        const responseData = response.data;

        // Cache the response data with a specified expiration time (e.g., 1 hour)
        const expirationTime = Date.now() + 3600000; // 1 hour in milliseconds
        await localforage.setItem(cacheKey, responseData);
        await localforage.setItem(`${cacheKey}:expiration`, expirationTime);

        return responseData;
    } catch (err) {
        throw err;
    }
};
