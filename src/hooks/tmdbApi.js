import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { request } from "../utils/axios-utils"
import { useNavigate } from "react-router-dom";

/**
 * Retrieves a new TMDb request token.
 *
 * @returns {Promise<Object>} A promise that resolves to the TMDb request token data.
 * @throws {Error} If the request fails or the response indicates failure.
 */
export const getTMDbRequestToken = async () => {
    try {
        const response = await request({ url: '/authentication/token/new' });

        if (response.status !== 200 || !response.data.success) {
            throw new Error("Request failed: Invalid response");
        }

        return response.data;
    } catch (error) {
        console.error("Error while fetching TMDb request token:", error.message);
        throw error; // Re-throw the error to be caught by the calling code if necessary
    }
};

export const tmdbLogin = async ({ username, password }) => {
    const navigate = useNavigate();

    try {
        // Step 1: Get TMDb request token
        const { request_token } = await getTMDbRequestToken();

        // Step 2: Validate the token
        const tokenValidation = await request({
            url: '/authentication/token/validate_with_login',
            data: { username, password, request_token },
        });

        if (tokenValidation.status !== 200 || !tokenValidation.data.success) {
            throw new Error("Request failed: Invalid response");
        }

        // Step 3: Generate session
        const sessionIdResponse = await request({
            url: '/authentication/session/new',
            method: 'post',
            data: { request_token: tokenValidation.data.request_token },
        });

        if (!sessionIdResponse.data.success) {
            throw new Error("Session generation failed");
        }

        sessionStorage.setItem('tmdb_session', JSON.stringify(sessionIdResponse.data))
        return sessionIdResponse.data;
    } catch (error) {
        console.error("Error during TMDb login:", error.message);
        throw error; // Re-throw the error to be caught by the calling code if necessary
    }
};



const fetchMoviesCategory = ({ queryKey }) => {
    const [_primaryKey, category] = queryKey
    return request({ url: category })
}

export const useMoviesCategory = (category) => {
    // const queryClient = useQueryClient()

    return useQuery({
        queryKey: ["movies", category],
        queryFn: fetchMoviesCategory,
        // initialData: () => {
        //     const moviesCategory = queryClient.getQueryData(['movies', category])?.data

        //     if (moviesCategory) {
        //         return { data: moviesCategory }
        //     } else {
        //         return undefined
        //     }
        // }
    })
}

const fetchVideos = ({ queryKey }) => {
    const url = queryKey.join('/') + '/videos'
    return request({ url })
}

export const useVideosData = (movie_id) => {
    return useQuery({
        queryKey: ["movie", movie_id],
        queryFn: fetchVideos
    })
}
