import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSearchs } from '../redux/reducers/movies';
import { getSearchs } from '../redux/actions/movies';
import './search.scss'

const Search = () => {

    const location = useLocation();
    const keyword = location.state ? location.state.keyword : null;

    //dispatch => to change the global state in redux
  const dispatch = useDispatch();

  //useSelector => to access the global state
  const search = useSelector(getAllSearchs);

  useEffect(() => {
    dispatch(getSearchs(keyword));
  }, [dispatch, keyword]);

  return (
    <div className='search'>
        <h3>Search result '{keyword}'</h3>
        {search.map((movie) => (
            <MovieCard movie={movie} />
        ))}
    </div>
  )
}

export default Search