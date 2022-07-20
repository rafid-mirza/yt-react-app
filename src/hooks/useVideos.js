import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        onSearch(defaultSearchTerm)
    }, [defaultSearchTerm])

    const onSearch = async (term) => {
        const response = await youtube.get('/search', {params: {q : term}})
        setVideos(response.data.items)
    }

    return [videos, onSearch]
}

export default useVideos;