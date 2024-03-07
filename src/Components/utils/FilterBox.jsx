import { Button } from '@nextui-org/button'
import React from 'react'
import {Input} from "@nextui-org/react";
import { BsGeoAlt } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillFilter } from "react-icons/ai";

const SearchBox = () => {
  return (
    <div className='h-[auto] min-h-[150px] wrap mb-5 mt-5 w-[90%] mx-auto bg-formGrey flex justify-center items-center rounded-2xl p-[16px]'>
 <form className='flex gap-10 items-center justify-center flex-wrap '>
      <div className='flex flex-col gap-2'>
        <label htmlFor="lugarRecogida">Marca</label>
        <Input size={'sm'}  startContent={<AiFillFilter />}  className='bg-transparent min-w-[260px] ' type="text" id='filtroMarca' name='filtroMarca' placeholder='Filtrar por marca' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="lugarEntrega">Categoría</label>
        <Input size={'sm'} startContent={<AiFillFilter />} className='bg-transparent min-w-[260px]' placeholder='Filtrar por categoría' type="text" name='filtroCategoria' id='filtroCategoria'  />
      </div>
     <div className='mt-8'> 
        <Button  size='lg' endContent={<FaArrowRight/>} className='text-primaryWhite bg-primaryGold min-w-[260px]' radius='full'  variant='solid'>Buscar un vehiculo</Button>
     </div>
    </form>
    </div>
   
  )
}

export default SearchBox