import React from 'react'
import { categorias } from '../../js/data'
import { FaArrowRight } from "react-icons/fa6"
import CategoriaCard from '../cards/CategoriaCard'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

const Categorias = () => {

    const navigate = useNavigate()

    const handleScrollOnNavigate = () => {

        navigate("/publicaciones")
        window.scrollTo({left:0, top:0, behavior:"instant"})
    }

  return (
    <>
        <div className='w-[90%] mx-auto my-10'>
        <div className='flex justify-between items-center mb-5'>
            <h3 className='text-primaryWhite'>Alquilar por categoria</h3>
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
        <div className='flex justify-center mt-20 '>
            <Button size='lg' className='bg-primaryGold text-primaryWhite text-[24px]'  onClick={handleScrollOnNavigate}>Ver todas las publicaciones</Button>
        </div>
    </div>
    </>
  )
}

export default Categorias