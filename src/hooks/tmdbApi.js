import { useQuery, useQueryClient } from "@tanstack/react-query"
import { request } from "../utils/axios-utils"
import { getTMDbRequestToken } from "../utils/auth"


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

// mutation queries
// export const validateWithLogin = async (login) => {
//     // return axios.post(`http://localhost:4000/superheroes`, hero)
//     const { request_token } = await getTMDbRequestToken()
//     return request({ url: '/authentication/token/validate_with_login', method: 'post', data: { ...login, request_token } })
// }



// export const useValidateLogin = ({ ...login }) => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationKey: ["validate-login"],
//         mutationFn: validateWithLogin,

//         // for update with mutation response
//         onSuccess: (data) => {
//             queryClient.setQueryData(
//                 ["validate-login"],
//                 (oldQueryData) => {
//                     return oldQueryData ?
//                         {
//                             ...oldQueryData,
//                             data: [...oldQueryData.data,
//                             { ...data.data }]
//                         }
//                         : oldQueryData
//                 }
//             )
//         }
//     })
// }