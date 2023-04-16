import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
       const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password !==confirm){
            setError('Your Password did not match')
        }
        console.log(email, password, confirm) 
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
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Already have an account <Link to='/signup'>Please Login</Link></p>
        </div>
    );
};

export default SignUp;