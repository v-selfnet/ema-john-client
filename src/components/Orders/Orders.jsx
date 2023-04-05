import React from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';
import '../Cart/Cart.css';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <div className='shop-container'>
            
            <div className='products'>
                <h2>Order: {products.length}</h2>
                <h2>Order:</h2>
            </div>

            <div className='cart'>
                
                <Cart cart={[]}> </Cart>
            </div>

        </div>
    );
};

export default Orders;