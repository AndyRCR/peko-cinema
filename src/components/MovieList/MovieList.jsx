import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Movie from '../Movie/Movie'
import './MovieList.css'

const MovieList = () => {

  const {movieList} = useContext(GlobalContext)

  useEffect(() => {}, [movieList])
  
  return (
    <div className='movieList'>
      {movieList != null ? (
        movieList.length > 0 ? (
          movieList.map((element,index) => (
            <Movie key={index} item={element}/>
          ))
        ) : <h1 style={{textAlign: 'center', gridColumn: '1/5'}}>No se encontraron películas</h1>
      ) : (
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', gridColumn: '1/5' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  )
}

export default MovieList