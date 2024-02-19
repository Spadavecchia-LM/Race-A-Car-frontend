import React from 'react'
import Hero from './utils/Hero'
import SearchBox from './utils/SearchBox'
import Marcas from './containers/Marcas'

const Home = () => {
  return (
    <div className='bg-secondaryBlue'>
    <Hero/>
    <SearchBox/>
    <Marcas/>
    <Marcas/>
    </div>
    
  )
}

export default Home