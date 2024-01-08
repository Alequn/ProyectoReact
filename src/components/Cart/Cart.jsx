import { useContext } from "react"
import { Products } from "../Products/Products"
import { CartContext } from "../../context/CartContext";



export const Cart = () => {


    const { cartProducts } = useContext( CartContext );
    console.log(cartProducts)


    return(
        <div>
                <h1>Carrito</h1>
        </div>
    )
}