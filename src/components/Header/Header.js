import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/UseFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/products">Products</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ? 
                        <Link to="/logout" onClick={handleSignOut}>Logout</Link>
                        :
                        <Link to="/login">Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;