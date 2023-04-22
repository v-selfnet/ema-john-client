import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Inventory = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    
    return (
        <div>   
            <h2>inventory</h2>
            <p>{user}</p>
        </div>
    );
};

export default Inventory;