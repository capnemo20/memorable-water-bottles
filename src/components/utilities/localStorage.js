const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    cart.push(id);
}

export {getCartFromLocalStorage, addItemToCartLocalStorage};