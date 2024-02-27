import React from 'react'
import Hero from '../utils/Hero'
import SearchBox from '../utils/SearchBox'
import Marcas from '../containers/Marcas'
import Categorias from "../containers/Categorias"
import Recomendaciones from '../containers/Recomendaciones'

const Home = () => {
  return (
    <div className='bg-secondaryBlue'>
    <Hero/>
    <SearchBox/>
    <Marcas/>
    <Categorias/>
    <Recomendaciones/>
    </div>
    
  )
}

export default Home