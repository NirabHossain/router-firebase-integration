import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form action="">
                <input type="text" placeholder='Name' /><br />
                <input type="email" placeholder='Email' /><br />
                <input type="password" placeholder='Password' /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;