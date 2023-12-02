import { Link } from "react-router-dom"
import "./Character.css"

export const Character = ({ name, image, id }) => {
  return (
    <div className="border bordedr-3 p-3 d-flex flex-column m-2 card">
        <p><strong><span className="red">Personaje:</span> {name}</strong></p>
        <img src={image} alt="" />
        <Link to={`/character/${id}`}>
        <button className="btn btn-danger mt-2">Ver más</button>
        </Link>
    </div>
  )
}
