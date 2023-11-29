import { redirect } from "react-router-dom"
import { request } from "./axios-utils"
import { useMutation } from "@tanstack/react-query"

export const getTMDbRequestToken = async () => {
    const request_token = await request({ url: '/authentication/token/new' })

    try {
        if (request_token.status === 200) {
            if (request_token.data.success) {
                return request_token.data
            } else {
                throw new Error("Request failed!")
            }
        }
    } catch (e) {
        console.log(e.message)
    }
}

export const validateWithLogin = async (login) => {
    const { request_token } = await getTMDbRequestToken()
    // const { mutateAsync: tmdbLogin } = useMutation({
    //     mutationKey: ['userLogin'],
    //     mutationFn: 
    // })

    try {
        // validate request token
        const token_validation = await request({
            url: '/authentication/token/validate_with_login',
            method: 'post',
            data: { ...login, request_token }
        })

        return token_validation

    } catch (e) {
        return e
    }
}

export const generateSession = async (token_validation, username) => {
    let validated_user = {
        logged_in: false,
        user_name: null,
        session_id: null,
    }

    if (token_validation.status === 200) {
        // generate session id
        const session_id_response = await request({
            url: '/authentication/session/new',
            method: 'post',
            data: { request_token: token_validation.data.request_token }
        });

        if (session_id_response.data.success) {
            validated_user = {
                logged_in: true,
                user_name: username,
                session_id: session_id_response.data.session_id
            };
        } else {
            console.error('Failed to generate session ID:', session_id_response.error);

        }
    }

    // save user to local storage
    // console.log(validated_user)
    await sessionStorage.setItem('validated_user', JSON.stringify(validated_user));
    return validated_user
}


export const tmdb_logout = async () => {
    try {
        // Make a request to the server to log the user out
        const logout = await request({
            url: '/authentication/session',
            method: 'DELETE',
            data: {
                session_id: JSON.stringify(
                    JSON.parse(
                        sessionStorage
                            .getItem('validated_user')
                    )
                        .session_id)
            }
        });

        console.log(logout)
        // Optionally, you can also clear any local authentication state here
        // Example: await clearLocalAuthState();

        // Redirect or perform other actions after successful logout
        console.log('User logged out successfully');
        return redirect('/')

    } catch (error) {
        console.error('Error during logout:', error);
        throw error; // Propagate the error if needed
    }
};