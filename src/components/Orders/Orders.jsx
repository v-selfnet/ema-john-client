import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';
import '../Cart/Cart.css';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../Review/ReviewItem';
import '../Review/Review.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    // cart shared only one page [Shop]
    // const products = useLoaderData();
    // console.log(products)

    // this cart share both page [Shop & Orders] from cartProductsLoader.js
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    
    const removeCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id); // user define function
    }

    return (
        <div className='shop-container'>
            
            <div className='review-container'>
                {/* <h2>Order: {products.length}</h2> */}
                {/* <h2>Order: {cart.length}</h2> */}
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeCart={removeCart}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart'>
                
                <Cart cart={cart}> </Cart>
            </div>

        </div>
    );
};

export default Orders;