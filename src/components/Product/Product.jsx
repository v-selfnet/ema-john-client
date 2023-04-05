import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, price, seller, ratings} = props?.product;

    /* transfer data between two components
    receive function with props from Shop
    because of react is unidirection.
    only receive data from its parent */

    const addCart = props.addCart; // [addCart] variable receive a function
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h2>Price: <small>$</small>{price}</h2>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star</p>
            <button onClick={() => addCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;