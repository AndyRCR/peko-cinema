import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './MovieDetail.css'
import { Link } from 'react-router-dom'

const MovieDetail = () => {
  const { currentMovie } = useContext(GlobalContext)
  return (
    <div className='movieDetail'>
      <div className='movieDetailFlexContainer'>
        <div className='movieHeader'>
          <h1>{currentMovie.name}</h1>
          <Button
            component={Link}
            to={'#compra'}
            className='buyButton'
            variant='contained'>
            <FontAwesomeIcon className='ticketIcon' icon={faTicket} />
            Comprar
          </Button>
        </div>
        <div>
          {currentMovie.genre} | {currentMovie.duration} | +14
        </div>
        <div className='movieSinopsis'>
          <div className='imgContainer'>
            <img src={currentMovie.image} alt="" />
          </div>
          <div className='infoContainer'>
            <h2>Sinopsis:</h2>
            <div>{currentMovie.sinopsis}</div>
            <h4>Director</h4>
            <div>-</div>
            <h4>Idioma</h4>
            <div className='languages'>
              <div className='languageItem'>SUBTITULADO</div>
              <div className='languageItem'>DOBLADO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail