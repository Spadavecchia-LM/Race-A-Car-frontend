import React from 'react'
import { marcas } from '../../js/data'
import { Button } from '@nextui-org/button'
import MarcaCard from '../cards/MarcaCard'
import { FaArrowRight } from "react-icons/fa6";

const Marcas = () => {
  return (
    <div className='w-[90%] mx-auto my-10'>
        <div className='flex justify-between items-center mb-5 w-[90%] mx-auto'>
            <h3 className='text-primaryWhite'>Alquila por marcas</h3>
            <Button endContent={<FaArrowRight />} size='lg' className='text-primaryWhite' variant='light'>Ver todas</Button>
        </div>
        <div className='flex flex-wrap gap-5 justify-center w-[100%] '>
            {marcas.map((marca, index) => {
                return (
                    <>
                    <MarcaCard key={index} marca={marca}/>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Marcas