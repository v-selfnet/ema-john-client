import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Review.css';


const ReviewItem = ({product, removeCart}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="..." />
            <div>
                <p>{name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <button onClick={ () => removeCart(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;