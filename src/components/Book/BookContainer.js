import React, { Fragment, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks, removeBook } from '../../store/books/booksSlice';

import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const { isLoading, books } = useSelector((state) => state.books);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    const reedBook = (id) => {
        const selectedBook = books.find((book) => book.id === id);
        setSelectedBook((prev) => ({ ...prev, ...selectedBook }));
    };

    return (
        <Fragment>
            <hr className='my-5' />
            <div className='row'>
                <div className='col'>
                    <BooksList
                        isLoading={isLoading}
                        books={books}
                        isLoggedIn={isLoggedIn}
                        removeBook={removeBook}
                        dispatch={dispatch}
                        reedBook={reedBook}
                    />
                </div>
                <div className='col side-line'>
                    <BookInfo singleBook={selectedBook}/>
                </div>
            </div>
        </Fragment>
    );
};

export default PostContainer;
