import React from 'react'
import {Card, Image, Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const PublicacionDetal = ({publicacion}) => {

  const {id,marca, modelo, anio, precio, capacidad, categoria, hp, transmision, imagenes} = publicacion

  const navigate = useNavigate()

  return (
    <>
  <div className='grid grid-cols-1 grid-rows-1 gap-1 md:grid-cols-2'>
      <div className='row-span-2 hidden md:block '>
      <Card className="md:h-[100%] rounded-none">
      <Image
        removeWrapper
        
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={imagenes[0]}
      />
    </Card>
      </div>



    <div className='grid grid-cols-1 grid-rows-12 gap-1 md:grid-cols-2 h-full'>

    <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={imagenes[1]}
      />
    </Card>
    <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={imagenes[2]}
      />
    </Card>
    <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none "
        src={imagenes[3]}
      />
    </Card>
    <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={imagenes[4]}
      />
    </Card>
    </div>
   
    </div>

    <div>
      <h2>{id}</h2>
      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>
      <p>Año: {anio}</p>
      <p>Precio: ${precio}</p>
      <p>Capacidad: {capacidad} personas</p>
      <p>Categoría: {categoria}</p>
      <p>HP: {hp}</p>
      <p>Transmisión: {transmision}</p>

      <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lectus id urna dapibus, a commodo nunc hendrerit. Nullam vestibulum, justo nec feugiat facilisis, justo elit malesuada justo.</p>
      
      <p>Características adicionales: Sed eu velit vitae nulla auctor bibendum. Integer tincidunt justo in dui fermentum, eget varius sem luctus. Fusce vel ullamcorper nisi.</p>
      
      <p>Condiciones de venta: Nunc vitae magna a quam tristique vestibulum. Vivamus non purus in neque lacinia suscipit. Integer non libero in quam bibendum gravida a et justo.</p>

      <div className='flex gap-3'>
      <Button className='bg-primaryBlue my-5 mx-auto text-primaryWhite w-[50%] text-[18px] px-[24px] py-[12px]' size='lg' radius='lg' onClick={() => navigate("/")} >Volver al inicio</Button>
      <Button className='bg-primaryGold my-5 mx-auto text-primaryWhite w-[50%] text-[18px] px-[24px] py-[12px]' size='lg' radius='lg' >Proceder con el pago</Button>

      </div>


      
    </div>

    </>
  )
}

export default PublicacionDetal