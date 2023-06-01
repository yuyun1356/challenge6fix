import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.scss'

const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
        <div className="cards">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt={movie.original_title} />
            <div className="cards__info">
                <div className="card__title">{movie?movie.original_title:""}</div>
                <div className="card__runtime">
                    {movie?movie.release_date:""}
                    <span className="card__rating">{movie?movie.vote_average:""}</span>
                </div>
                <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
            </div>
        </div>
    </Link>
  )
}

export default MovieCard