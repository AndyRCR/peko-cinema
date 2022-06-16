import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Cines from '../views/Cines'
import Detail from '../views/Detail'
import Dulceria from '../views/Dulceria'
import FuncionView from '../views/FuncionView'
import ProcesarCompra from '../views/ProcesarCompra'
import Home from '../views/Home'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/pelicula/:id' element={<Detail/>}/>
                <Route path='/cines' element={<Cines/>}/>
                <Route path='/dulceria' element={<Dulceria/>}/>
                <Route path='/funcion' element={<FuncionView/>}/>
                <Route path='/procesar' element={<ProcesarCompra/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas