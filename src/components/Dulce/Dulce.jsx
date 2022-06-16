import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Dulce.css'

const Dulce = ({item}) => {

    const {currentCombos, setCurrentCombos} = useContext(GlobalContext)
    const [selected, setSelected] = useState(false)

    const selectCombo = () =>{
        if(selected){
            setCurrentCombos(currentCombos.filter(e => e.name != item.name))
        }else{
            setCurrentCombos([...currentCombos,item])
        }
        setSelected(!selected)
    }

  return (
    <div className='dulce'>
        <div className='imgContainer'>
            <img src={item.image} alt="" />
        </div>
        <div className='dulceTitle'>
            {item.name}
        </div>
        <div className='dulceDescription'>
            {item.description}
        </div>
        <div className='counterContainer'>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={selectCombo} />} label="Lo quiero!" />
            </FormGroup>
            <div className='price'>
                S/{item.price}
            </div>
        </div>
    </div>
  )
}

export default Dulce