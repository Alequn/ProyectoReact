import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addProduct = (price, name, quantity, img) => {
        const newProduct = {
            name: name,
            price: price,
            quantity,
            subTotal: quantity * price,
            img: img,
        };

        setCartProducts([...cartProducts, newProduct]);
    }

    const objetValue = {
        cartProducts,
        addProduct,
    }

return <CartContext.Provider value={objetValue}> { children } </CartContext.Provider>;

};