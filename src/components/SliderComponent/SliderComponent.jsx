import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css'

const SliderComponent = () => {

    const settings = {
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      className: 'sliderGozu'
    }

    const images = [
      'https://i.ibb.co/4PQqgCH/Fondo.png',
      'https://i.ibb.co/sCM67rF/Banner-Home-Actualizado-1.jpg',
      'https://i.ibb.co/Kjz1wRq/Ban.jpg']

  return (
    <div className='sliderContainer'>
        <Slider {...settings} style={{height: '70vh', overflowY: 'hidden'}}>
          {images.map((image, i) => (
            <div key={i}>
              <div style={{
                width: '100vw',
                height: '70vh',
                backgroundImage: `url("${image}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                backgroundPositionX: 'center',
                backgroundPositionY: '30px'
              }}>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default SliderComponent