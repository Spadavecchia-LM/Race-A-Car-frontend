import { Button, Spinner } from '@nextui-org/react'
import React, { useContext } from 'react'
import {Card, CardBody, CardFooter, Image, Chip} from "@nextui-org/react";
import { GiGearStickPattern } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/AppContext';
import { BsFillFuelPumpFill } from "react-icons/bs";

const PublicacionCard = ({publicacion}) => {

  const {state} = useContext(GlobalContext)
  const {autos} = state

  const navigate = useNavigate()

  const handleScroll = (id) => {
    navigate("/publicacion/" + id)
    window.scrollTo({top:0, left:0, behavior:"smooth"})
};

return (
  <>
  {autos.length > 0 ?
  
    <Card shadow="sm" className='p-2  min-h-full '>
  <CardBody className="overflow-visible p-0">
    <Image
      shadow="sm"
      radius="lg"
      width="100%"
      alt="imagen del auto"
      className="w-full object-cover h-[100%]"
  src={publicacion.images[1]}
    />
  </CardBody>

  <CardFooter className="text-small flex-col items-start min-h-[200px]" >
     <div className='py-10 '>
     <h3 className='text-[20px] text-primaryBlue'>{publicacion.marca} {publicacion.modelo} {publicacion.anio}</h3>
    <p className="text-primaryBlue text-[20px] md:text-[24px]  lg:text-[28px] pt-5">{publicacion.valor} USD/dia</p>
  
    <Chip className='mt-4 bg-primaryBlue text-primaryWhite text-[12px]'>{publicacion.categoria.categoria}</Chip>
  
     </div>
    
  {/* car specs */}
      <div className='grid place-items-center grid-cols-2 grid-rows-2 xl:grid-rows-1 xl:grid-cols-4  w-full gap-2  p-3 sm:p-2 bg-[#edf0f5]  rounded-2xl min-h-[80px]'>
          <span className='flex flex-col items-center text-[12px]'><TbEngine /> {publicacion.caballosDeFuerza}cv</span>
          <span className='flex flex-col items-center text-[12px]' ><GiGearStickPattern   /> {publicacion.tipoDeCaja}</span>
          <span className='flex flex-col items-center text-[12px]'><GoPeople/> {publicacion.capacidad}</span>
          <span className='flex flex-col items-center text-[12px] text-center'><BsFillFuelPumpFill /> {publicacion.combustion} </span>

      </div>
  <div className='w-full flex justify-center'>
    <Button className='bg-primaryGold my-5 text-primaryWhite w-[70%] text-[18px] px-[24px] py-[12px]' size='lg' radius='lg' onClick={() => handleScroll(publicacion.id)}>Alquilar ahora</Button>
  </div>
  </CardFooter>
</Card>
  
    : <Spinner/>


  }
  </>
)
}

export default PublicacionCard