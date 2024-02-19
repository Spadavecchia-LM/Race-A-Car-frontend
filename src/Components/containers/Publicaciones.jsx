import React from 'react'
import { publicaciones } from '../../js/data'
import PublicacionCard from '../cards/PublicacionCard'

const Publicaciones = () => {

  return (
    <div className='pb-20'>
        <h1 className='text-primaryWhite text-center w-[90%] my-20 mx-auto  sm:text-[30px] md:text-[40px] lg:text-fsHero '>Nuestras recomendaciones</h1>
        <div className='grid gap-5  justify-items-stretch   w-[90%] mx-auto lg:grid-cols-2 lg:grid-rows-2 sm:grid-rows-4 sm:grid-cols-1 '>  
        {publicaciones.map((pub) => {
            return(
                <div key={pub.id}>   
                <PublicacionCard publicacion={pub}/>
                </div>
            )
      
        
        })}
        </div>
   
    </div>
  )
}

export default Publicaciones