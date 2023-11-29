import { getTMDbRequestToken } from "../hooks/tmdbApi";
import { request } from "../utils/axios-utils";

export const tmdbLogin = async ({ username, password }) => {
    // const navigate = useNavigate();

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

        console.log(sessionIdResponse)
        sessionStorage.setItem('tmdb_session', JSON.stringify(sessionIdResponse.data))
        return sessionIdResponse.data;
    } catch (error) {
        console.error("Error during TMDb login:", error.message);
        throw error; // Re-throw the error to be caught by the calling code if necessary
    }
};
