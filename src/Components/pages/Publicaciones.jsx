import React from 'react'
import { publicaciones } from '../../js/data'
import PublicacionCard from '../cards/PublicacionCard'



const Publicaciones = () => {
  return (
    <div className='w-screen bg-secondaryBlue py-5'>


    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[95%] gap-5 mx-auto'>
        {publicaciones?.map(publicacion => {
            return(
                <PublicacionCard publicacion={publicacion} key={publicacion.id} />
            )
        })}
    </div>
    
    </div>
  )
}

export default Publicaciones