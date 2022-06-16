import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import FunctionList from '../FunctionList/FunctionList'
import MovieDetail from '../MovieDetail/MovieDetail'
import MovieTrailer from '../MovieTrailer/MovieTrailer'
import './MovieDetailContainer.css'

const MovieDetailContainer = () => {

  const {getMovie, currentMovie} = useContext(GlobalContext)
  let {id} = useParams()

  useEffect(() => {
    getMovie(id)
  }, [])

  return (
    <div className='movieDetailContainer'>
      {currentMovie != null ? (
        <>
          <MovieTrailer movie={currentMovie}/>
          <MovieDetail/>
          <FunctionList/>
        </>
      ) : <h1>Cargando</h1>}
    </div>
  )
}

export default MovieDetailContainer