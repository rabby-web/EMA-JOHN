import React, { useContext } from 'react';
import './Inventory.css'
import { AuthContext } from '../../contexts/UserContext';

const Inventory = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This is Inventory Section</h2>
            <h2>Inventory section</h2>
            <h3>{user?.email}</h3>
        </div>
    );
};

export default Inventory;