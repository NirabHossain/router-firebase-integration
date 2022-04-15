import React from 'react';
import useFirebase from '../../hooks/UseFirebase';
import './Login.css';

const Login = () => {
    const {signInWithGoogle}=useFirebase({});
    return (
        <div>
            <h3>Please login </h3>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <form action="">
                <input type="email" placeholder='Email' /><br />
                <input type="password" placeholder='Password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;