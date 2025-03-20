import { useEffect } from "react"
import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    //fetching the trailer video and updating the store with the trailer video data
    const dispatch = useDispatch()

    const getMoviesVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=e", options)
        const json = await data.json()
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
        getMoviesVideo()
    }, [])

}

export default useMovieTrailer