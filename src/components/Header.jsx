import React, { useEffect } from 'react'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getAllHeaders } from '../redux/reducers/movies';
import { getHeaders } from '../redux/actions/movies';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {

    //dispatch => to change the global state in redux
  const dispatch = useDispatch();

  //useSelector => to access the global state
  const headers = useSelector(getAllHeaders);

  useEffect(() => {
    dispatch(getHeaders());
  }, [dispatch]);


  return (
    <div className='header'>
        <div className="headline">
          <Carousel 
            id='slider__carousel'
            autoPlay={true}
            transitionTime={8}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}            
          >
            {headers.map((movie) => (
              <Link style={{textDecoration:"none"}} to={`/movie/${movie.id}`} >
                <div className="slider__image">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title}/>
                </div>
                <div className="slider__info">
                  <div className="slider__title">
                  {movie ? movie.original_title: ""}
                  </div>
                  <div className="slider__runtime">
                    <div className="slider__date">
                      {movie ? movie.release_date : ""}
                    </div>
                    <div className="slider__rating">
                      {movie ? movie.vote_average :""}
                    </div>
                    <div className="logo__rating">
                    </div>
                  </div>
                  <div className="slider__deskripsi">
                  {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
    </div>
  )
}

export default Header