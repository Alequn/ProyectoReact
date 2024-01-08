import { useContext } from "react"
import { Products } from "../Products/Products"
import { CartContext } from "../../context/CartContext";
import "./Cart.css"



export const Cart = () => {


    const { cartProducts, removeProduct } = useContext( CartContext );
    console.log(cartProducts)



    return (

<>
        {cartProducts.map((product) => (

<figure className="border border-1 p-3 d-flex flex-column m-2 mt-5 webProducts" key={product.name}>

<img src={product.img} alt={product.img} />
<figcaption>{product.name}</figcaption>
<p><span>Precio:</span> $USD {product.price}.</p>
<p><span>Cantidad:</span> {product.quantity} Unidad.</p>
<p><span>Subtotal:</span> $USD {product.subTotal}.</p>



<button className="btn btn-danger mt-2" onClick={() => removeProduct(product.name)}>Eliminar</button>
</figure>
))}

</>
)};