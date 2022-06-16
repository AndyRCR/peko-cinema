import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Swal from 'sweetalert2'
import './Seat.css'

const Seat = ({seat, locked}) => {

    const {amount, setAmount, selectedSeats, setSelectedSeats, total, setTotal} = useContext(GlobalContext)
    const [marked, setMarked] = useState(false)

    const markSeat = () =>{
        if(marked){
            if(amount != 0){
                setAmount(amount - 1)
                setSelectedSeats(selectedSeats.filter(e => e != seat.seat))
                setTotal(total - 10)
            }
            setMarked(!marked)   
        }else if(!marked){
            if(amount == 10){
                Swal.fire(
                    'Información',
                    'Ha seleccionado el número máximo de asientos :/',
                    'info'
                )
            }else{
                setSelectedSeats([...selectedSeats, seat.seat])
                setAmount(amount + 1)
                setMarked(!marked)
                setTotal(total + 10)
            }
        }
    }

    useEffect(() => {}, [marked, locked])

  return (
    <div onClick={markSeat} className={marked ? 'marked': 'unmarked'}>
        <div>{seat.seat}</div>
    </div>
  )
}

export default Seat