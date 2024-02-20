import React from 'react'
import { categorias } from '../../js/data'
import { FaArrowRight } from "react-icons/fa6"
import CategoriaCard from '../cards/CategoriaCard'
import { Button } from '@nextui-org/react'

const Categorias = () => {
  return (
    <>
        <div className='w-[90%] mx-auto my-10'>
        <div className='flex justify-between items-center'>
            <h3 className='text-primaryWhite'>Alquilar por tipo de vehiculo</h3>
            <Button endContent={<FaArrowRight />} size='lg' className='text-primaryWhite' variant='light'>Ver todas</Button>
        </div>
        <div className='grid gap-5 grid-cols-1 grid-rows-12 w-[100%] lg:grid-cols-6 lg:grid-rows-2  md:grid-cols-4 sm:grid-cols-1 sm:grid-rows-12 '>
            {categorias.map((categoria, index) => {
                return (
                    <div key={index}>
                    <CategoriaCard  categoria={categoria}/>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Categorias