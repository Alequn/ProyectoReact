import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { useParams } from "react-router-dom";
import { myFetch } from "../hooks/myFetch";
import { useCount } from "../hooks/useCount";

export const CharacterListContainer = () => {

    const { gender } = useParams();
    

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1)

    const {count, increment, decrement} = useCount(1)


    const {data, isLoading} = myFetch(`https://rickandmortyapi.com/api/character/${ gender ? `?page=${count}&gender=${gender}` : `?page=${count}` }`);

    return(
        <div className="container d-flex flex-column align-items-center">
                <div>
                    {count > 1 && <button className="btn btn-danger mt-2 mb-2" onClick={decrement}>Página anterior</button>}
                    <strong className="m-3">Página: {count} </strong>
                    {count < 42 && <button className="btn btn-danger mt-2 mb-2" onClick={increment}>Página siguiente</button>}
                </div>
                {isLoading ? <h3>Cargando...</h3> : <CharacterList characters={data.results}/>}
        </div>
    )
}