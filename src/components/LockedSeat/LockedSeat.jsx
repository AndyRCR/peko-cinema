import React from 'react'
import './LockedSeat.css'

const LockedSeat = ({seat}) => {
  return (
    <div className='lockedSeat'>
        <div>{seat.seat}</div>
    </div>
  )
}

export default LockedSeat