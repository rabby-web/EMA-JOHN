import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
            <nav className='header-nav'>
                <img src={logo} alt="logo" />
                <div className='nav-list'>
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                    <span>{user?.email}</span>
                </div>
            </nav>
    );
};

export default Header;