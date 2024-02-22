import React from 'react'
import { publicaciones } from '../../js/data'
import PublicacionCard from '../cards/PublicacionCard'

const Publicaciones = () => {

  const scrambleArray = (arr) => {

    const elements = []

    while(elements.length < 4){
      const randomIndex = Math.floor(Math.random() * arr.length)

      if(!elements.includes(randomIndex)){
        elements.push(randomIndex)
      }
    }

    return elements.map((e => arr[e] ))

  }

  const publicacionesAleatorias = scrambleArray(publicaciones)

  return (
    <div className='pb-20'>
        <h1 className='text-primaryWhite text-center w-[90%] my-20 mx-auto text-[30px] md:text-[40px] lg:text-fsHero font-medium '>Nuestras recomendaciones</h1>
        <div className='grid gap-5  justify-items-stretch   w-[90%] mx-auto lg:grid-cols-2 lg:grid-rows-2 sm:grid-rows-4 sm:grid-cols-1 '>  
        {publicacionesAleatorias.map((pub) => {
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