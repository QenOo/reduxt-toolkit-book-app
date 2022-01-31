import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get Books in list
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

// Insert Book to list
export const addBook = createAsyncThunk(
    'books/addBook',
    async (bookData, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        try {
            bookData.userName = getState().auth.name;
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

// Remove Book from list
export const removeBook = createAsyncThunk(
    'books/removeBook',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await fetch(`http://localhost:3008/books/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            });
            return id;
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

        // remove Books
        [removeBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [removeBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = state.books.filter((el) => el.id !== action.payload);
        },
        [removeBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default booksSlice.reducer;
