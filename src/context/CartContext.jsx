import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addProduct = (product, quantity) => {
        const { name, price } = product;
        const newProduct = {
            name,
            price,
            quantity,
            subTotal: quantity * price,
        };

        setCartProducts([...cartProducts, newProduct]);
    }

    const objetValue = {
        cartProducts,
        addProduct
    }

return <CartContext.Provider value={objetValue}> { children } </CartContext.Provider>

}