import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    console.log(movies.topRatedMovies)
    return (

        movies.nowPlayingMovies && (
            <div className=' bg-black'>
                <div className='-mt-52 relative pl-6 z-20'>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.trendingMovies} />
                    <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                </div>
            </div>
        )
    )
}

export default SecondaryContainer
