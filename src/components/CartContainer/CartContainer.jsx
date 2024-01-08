import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Cart } from "../Cart/Cart"
import "./CartContainer.css"

export const CartContainer = () => {

    const { clearCart } = useContext( CartContext );

    return(
        <>
        <div className="containerProducts">
                <Cart/>

        </div>
        <button className="vaciar btn btn-danger mt-2" onClick={() => clearCart()}>Vaciar Carrito</button>
        </>
    )
}