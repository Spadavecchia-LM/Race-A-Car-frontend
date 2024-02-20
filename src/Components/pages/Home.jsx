import React from 'react'
import Hero from '../utils/Hero'
import SearchBox from '../utils/SearchBox'
import Marcas from '../containers/Marcas'
import Categorias from "../containers/Categorias"
import Publicaciones from '../containers/Publicaciones'

const Home = () => {
  return (
    <div className='bg-secondaryBlue'>
    <Hero/>
    <SearchBox/>
    <Marcas/>
    <Categorias/>
    <Publicaciones/>
    </div>
    
  )
}

export default Home