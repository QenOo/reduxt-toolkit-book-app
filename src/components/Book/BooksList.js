import React from 'react';
// import { useDispatch } from 'react-redux';
// import {  } from '../../store/books/booksSlice';

const BooksList = ({ isLoading, books, isLoggedIn, removeBook, dispatch }) => {
    // const dispatch = useDispatch();
    const booksList =
        books.length > 0
            ? books.map((book) => (
                  <li
                      className='list-group-item d-flex  justify-content-between align-items-center'
                      key={book.id}
                  >
                      <div>{book.title}</div>
                      <div className='btn-group' role='group'>
                          <button type='button' className='btn btn-primary'>
                              Read
                          </button>
                          <button
                              type='button'
                              className='btn btn-danger'
                              disabled={!isLoggedIn}
                              onClick={() => dispatch(removeBook(book.id))}
                          >
                              Delete
                          </button>
                      </div>
                  </li>
              ))
            : 'No Books yet';

    return (
        <div>
            <h2>Books List</h2>
            {isLoading ? (
                <div className='text-center'>
                    <div className='spinner-border text-primary' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            ) : (
                <ul className='list-group'>{booksList}</ul>
            )}
        </div>
    );
};

export default BooksList;
