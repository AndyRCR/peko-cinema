import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from '@mui/material'
import './Movie.css'

const Movie = ({item}) => {

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className='movieContainer'>
      <div className='imgContainer'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style = {{
            backgroundImage: !isHovering ? `url('${item.image}')` : `linear-gradient(black, black), url('${item.image}')`,
            backgroundBlendMode: 'saturation'
          }}
        >
        <Button
          component = {Link}
          to = {'/pelicula/' + item.id}
          className='buyButton'
          variant='contained'
          style = {{
            display: !isHovering ? 'none' : 'inline-flex',
            transform: !isHovering ? 'none' : 'scale(0.95)'
          }}>
          <FontAwesomeIcon className='ticketIcon' icon={faTicket}/>
          Comprar
        </Button>
      </div>
      <div className='movieInfo'>
        <h3 onChange={()=>{}}>{item.name}</h3>
        <p className='info'>{item.genre}, {item.duration}, +14.</p>
      </div>
    </div>
  )
}

export default Movie