import { Box, CircularProgress } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Dulce from '../Dulce/Dulce'
import './DulceriaList.css'

const DulceriaList = () => {

    const {dulcesList} = useContext(GlobalContext)

  return (
    <div className='dulceriaList'>
        {dulcesList != null ? (
        dulcesList.length > 0 ? (
          dulcesList.map((element,index) => (
            <Dulce key={index} item={element}/>
          ))
        ) : <h1 style={{textAlign: 'center', gridColumn: '1/5'}}>No se encontraron combos</h1>
      ) : (
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', gridColumn: '1/5' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  )
}

export default DulceriaList