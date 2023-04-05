import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { // can direct destructure here [props/cart]
    // console.log(cart);
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        // console.log(product.price)
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    let tax = totalPrice*7/100;
    let grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <hr />
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;