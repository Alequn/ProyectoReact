import { useEffect, useState } from "react"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import "./Products.css"
import { seedProducts } from "../../utils/seedProducts"

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [changes, setChanges] = useState(true);

    const disscountStock = async (product) => {
        const productRef = doc(db, "products", product.id);
        const newStock = product.stock - 1;
        await updateDoc(productRef, {stock: newStock})
        setChanges(!changes);
    }

    const getProductsDB = (category) => { 

        const myProducts = category ? query (collection(db, "products"), where("category", "==", category)) : query (collection(db, "products"));

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
        getProductsDB();
        // seedProducts();
    }, [changes])


return(
    <>
    {products.map((product) => (
    <div className="container d-flex flex-column align-items-center">
      
      <div className="d-flex flex-sm-wrap">

        <div className="border border-1 p-3 d-flex flex-column m-2 card" key={product.id}>

            {/* <img src={product.img} alt={product.img} /> */}
            <p>Nombre: {product.name}</p>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
            {/* <p>Descripción: {product.description}</p> */}

            <button onClick={() => disscountStock(product)} className="btn btn-danger mt-2">Agregar al carrito</button>
        </div>

      </div>

    </div>
    ))}
    </>
)
}


// const product = {
//     id : resp.docs[0].id,
//     ...resp.docs[0].data()
// }