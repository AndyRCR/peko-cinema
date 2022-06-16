import React from 'react'
import MovieList from '../MovieList/MovieList'
import './MovieListContainer.css'

const MovieListContainer = () => {
  return (
    <div className='movieListContainer'>
      <div className='movieListFlexContainer'>
        <div className='title'>Películas</div>
        <MovieList/>
      </div>
    </div>
  )
}

export default MovieListContainer