import { Button, FormControl, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Swal from 'sweetalert2'
import './Form.css'

const Form = () => {

    const { currentFunction, currentMovie, currentCombos, selectedSeats, verifyPayment } = useContext(GlobalContext)

    const [formValue, setFormValue] = useState({
        buyer: {
            name: '',
            lastName: '',
            email: '',
            phone: ''
        },
        function: {
            name: currentMovie.name,
            date: currentFunction.date,
            hour: currentFunction.hour.hour,
            lounge: currentFunction.hour.lounge,
            seats: selectedSeats,
            duration: currentMovie.duration,
            sede: currentFunction.sede
        },
        combos: currentCombos
    })

    const [targetInfo, setTargetInfo] = useState({
        targetNumber: '123456789',
        cvv: '123',
        month: '4',
        year: '26'
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValue({
            ...formValue,
            buyer: {
                ...formValue.buyer,
                [name]: value
            }
        })
    }

    const handleTargeChange = (e) => {
        const { name, value } = e.target
        setTargetInfo({
            ...targetInfo,
            [name]: value
        })
    }

    const sendData = async () => {
        if (formValue.buyer.name === '' ||
            formValue.buyer.lastName === '' ||
            formValue.buyer.email === '' ||
            formValue.buyer.phone === '' ||
            targetInfo.targetNumber === '' ||
            targetInfo.cvv === '' ||
            targetInfo.month === '' ||
            targetInfo.year === ''
        ) {
            Swal.fire(
                'Información',
                'Todos los campos son obligatorios',
                'info'
            )
        } else {
            verifyPayment(targetInfo.targetNumber, targetInfo.cvv, targetInfo.month, targetInfo.year, formValue)
        }
    }

    return (
        <div className='form'>
            <div className='formsContainer'>
                <div className='firstForm'>
                    <h3>Datos personales</h3>
                    <FormControl className='form'>
                        <TextField
                            className='formItem'
                            id="nameInput"
                            name='name'
                            placeholder="Nombres"
                            autoComplete='off'
                            value={formValue.buyer.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className='formItem'
                            id="lastNameInput"
                            name='lastName'
                            placeholder="Apellidos"
                            autoComplete='off'
                            value={formValue.buyer.lastName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className='formItem'
                            type={'email'}
                            id="emailInput"
                            placeholder="Email"
                            name='email'
                            autoComplete='off'
                            value={formValue.buyer.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className='formItem'
                            type={'tel'}
                            id="phoneInput"
                            name='phone'
                            placeholder="Teléfono"
                            autoComplete='off'
                            value={formValue.buyer.phone}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </div>
                <div className='secondForm'>
                    <h3>Datos de la tarjeta</h3>
                    <FormControl className='form'>
                        <TextField
                            className='formItem'
                            id="numberInput"
                            name='targetNumber'
                            placeholder="Numero de tarjeta"
                            autoComplete='off'
                            value={targetInfo.targetNumber}
                            onChange={handleTargeChange}
                        />
                        <TextField
                            type={'number'}
                            className='formItem'
                            id="cvvInput"
                            name='cvv'
                            placeholder="Codigo CVV"
                            autoComplete='off'
                            value={targetInfo.cvv}
                            onChange={handleTargeChange}
                        />
                        <div className='dateTarget'>
                            <TextField
                                type={'number'}
                                className='formItem'
                                id="monthInput"
                                name='month'
                                placeholder="Mes"
                                autoComplete='off'
                                value={targetInfo.month}
                                onChange={handleTargeChange}
                            />
                            <TextField
                                type={'number'}
                                className='formItem'
                                id="yearInput"
                                name='year'
                                placeholder="Año"
                                autoComplete='off'
                                value={targetInfo.year}
                                onChange={handleTargeChange}
                            />
                        </div>
                    </FormControl>
                </div>
            </div>
            <div className='buttonContainer'>
                <Button onClick={sendData} variant='contained' className='btnSend'>Enviar</Button>
            </div>
        </div>
    )
}

export default Form