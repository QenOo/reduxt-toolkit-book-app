import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch('http://localhost:3008/books');
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addBook = createAsyncThunk(
    'books/addBook',
    async (bookData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch('http://localhost:3008/books', {
                method: 'POST',
                body: JSON.stringify(bookData),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const INITIAL_STATE = {
    books: [],
    isLoading: false,
    error: null,
};

export const booksSlice = createSlice({
    name: 'books',
    initialState: INITIAL_STATE,
    extraReducers: {
        // Get Books
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Set Book
        [addBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload);
        },
        [addBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default booksSlice.reducer;
