import React, { useContext, useEffect, useState } from 'react'
import './FunctionList.css'
import Function from '../Function/Function'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { GlobalContext } from '../../context/GlobalStateContext'

const FunctionList = () => {

    const { movieList, currentMovie } = useContext(GlobalContext)
    const [functionList, setFunctionList] = useState(currentMovie.functions)

    return (
        <div className='functionList'>
            <div className='functionsFlexContainer'>
                <div id='compra' style={{ fontSize: '50px', fontWeight: 'bold', color: '#B5121C', margin: '10px 0' }}>La función mas gozu para ti:</div>
            </div>
            <Accordion className='accordionItem'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ padding: '10px' }}
                >
                    <h3>PekoCinema - San Juan de Miraflores</h3>
                </AccordionSummary>
                <AccordionDetails className='accordionDetails'>
                    {functionList.filter(functions => functions.sede === 'San Juan de Miraflores').length > 0 ? (
                        functionList.filter(functions => functions.sede === 'San Juan de Miraflores')[0].days
                            .map(day => day.hours.map((hour, index) => {
                                return <Function key={index} funcion={{ hour, date: new Date(1000 * day.day.seconds).toLocaleDateString(), sede: 'San Juan de Miraflores'}} />
                            }
                            ))
                    ) : <h1>No hay funciones</h1>}
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordionItem'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{ padding: '10px' }}
                >
                    <h3>PekoCinema - Villa el Salvador</h3>
                </AccordionSummary>
                <AccordionDetails className='accordionDetails'>
                    {functionList.filter(functions => functions.sede === 'Villa el Salvador').length > 0 ? (
                        functionList.filter(functions => functions.sede === 'Villa el Salvador')[0].days
                            .map(day => day.hours.map((hour, index) => {
                                return <Function key={index} funcion={{ hour, date: new Date(1000 * day.day.seconds).toLocaleDateString(), sede: 'Villa el Salvador'}} />
                            }
                            ))
                    ) : <h1>No hay funciones</h1>}
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordionItem'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{ padding: '10px' }}
                >
                    <h3>PekoCinema - Villa María del Triunfo</h3>
                </AccordionSummary>
                <AccordionDetails className='accordionDetails'>
                    {functionList.filter(functions => functions.sede === 'Villa Maria del Triunfo').length > 0 ? (
                        functionList.filter(functions => functions.sede === 'Villa Maria del Triunfo')[0].days
                            .map(day => day.hours.map((hour, index) => {
                                return <Function key={index} funcion={{ hour, date: new Date(1000 * day.day.seconds).toLocaleDateString(), sede:'Villa Maria del Triunfo'}} />
                            }
                            ))
                    ) : <h1>No hay funciones</h1>}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default FunctionList