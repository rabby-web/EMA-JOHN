import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
            </form>
        </div>
    );
};

export default Login;