import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Inventory = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>   
            <h2>inventory</h2>
            <p>{user}</p>
        </div>
    );
};

export default Inventory;