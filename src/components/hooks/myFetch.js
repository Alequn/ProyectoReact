import { useEffect, useState } from "react"

export const myFetch = ( url ) => {

    const [dataFetch, setDataFetch] = useState({
        data: null,
        isLoading: true
    })

    const getData = async () => {

        try {
            const response = await fetch(url);
            const responseData = await response.json();
            setDataFetch({
                data: responseData,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
        }

    }


    useEffect( () => { 
        getData()
     }, [url] )

     return {
        data: dataFetch.data,
        isLoading: dataFetch.isLoading
     }

}
