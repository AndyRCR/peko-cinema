import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const {pathname} = useLocation()
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scroll])

  return (
    <div className='navbarContainer' style={{
        backgroundColor: pathname.includes('pelicula') && scroll < 478  ? 'rgba(0,0,0,0.5)' : 'black',
        borderBottom: pathname.includes('pelicula') && scroll < 478? '2px solid white' : 'none'}}>
        <div className='logoContainer'>
            <Link to={'/'}>
                <img src="https://i.ibb.co/Mp01Npp/image-21.png" alt="logo PekoCinema" />
            </Link>
        </div>
        <div className='navMenuContainer'>
            <div>
                <NavLink className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'} to={'/'}>
                    Películas
                </NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'} to={'/cines'}>
                    Cines 
                </NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'} to={'/dulceria'}>
                    Dulcería
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar