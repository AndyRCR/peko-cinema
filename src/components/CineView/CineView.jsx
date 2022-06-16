import React from 'react'
import './CineView.css'

const CineView = () => {
  return (
    <div className='cineView'>
        <div className='cineViewFlexContainer'>
            <h1 style={{color: '#B5121C'}}>Nuestros cines</h1>
            <div className='cineContainer'>
                <div className='cine'>
                    <div className='imgContainer'>
                        <img src='https://cdn.cuponidad.pe/images/Deals/cinemark-sala.jpg' alt=''/>
                    </div>
                    <div className='nombre'>
                        Peko Cinema | San Juan de Miraflores
                    </div>
                    <div className='ubicacion'>
                        Dirección: Av. los Héroes 188, San Juan de Miraflores 15803
                    </div>
                    <div className='mapa'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62401.36927148913!2d-76.98991759597506!3d-12.174576693779485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b84113003ee7%3A0x1fd71e1502ba8da6!2sMall%20del%20Sur!5e0!3m2!1ses-419!2spe!4v1655352383834!5m2!1ses-419!2spe" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='cine'>
                    <div className='imgContainer'>
                        <img className='iframe' src='https://cdn.cuponidad.pe/images/Deals/cinemark-sala.jpg' alt=''/>
                    </div>
                    <div className='nombre'>
                        Peko Cinema | Villa el Salvador
                    </div>
                    <div className='ubicacion'>
                        Dirección: Q3W8+HWM, Villa El Salvador, Av. Solidaridad, Lima 15816
                    </div>
                    <div className='mapa'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15599.221178237747!2d-76.94208286859505!3d-12.193647811235047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9186b0186bd%3A0x770f34c38141be1a!2sReal%20Plaza%20Villa%20Maria!5e0!3m2!1ses-419!2spe!4v1655352523403!5m2!1ses-419!2spe" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='cine'>
                    <div className='imgContainer'>
                        <img className='iframe' src='https://cdn.cuponidad.pe/images/Deals/cinemark-sala.jpg' alt=''/>
                    </div>
                    <div className='nombre'>
                        Peko Cinema | Villa María del Triunfo
                    </div>
                    <div className='ubicacion'>
                        Dirección: Av. Pachacútec intersection with, Av 26 de Noviembre sn, Villa María del Triunfo
                    </div>
                    <div className='mapa'>
                        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15599.221194485886!2d-76.94212578554436!3d-12.193647535059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b944dd3f94e7%3A0xc270ad9087e436a9!2sPlaza%20Center%20Villa%20El%20Salvador!5e0!3m2!1ses-419!2spe!4v1655352628775!5m2!1ses-419!2spe" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CineView