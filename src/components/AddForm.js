import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../store/books/booksSlice';

const Addform = () => {
    // Get Data from
    const { isLoggedIn } = useSelector((state) => state.auth);
    
    // Refs for
    const title = useRef(null);
    const price = useRef(null);
    const description = useRef(null);

    // Dispatch
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value,
        };
        dispatch(addBook(data));
        title.current.value = null;
        price.current.value = null;
        description.current.value = null;
    };
    return (
        <div className='row'>
            <div className='col-6 offset-3 mt-3'>
                <h2>Insert Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='title'>
                            Title
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='title'
                            required
                            ref={title}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='price'>
                            Price
                        </label>
                        <input
                            type='number'
                            className='form-control'
                            id='price'
                            required
                            ref={price}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='Description'>
                            Description
                        </label>
                        <textarea
                            className='form-control'
                            id='description'
                            rows='3'
                            required
                            ref={description}
                        ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addform;
