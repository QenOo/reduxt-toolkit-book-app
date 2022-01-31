import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import authReducer from './auth/authSlice';

export default configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer,
    },
});
