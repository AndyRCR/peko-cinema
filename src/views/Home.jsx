import React, { useContext, useEffect } from 'react'
import FilterContainer from '../components/FilterContainer/FilterContainer'
import MovieListContainer from '../components/MovieListContainer/MovieListContainer'
import SliderComponent from '../components/SliderComponent/SliderComponent'
import { GlobalContext } from '../context/GlobalStateContext'

const Home = () => {

    const {getAllMovies, getDulces} = useContext(GlobalContext)

    useEffect(() => {
      getAllMovies()
      getDulces()
    }, [])

  return (
    <div className='homeContainer'>
        <SliderComponent/>
        <FilterContainer/>
        <MovieListContainer/>
    </div>
  )
}

export default Home