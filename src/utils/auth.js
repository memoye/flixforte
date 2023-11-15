import { request } from "./axios-utils"
import { hasExpired } from "./misc_utils"

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
    try {
        const validated_login = await request({
            url: '/authentication/token/validate_with_login',
            method: 'post',
            data: { ...login, request_token }
        })

        if (validated_login.status === 200) {
            await sessionStorage.setItem(
                'validated_user',
                JSON.stringify({
                    username: login.username,
                    ...validated_login.data
                }),
            )
        }

        // console.log(hasExpired(JSON.parse(sessionStorage.getItem('validated_user')).expires_at))

        return validated_login
    } catch (e) {
        return e
    }
}

export const createSession = async () => {
    let validated_user = sessionStorage.getItem('validated_user')

    if (validated_user === null || hasExpired(validated_user.expires_at)) {
        sessionStorage.removeItem('validated_user')

    }
}