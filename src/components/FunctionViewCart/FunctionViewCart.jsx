import React, { useContext } from 'react'
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../../context/GlobalStateContext'
import './FunctionViewCart.css'

const FunctionViewCart = () => {

    const {currentFunction, currentMovie, total} = useContext(GlobalContext)

  return (
    <div className='functionViewCart'>
        <div className='imgContainer' style={{
            backgroundImage: `url("${currentMovie.image}")`
        }} />
        <div className='functionInfo'>
            <div className='movieName'>{currentMovie.name}</div>
            <div className='functionType'>
                2D, REGULAR,<br/>SUBTITULADO
            </div>
            <div className='sede'>
                Peko Cinema {currentFunction.sede}
            </div>
            <div className='date'>
                <FontAwesomeIcon className='icon' icon={faCalendar}/>
                {currentFunction.date}
            </div>
            <div className='hour'>
                <FontAwesomeIcon className='icon' icon={faClock}/>
                {currentFunction.hour.hour}
            </div>
            <div className='price'>
                Total: S/{total}
            </div>
        </div>
    </div>
  )
}

export default FunctionViewCart