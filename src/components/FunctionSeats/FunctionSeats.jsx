import { Button } from '@mui/material'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import LockedSeat from '../LockedSeat/LockedSeat'
import Seat from '../Seat/Seat'
import './FunctionSeats.css'
import { Link } from 'react-router-dom'

const FunctionSeats = () => {

    const {currentFunction, setAmount, setSelectedSeats, selectedSeats} = useContext(GlobalContext)

    useEffect(() => {
        setAmount(0)
        setSelectedSeats([])
    }, [currentFunction])
    

  return (
    <div className='functionSeats'>
        <div className='imgContainer'>
            <img src='https://www.cineplanet.com.pe/a9008c6d4f95af9f262974a9552ffdee.png'/>
        </div>
        <div className='seatsContainer'>
            {currentFunction && currentFunction.hour.seats.map((seat,key) => (
                seat.availability ? (
                    <Seat
                    seat={seat}
                    key={key+1}/>
                ) : (
                    <LockedSeat
                    seat={seat}
                    key={key+1}/>
                )
                
            ))}
        </div>
        <div className='buttonContainer'>
            <div>
                <span style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#F2374C'
                }}>Asientos seleccionados:</span><br/>
                {selectedSeats && selectedSeats.sort().map((e,index) => (
                    <span style={{fontSize: '18px'}} key={index}> {e} </span>
                ))}
            </div>
            <div>
                <Button
                component={Link}
                to={'/dulceria'}
                className='nextButton'
                variant='contained'
                disabled = {selectedSeats.length > 0 ? false : true}>
                    <FontAwesomeIcon className='nextIcon' icon={faArrowRight}/> 
                    Comprar
                </Button>
            </div>
        </div>
    </div>
  )
}

export default FunctionSeats