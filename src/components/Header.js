import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/auth/authSlice';

const Header = () => {
    const { error } = useSelector((state) => state.books);
    const { isLoggedIn } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    return (
        <Fragment>
            {error && (
                <div
                    className='alert alert-danger alert-dismissible fade show fixed-top mt-5 w-50 m-auto'
                    role='alert'
                >
                    <strong className='mx-3'>ERROR! </strong>
                    {error}
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                    ></button>
                </div>
            )}

            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <div className='navbar-brand'>Navbar</div>
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={() => dispatch(logInOut())}
                    >
                        {isLoggedIn ? 'LogOut' : 'Login'}
                    </button>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
