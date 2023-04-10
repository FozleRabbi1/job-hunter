// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getApplayFun();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('applay-JobData', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getApplayFun();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('applay-JobData', JSON.stringify(shoppingCart));
    }
}

const getApplayFun = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applay-JobData');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


const deleteShoppingCart = () => {
    localStorage.removeItem('applay-JobData');
}

export {
    addToDb,
    removeFromDb,
    getApplayFun,
    deleteShoppingCart
}
