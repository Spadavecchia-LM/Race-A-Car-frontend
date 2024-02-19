import { Button } from '@nextui-org/button'
import React from 'react'
import {Input} from "@nextui-org/react";
import { BsGeoAlt } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className='h-[auto] min-h-[150px] wrap mb-5 w-[90%] mx-auto bg-formGrey flex justify-center items-center rounded-2xl p-[16px]'>
 <form className='flex gap-10 items-center flex-wrap'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="lugarRecogida">Lugar de recogida</label>
        <Input size={'sm'} startContent={<BsGeoAlt />}  className='bg-transparent' type="text" id='lugarRecogida' name='lugarRecogida' placeholder='Busca un lugar' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="fechaRecogida">Fecha de recogida</label>
        <Input size={'sm'} type="date" name='fechaRecogida' className='bg-transparent' id='fechaRecogida'/>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="lugarEntrega">Lugar de entrega</label>
        <Input size={'sm'} startContent={<BsGeoAlt />} className='bg-transparent' placeholder='Busca un lugar' type="text" name='lugarEntrega' id='lugarEntrega'  />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="fechaEntrega">Fecha de entrega</label>
        <Input size={'sm'}  type="date" name='fechaEntrega' className='bg-transparent' id='fechaEntrega'/>
      </div>

     <div className='mt-8'> 
        <Button  size='lg' endContent={<FaArrowRight/>} className='text-primaryWhite bg-primaryGold' radius='full'  variant='solid'>Buscar un vehiculo</Button>
     </div>
    </form>
    </div>
   
  )
}

export default SearchBox