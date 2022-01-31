import React, { Fragment } from 'react';

const BookInfo = ({ singleBook }) => {
    return (
        <Fragment>
            <h2>Book Details</h2>
            {singleBook ? (
                <div>
                    <p className='fw-bold'>Title: {singleBook.title}</p>
                    <p className='fw-light'>
                        Description: {singleBook.description}
                    </p>
                    <p className='fw-light'>Uploaded: {singleBook.userName}</p>
                    <p className='fst-italic'>Price: {singleBook.price}</p>
                </div>
            ) : (
                <div className='alert alert-secondary' role='alert'>
                    There is no Book selected yet. Please select!
                </div>
            )}
        </Fragment>
    );
};

export default BookInfo;
