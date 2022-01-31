import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        logInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;