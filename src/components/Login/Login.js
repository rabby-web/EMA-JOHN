import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error());
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;