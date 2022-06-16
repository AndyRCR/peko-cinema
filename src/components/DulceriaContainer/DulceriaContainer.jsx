import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import DulceriaList from '../DulceriaList/DulceriaList'
import './DulceriaContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DulceriaContainer = () => {
  return (
    <div className='dulceriaContainer'>
        <div className='dulceriaFlexContainer'>
            <h1 style={{color: '#B5121C'}}>Seleccione sus combos</h1>
            <DulceriaList/>
            <Button
            component={Link}
            to={'/procesar'}
            className='nextButton'
            variant='contained'>
                <FontAwesomeIcon className='nextIcon' icon={faArrowRight}/> 
                Comprar
            </Button>
        </div>
    </div>
  )
}

export default DulceriaContainer