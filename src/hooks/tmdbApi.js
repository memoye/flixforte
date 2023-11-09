import { useQuery, useQueryClient } from "@tanstack/react-query"
import { request } from "../utils/axios-utils"


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
