import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    // step-1
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // step-2
    // must use async, ehen cart is in DB
    const storedCart = getShoppingCart();
    const savedCart = [];

    // we get select item length from local storage
    // console.log(products);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    
    // can return two value like this, if needed
    // return [products, savedCart];
    // return {products, savedCart}
    // return {products, cart: savedCart}
    
    return savedCart;

    // step-1
    // return products;
}

export default cartProductsLoader;