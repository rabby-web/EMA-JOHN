import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
            <nav className='header-nav'>
                <img src={logo} alt="logo" />
                <div className='nav-list'>
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    {
                        user?.uid ?
                        <button onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </>
                    }
                </div>
            </nav>
    );
};

export default Header;