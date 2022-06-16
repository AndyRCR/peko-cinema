import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Function.css'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Button } from '@mui/material'

const Function = ({funcion}) => {

  const {currentMovie, setCurrentFunction} = useContext(GlobalContext)

  return (
    <div className='function'>
      <Button
      className='functionInfo'
      component={Link}
      to={`/funcion`}
      onClick={()=> setCurrentFunction(funcion)}
      >
        <div className='dateInfo'>{funcion.date} {funcion.hour.hour}</div>
        <div className='seatsInfo'>Disponibles: {funcion.hour.seats.filter(seat => seat.availability).length}</div>
      </Button>
      <FontAwesomeIcon style={{fontSize: '20px'}} icon={faCouch}/>
    </div>
  )
}

export default Function