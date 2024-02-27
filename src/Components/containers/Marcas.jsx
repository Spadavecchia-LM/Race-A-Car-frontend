import React from 'react'
import { marcas } from '../../js/data'
import { Button } from '@nextui-org/button'
import MarcaCard from '../cards/MarcaCard'
import { FaArrowRight } from "react-icons/fa6";

const Marcas = () => {
  return (
    <div className='w-[90%] mx-auto my-10'>
        <div className='flex justify-between items-center mb-5'>
            <h3 className='text-primaryWhite'>Alquilar por marca</h3>
        </div>
        <div className='grid gap-5 grid-cols-1 grid-rows-12 w-[100%] lg:grid-cols-6 lg:grid-rows-2  md:grid-cols-4 sm:grid-cols-1 sm:grid-rows-12  '>
            {marcas.map((marca, index) => {
                return (
                    <div key={index}>
                    <MarcaCard  marca={marca}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Marcas