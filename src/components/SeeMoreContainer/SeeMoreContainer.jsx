import { useEffect, useState } from "react";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";
import { useParams } from "react-router-dom";

export const SeeMoreContainer = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState(null)
    
    const getCharacter = async (id) => {

        try {

            const response = await fetch( `https://rickandmortyapi.com/api/character/${id}` );
            const Api = await response.json();
            setCharacter(Api);
            console.log(Api);

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        getCharacter(id)

    }, [])


  return (
    <div className="container d-flex justify-content-center mt-5">
        { character &&  <CharacterInfo {...character}/>}
    </div>
  )
}
