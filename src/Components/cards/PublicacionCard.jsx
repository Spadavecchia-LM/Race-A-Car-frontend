import { Button } from '@nextui-org/react'
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { GiGearStickPattern } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const PublicacionCard = ({publicacion}) => {

  const navigate = useNavigate()

  return (
    <Card shadow="sm" className='max-w-[100%]  p-3'>
    <CardBody className="overflow-visible p-0">
      <Image
        shadow="sm"
        radius="lg"
        width="100%"
        alt="imagen del auto"
        className="w-full object-cover h-[500px]"
        src={publicacion.imagenes[0]}
      />
    </CardBody>

    <CardFooter className="text-small flex-col items-start">
       <div className='py-10'>
       <h3 className='text-[20px] text-primaryBlue'>{publicacion.marca} {publicacion.modelo} {publicacion.anio}</h3>
      <p className="text-primaryBlue text-[32px] pt-5">{publicacion.precio} USD/dia</p>
       </div>
      
    {/* car specs */}
        <div className='flex w-full justify-around p-5 sm:p-2 bg-[#edf0f5]  rounded-2xl '>
            <span className='flex flex-col items-center'><TbEngine /> {publicacion.hp}cv</span>
            <span className='flex flex-col items-center' ><GiGearStickPattern   /> {publicacion.transmision}</span>
            <span className='flex flex-col items-center'><GoPeople/> {publicacion.capacidad} personas</span>
            <span className='flex flex-col items-center'><BiCategory /> {publicacion.categoria} </span>

        </div>
    <div className='w-full flex justify-center'>
      <Button className='bg-primaryGold my-5 text-primaryWhite w-[70%] text-[18px] px-[24px] py-[12px]' size='lg' radius='lg' onClick={() => navigate(`/publicacion/${publicacion.id}`)}>Alquilar ahora</Button>
    </div>
    </CardFooter>
  </Card>
  )
}

export default PublicacionCard