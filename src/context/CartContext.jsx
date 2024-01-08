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

    const removeProduct = (name) => { 

        const arrayFilter = cartProducts.filter(product => product.name !== name);
        setCartProducts(arrayFilter);

     }

     const clearCart = () => {

        setCartProducts([])

      }

    const objetValue = {
        cartProducts,
        addProduct,
        removeProduct,
        clearCart,
    }

return <CartContext.Provider value={objetValue}> { children } </CartContext.Provider>;

};