import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelSignout = () => {
        logOut()
            .then(() => console.log('Sogn out Success!'))
            .catch(err => console.log(err.message))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
            {
                user ?
                    <>
                        <span className='text-orange-300'>{user.email}</span>
                        <button className='btn btn-xs' onClick={handelSignout}>Signout</button>
                    </> :
                    <button className='btn btn-xs'>
                        <Link to="/login">Please Signin</Link>
                    </button>
            }
        </nav>
    );
};

export default Header;