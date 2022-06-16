import React from 'react'
import FunctionSeats from '../FunctionSeats/FunctionSeats'
import FunctionViewCart from '../FunctionViewCart/FunctionViewCart'
import './FuncionViewContainer.css'

const FuncionViewContainer = () => {
  return (
    <div className='funcionViewContainer'>
        <div className='funcionViewFlexContainer'>
            <FunctionViewCart/>
            <FunctionSeats/>
        </div>
    </div>
  )
}

export default FuncionViewContainer