import { Button } from '@mui/material'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './MovieTrailer.css'

const MovieTrailer = () => {

    const {currentMovie} = useContext(GlobalContext)
    const [videoPlay, setVideoPlay] = useState(false)
    const [url, setUrl] = useState('')

    const playTrailer = () =>{
        setUrl(currentMovie.video)
        setVideoPlay(true)
    }

    useEffect(() => {
        setVideoPlay(!videoPlay)
      }, [url])

  return (
    <div className='movieTrailer' style={{paddingTop: `${document.querySelector('.navbarContainer').clientHeight}px`}}>
        <div className='video'>
            <iframe 
            frameBorder="0"
            allowFullScreen="1"
            title={currentMovie.name}
            width={'50%'}
            height={'400px'}
            src={url}
            className='frameVideo'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        </div>
        <div className='videoPreview' style={{
            visibility: videoPlay ? 'visible' : 'hidden',
            backgroundImage: `url("${currentMovie.imageBanner}")`,
            height: `calc(400px + ${document.querySelector('.navbarContainer').clientHeight}px)`}}>
                <Button
                variant='outlined'
                className='playButton'
                onClick={playTrailer}>
                    <FontAwesomeIcon icon={faPlay}/>
                </Button>
                <div>Mira el trailer</div>
        </div>
    </div>
  )
}

export default MovieTrailer