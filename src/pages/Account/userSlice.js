import { createSlice } from '@reduxjs/toolkit';

// Function to get user state from sessionStorage
const getUserFromSessionStorage = () => {
    const userJSON = sessionStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : null;
};

const initialState = getUserFromSessionStorage() || {
    logging_in: false,
    session_id: null,
    logged_in: false,
    user_name: null,
    login_error: null, // store any errors from the login flow
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggingIn: (state, action) => {
            state.logging_in = action.payload
        },
        setUser: (state, action) => {
            const { session_id, logged_in, user_name } = action.payload;
            state.session_id = session_id;
            state.logged_in = logged_in;
            state.user_name = user_name;

            // Save user state to sessionStorage
            sessionStorage.setItem('user', JSON.stringify(state));
        },
        clearUser: (state) => {
            // Clear user state from sessionStorage
            sessionStorage.removeItem('user');

            // Reset user state to initial state
            return initialState;
        },
        setLoginError: (state, action) => {
            state.logged_in = false,
                state.session_id = null,
                state.user_name = null,
                state.login_error = action.payload

            sessionStorage.removeItem('user');
        },
    },
});

export const { setUser, clearUser, setLoginError, setLoggingIn } = userSlice.actions;

export default userSlice.reducer;