import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getUpcoming } from '../redux/actions/movies'
import { getAllMovies, getAllUpcoming } from '../redux/reducers/movies'
import MovieCard from './MovieCard'
import './movieList.scss'

const MovieList = () => {

  //dispatch => to change the global state in redux
  const dispatch = useDispatch();

  //useSelector => to access the global state
  const movies = useSelector(getAllMovies);

  const upcoming = useSelector(getAllUpcoming);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getUpcoming())
  }, [dispatch]);

  
  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>POPULAR MOVIES</h2>
        <div className="movie-container">
          {movies && movies.length && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>

      <div className="topmovie-list">
        <h2>UPCOMING MOVIES</h2>
        <div className="movie-container">
          {upcoming && upcoming.length && upcoming.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList