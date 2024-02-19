import React from 'react'
import { categorias } from '../../js/data'
import { FaArrowRight } from "react-icons/fa6"
import CategoriaCard from '../cards/CategoriaCard'

const Categorias = () => {
  return (
    <>
        <div className='w-[90%] mx-auto my-10'>
        <div className='flex justify-between'>
            <h3 className='text-primaryWhite'>Alquila por marcas</h3>
            <Button endContent={<FaArrowRight />} size='lg' className='text-primaryWhite' variant='light'>Ver todas</Button>
        </div>
        <div className='flex flex-wrap gap-5 justify-between '>
            {categorias.map((categoria, index) => {
                return (
                    <>
                    <CategoriaCard key={index} categoria={categoria}/>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Categorias