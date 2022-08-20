import React, { useContext } from 'react'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import './Filter.css'
import { GlobalContext } from '../../context/GlobalStateContext'

const Filter = () => {

    const { movieList, setMovieName, movieName, cine, setCine, date, setDate, getFilteredMovies, movieNames } = useContext(GlobalContext)

    return (
        <div className='filterContainer'>
            <div className='filters'>
                <div className='filterItem'>
                    <h3>Por película</h3>
                    <FormControl variant='standard' className='formControl'>
                        <InputLabel id="movieLabel">¿Qué quieres ver?</InputLabel>
                        <Select
                            labelId="movieLabel"
                            id="movieSelect"
                            label="película"
                            value={movieName}
                            onChange={(e) => setMovieName(e.target.value)}
                        >
                            <MenuItem value="">Todas las películas</MenuItem>
                            {movieNames != null ?
                                movieNames.map((element, index) => (
                                    <MenuItem key={index} value={element}>{element}</MenuItem>
                                )) : false
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className='filterItem'>
                    <h3>Por cine</h3>
                    <FormControl variant='standard' className='formControl'>
                        <InputLabel id="cineLabel">Elige tu Peko cine</InputLabel>
                        <Select
                            labelId="cineLabel"
                            id="cineSelect"
                            label="cine"
                            value={cine}
                            onChange={(e) => setCine(e.target.value)}
                        >
                            <MenuItem value="">Todos los cines</MenuItem>
                            <MenuItem value={'San Juan de Miraflores'}>San Juan de Miraflores</MenuItem>
                            <MenuItem value={'Villa el Salvador'}>Villa el Salvador</MenuItem>
                            <MenuItem value={'Villa Maria del Triunfo'}>Villa Maria del Triunfo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='filterItem'>
                    <h3>Por fecha</h3>
                    <FormControl variant='standard' className='formControl'>
                        <InputLabel id="dateLabel">Elige un día</InputLabel>
                        <Select
                            labelId="dateLabel"
                            id="dateSelect"
                            label="fecha"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        >
                            <MenuItem value="">Cualquier fecha</MenuItem>
                            {movieList != null ?
                                new Array(7).fill(0).map((element, index) => (
                                    index === 0 ? <MenuItem key={index} value={new Date(Date.now() + 86400 * 1000 * index).toLocaleDateString()}>Hoy</MenuItem> :
                                        <MenuItem key={index} value={new Date(Date.now() + 86400 * 1000 * index).toLocaleDateString()}>{new Date(Date.now() + 86400 * 1000 * index).toLocaleDateString()}</MenuItem>
                                )) : false
                            }
                        </Select>
                    </FormControl>
                </div>

            </div>
            <div className='filterItem filterButton'>
                <Button variant='contained' className='button' onClick={() => getFilteredMovies()}>
                    <FontAwesomeIcon className='filterIcon' icon={faSliders} />
                    Filtrar
                </Button>
            </div>
        </div>
    )
}

export default Filter