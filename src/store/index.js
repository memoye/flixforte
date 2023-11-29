import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../pages/Account/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})
