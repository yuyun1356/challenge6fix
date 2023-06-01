import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDetails } from '../redux/reducers/movies'
import { getDetails } from '../redux/actions/movies'
import './movieDetail.scss'

const MovieDetail = () => {

  const {id} = useParams()
  const dispatch = useDispatch()

  const details = useSelector(getAllDetails);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <div className="detailBase">
      <div className='movie'>
        <div className="movie__gambar">
          <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${details ? details.backdrop_path : ""}`} />
        </div>
        <div className="movie__detail">
          <div className="detail__kiri">
            <div className="movie__posterBox">
              <img className='movie__poster' src={`https://image.tmdb.org/t/p/original${details ? details.poster_path : ""}`} />
            </div>
          </div>
          <div className="detail__kanan">
            <div className="detail__top">
              <div className="detail__nama">
                {details ? details.original_title : ""}
              </div>
              <div className="detail__tagline">
                {details ? details.tagline : ""}
              </div>
              <div className="detail__rating">
                {details ? details.vote_average : ""}
                <span className="detail__count">
                  {details ? "(" + details.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="detail__runtime">       {details ? details.runtime + " mins" : ""}
              </div>
              <div className="detail__release">  {details ? "Release date: " + details.release_date : ""}
              </div>
              <div className="detail__genres">
                {
                  details && details.genres? 
                  
                  details.genres.map(genre => (
                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                  )) 
                  : ""
                }
              </div>
            </div>
            <div className="detail__bottom">
              <div  className="detail__sinopsis">Sinopsis
              </div>
              <div className='detail__overview'>{details ? details.overview : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail