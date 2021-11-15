import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: false
    })

    useEffect(() => {
        setTimeout(() => {
            getGifs(category).then((gifs) => 
                setState({
                    data: gifs,
                    loading: true
                })
            )
        }, 3000);
    }, [category])

    return state
}