import { getTMDbRequestToken } from "../hooks/tmdbApi";
import { request } from "../utils/axios-utils";
import { setLoginError, setUser, setLoggingIn } from "../pages/Account/userSlice";

export const tmdbLogin = async ({ username, password }, dispatch) => {
    dispatch(setLoggingIn(true))

    try {
        // Step 1: Get TMDb request token

        const { request_token } = await getTMDbRequestToken();

        // Step 2: Validate the token
        const tokenValidation = await request({
            url: '/authentication/token/validate_with_login',
            method: 'post',
            data: { username, password, request_token },
        });

        if (tokenValidation.status !== 200 || !tokenValidation.data.success) {
            dispatch(setLoginError('Request failed: Invalid response'))
            dispatch(setLoggingIn(false))
            throw new Error("Request failed: Invalid response");
        }

        // Step 3: Generate session
        const sessionIdResponse = await request({
            url: '/authentication/session/new',
            method: 'post',
            data: { request_token: tokenValidation.data.request_token },
        });

        if (!sessionIdResponse.data.success) {
            dispatch(setLoginError("Session generation failed"))
            dispatch(setLoggingIn(false))
            throw new Error("Session generation failed");
        }

        // console.log(sessionIdResponse)
        dispatch(setLoginError(''))
        // console.log(sessionIdResponse.data.session_id)
        dispatch(setUser({ session_id: sessionIdResponse.data.session_id, logged_in: true, user_name: username }))
        dispatch(setLoggingIn(false))
        return {
            session_id: sessionIdResponse.session_id,
            logged_in: true,
            user_name: username
        };
    } catch (error) {
        console.error("Error during TMDb login:", error.response.data.status_message || error.message);
        dispatch(setLoginError(error.response.data.status_message))
        dispatch(setUser({ session_id: sessionIdResponse.data.session_id, logged_in: true, user_name: username }))
        dispatch(setLoggingIn(false))
        throw error; // Re-throw the error to be caught by the calling code if necessary
    }
}