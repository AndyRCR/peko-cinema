import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerFlexContainer'>
                <div className='logoContainer'>
                    <img src="https://i.ibb.co/BNDSMLr/zyro-image-1-1-removebg-preview.png" alt="" />
                    <p style={{margin: 0}}>Una experiencia de película</p>
                </div>
                <div className='socialNetworks'>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" className="grid-center-container">
                                <div className="grid-center-content">
                                    <img src="https://i.ibb.co/vLp8xhX/ico-footer-facebook-1.png" alt="facebook" />
                                </div>
                                <div className="socialTitle">
                                    Facebook
                                    <span>CinePeko Peru</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" className="grid-center-container">
                                <div className="grid-center-content">
                                    <img src="https://i.ibb.co/CpL61v7/ico-footer-twitter-1.png" alt="twitter" />
                                </div>
                                <div className="socialTitle">
                                    Twitter
                                    <span>Cinespeko_peru</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" className="grid-center-container">
                                <div className="grid-center-content">
                                    <img src="https://i.ibb.co/YP5DDxB/ico-footer-instagram-1.png" alt="instagram" />
                                </div>
                                <div className="socialTitle">
                                    Instagram
                                    <span>cinemaspeko</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='appsContainer'>
                    <h3 style={{fontWeight: 'bold', fontSize: '18px'}}>DESCARGA LA APP</h3>
                    <img src="https://cinemarkla.modyocdn.com/uploads/cad6a114-1847-4cf6-a245-0d18f549eb2f/original/googlePlay.png" alt="" />
                    <img src="https://cinemarkla.modyocdn.com/uploads/0865f5d7-85fc-4f99-8cae-dd4d46b4c93f/original/appStore.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer