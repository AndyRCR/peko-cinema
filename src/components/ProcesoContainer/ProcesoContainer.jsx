import React from 'react'
import Form from '../Form/Form'
import './ProcesoContainer.css'

const ProcesoContainer = () => {
  return (
    <div className='procesoContainer'>
        <div className='procesoFlexContainer'>
            <h1>Finalizar la compra</h1>
            <Form/>
        </div>
    </div>
  )
}

export default ProcesoContainer