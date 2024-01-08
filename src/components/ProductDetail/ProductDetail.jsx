import { useEffect, useState, useContext } from "react"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import { seedProducts } from "../../utils/seedProducts"
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks/useCount";

export const ProductDetail = () => {

    const { addProduct } = useContext(CartContext);

    const { increment, decrement, count } = useCount(1, 100)

    const { name } = useParams();

    const [products, setProducts] = useState([]);

    const getProductsDB = (name) => { 

        const myProducts = name ? query (collection(db, "products"), where("name", "==", name)) : query (collection(db, "products"));

        getDocs(myProducts)
            .then( resp =>{
                
                const productList = resp.docs.map( doc => {
                    const product = {
                        id: doc.id,
                        ...doc.data()
                    };

                    return product;
                } )

                setProducts(productList);
            } )
            .catch(error => console.log(error));

     }

    useEffect( () =>{
        getProductsDB(name);
    }, [name])


return(
    <>
    {products.map((product) => (
        <figure className="border border-1 p-3 d-flex flex-column m-2 mt-5 webProducts" key={product.id}>

            <img src={product.img} alt={product.img} />
            <figcaption>{product.name}</figcaption>
            <p><span>Precio:</span> $USD {product.price}.</p>
            <p><span>Stock:</span> {product.stock} Unidades.</p>
            <p><span>Descripción:</span> {product.description}.</p>

            <div className="count">
            <button className="btn-success" onClick={increment}>+</button>
            <div>{count}</div>
            <button className="btn-danger" onClick={decrement}>-</button>
            </div>

            <button className="btn btn-success mt-2" onClick={() => addProduct( product.price, name, count, product.img)}>Agregar al carrito</button>

          <a href="/">
            <button className="btn btn-danger mt-2">Volver</button>
          </a>
        </figure>
    ))}
    </>
)
}