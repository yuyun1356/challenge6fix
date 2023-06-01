import React from 'react'
import MovieList from '../components/MovieList'
import './home.scss'
import Header from '../components/Header'

const Home = () => {
  
  return (
    <div className='home'>
      <Header />
      <MovieList />
    </div>
  )
}

export default Home