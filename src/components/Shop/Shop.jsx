import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
   
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // add data local storage
    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    
   
    const addCart = (product) => {
        // console.log('added cart', product)
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity =1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addCart={addCart} // send function-property to [props] in Product
                    ></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;