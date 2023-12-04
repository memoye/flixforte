import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { request } from "../utils/axios-utils"
import { useNavigate } from "react-router-dom";
import { useCyclicState } from "../hooks"

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

const fetchMoviesCategory = ({ queryKey }) => {
    const [_primaryKey, category] = queryKey
    return request({ url: category })
}

export const useMoviesCategory = (category) => {
    // const queryClient = useQueryClient()

    return useQuery({
        queryKey: ["movies", category],
        queryFn: fetchMoviesCategory,
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

const fetchTrendingData = ({ queryKey }) => request({ url: queryKey.join('/') })
export const useTrendingData = () => {
    const [timeWindow, _setTimeWindow, handleTimeWindowChange] = useCyclicState(['day', 'week'])

    const trendingData = useQuery({
        queryKey: ["trending", "all", timeWindow],
        queryFn: fetchTrendingData,
        staleTime: 10 * 3600 * 1000,
        refetchOnWindowFocus: false,
    })

    return { ...trendingData, handleTimeWindowChange }
}

const fetchMovies = ({ queryKey }) => request({ url: queryKey.join('/') })


export const useMoviesData = (queryKey) => {
    const [timeWindow, _setTimeWindow, handleTimeWindowChange] = useCyclicState(['day', 'week'])

    if (queryKey.includes('trending')) {
        const moviesData = useQuery({
            queryKey: [...queryKey, timeWindow],
            queryFn: fetchTrendingData,
            staleTime: 10 * 3600 * 1000,
            refetchOnWindowFocus: false,
        })

        return { ...moviesData, handleTimeWindowChange }
    } else {
        return useQuery({
            queryKey,
            queryFn: fetchMovies,
            staleTime: 10 * 3600 * 1000,
            refetchOnWindowFocus: false,
        })
    }
}