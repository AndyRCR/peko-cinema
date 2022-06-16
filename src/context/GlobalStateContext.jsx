import { addDoc, collection, doc, endAt, getDoc, getDocs, orderBy, query, startAt, where } from 'firebase/firestore'
import React, { createContext, useState } from 'react'
import { db } from '../service/Firebase'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

export const GlobalContext = createContext()

const GlobalStateContext = ({ children }) => {

    emailjs.init("uf1ocX0CxNZspgi0V")

    const [movieList, setMovieList] = useState(null)
    const [dulcesList, setDulcesList] = useState(null)
    const [movieNames, setMovieNames] = useState(null)
    const [movieName, setMovieName] = useState('')
    const [cine, setCine] = useState('')
    const [date, setDate] = useState('')
    const [currentMovie, setCurrentMovie] = useState(null)
    const [currentFunction, setCurrentFunction] = useState(null)
    const [currentCombos, setCurrentCombos] = useState([])
    const [amount, setAmount] = useState(0)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [verified, setVerified] = useState(false)
    const [total, setTotal] = useState(0)

    const getAllMovies = async () => {
        const col = collection(db, 'movies')
        try {
            const data = await getDocs(col)
            const res = data.docs.map(doc => doc = {
                id: doc.id,
                ...doc.data(),
                finalDay: new Date(doc.data().finalDay.seconds * 1000).toLocaleDateString()
            })
            res.forEach(functions => functions.functions.forEach(days => days.days.map(day => day.day = new Date(day.day.seconds * 1000).toLocaleDateString())))
            setMovieNames(res.map(e => e.name))
            setMovieList(res)
        } catch (error) {
            console.log(error)
        }
    }

    const getFilteredMovies = async () => {
        const col = collection(db, 'movies')
        try {
            const data = await getDocs(query(col, orderBy('name'), startAt(movieName), endAt(movieName + '\uf8ff')))
            const res = data.docs.map(doc => doc = {
                id: doc.id,
                ...doc.data(),
                finalDay: new Date(doc.data().finalDay.seconds * 1000).toLocaleDateString()
            })
            res.forEach(functions => functions.functions.forEach(days => days.days.map(day => day.day = new Date(day.day.seconds * 1000).toLocaleDateString())))
            setMovieList(res.filter(e => {
                return e.functions.filter(x => x.sede.includes(cine)).length > 0 ? true : false
            }).filter(e => {
                return e.functions.filter(e => {
                    return e.days.filter(x => x.day.includes(date)).length > 0 ? true : false
                }).length > 0 ? true : false
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const getMovie = async (id) => {
        setCurrentMovie(null)
        const item = doc(db, 'movies', id)
        getDoc(item).then(snapshot => {
            if (snapshot.exists()) {
                setCurrentMovie({ id: snapshot.id, ...snapshot.data() })
            }
        })
    }

    const getDulces = async () => {
        const col = collection(db, 'dulceria')
        try {
            const data = await getDocs(col)
            const res = data.docs.map(doc => doc = {
                id: doc.id,
                ...doc.data()
            })
            setDulcesList(res)
        } catch (error) {
            console.log(error)
        }
    }

    const verifyPayment = async (targetNumber, cvv, month, year, formValue) => {
        const col = collection(db, 'tarjetas')
        try {
            const data = await getDocs(query(col, orderBy('targetNumber'), startAt(targetNumber), endAt(targetNumber + '\uf8ff')))
            const res = data.docs.map(doc => doc = {
                id: doc.id,
                ...doc.data(),
            })
            if (res.length > 0) {
                if (res[0].cvv == cvv && res[0].month == month && res[0].year == year) {
                    const col = collection(db, 'orders')
                    const order = await addDoc(col, formValue)
                    emailjs.send('service_4gfz4ub', 'template_lkdxwqs', {
                        ...formValue,
                        asientos: formValue.function.seats.join(' '),
                        total: total + currentCombos.reduce((a,b) => a.price+b.price)})
                        .then(function (response) {
                            Swal.fire(
                                'Pedido realizado!',
                                `Se ha enviado un correo con el resumen de su compra.
                                El id de su compra: ${order.id}`,
                                'success'
                            )
                        }, function (error) {
                            Swal.fire(
                                'Ocurrió un error con el servidor :c',
                                `Por favor, intente nuevamente`,
                                'error'
                            )
                        })
                } else {
                    Swal.fire(
                        'Datos de tarjeta erroneos!',
                        `Tarjeta: 123456789 | CVV: 123 | Mes: 4 | Año: 26`,
                        'error'
                    )
                }
            } else setVerified(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GlobalContext.Provider value={{
            movieList, setMovieList,
            movieName, setMovieName,
            date, setDate,
            cine, setCine,
            getAllMovies, getFilteredMovies,
            currentMovie, setCurrentMovie,
            currentFunction, setCurrentFunction,
            amount, setAmount,
            getMovie, movieNames,
            selectedSeats, setSelectedSeats,
            getDulces, dulcesList,
            currentCombos, setCurrentCombos,
            verified, setVerified,
            total, setTotal,
            verifyPayment
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext