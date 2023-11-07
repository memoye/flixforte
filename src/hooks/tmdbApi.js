import { useQuery, useQueryClient } from "@tanstack/react-query"
import { request } from "../utils/axios-utils"


const fetchMoviesCategory = ({ queryKey }) => {

    const [, category] = queryKey
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