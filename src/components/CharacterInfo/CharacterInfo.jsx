import { Link } from "react-router-dom"
import "./CharacterInfo.css"

export const CharacterInfo = ({name, species, location, image, gender}) => {
  return (
    <div className="p-5 border border-3 rounded-4 card">
        <div className="d-flex justify-content-center">
            <img src={image} alt="" />
        </div>
        <div className="d-flex flex-column">
            <hr/>
            <p className="strong"><span className="red">Nombre:</span> {name}</p>
            <p className="strong"><span className="red">Genero:</span> {gender}</p>
            <p className="strong"><span className="red">Planeta:</span> {location.name}</p>
            <p className="strong"><span className="red">Especie:</span> {species}</p>
            <hr/>
            <Link to={"/"}>
            <button className="btn btn-danger mt-2">Volver</button>
            </Link>
        </div>
    </div>
  )
}
