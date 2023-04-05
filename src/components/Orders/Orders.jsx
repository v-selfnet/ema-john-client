import React from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';
import '../Cart/Cart.css';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    // cart shared only one page [Shop]
    // const products = useLoaderData();
    // console.log(products)

    // this cart share both page [Shop & Orders] from cartProductsLoader.js
    const cart = useLoaderData();
    
    return (
        <div className='shop-container'>
            
            <div className='products'>
                {/* <h2>Order: {products.length}</h2> */}
                <h2>Order: {cart.length}</h2>
            </div>

            <div className='cart'>
                
                <Cart cart={cart}> </Cart>
            </div>

        </div>
    );
};

export default Orders;