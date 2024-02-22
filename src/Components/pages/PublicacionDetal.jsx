import React, { useContext } from 'react'
import {Card, Image, Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import {Modal, ModalContent,ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GlobalContext } from '../../context/AppContext';

const PublicacionDetal = ({publicacion}) => {

  const {state} = useContext(GlobalContext)



  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('md')

  const handleOpen = (size) => {
      setSize(size)
      onOpen();
    }


  const {id,marca, modelo, anio, precio, capacidad, categoria, hp, transmision, imagenes} = publicacion

  const navigate = useNavigate()

  return (
    <>
  <div className='grid grid-cols-1 grid-rows-1 gap-1 md:grid-cols-2 md:max-h-[75vh] w-[90%] mx-auto'>
      <div className='row-span-1 md:row-span-2 '>
      <Card className="md:h-[100%] rounded-none bg-primaryBlue">
      
        <h1  className='bg-primaryGold text-primaryWhite text-[24px] sm:text[40px] md:text-[50px] text-center'>{marca} {modelo} {anio}</h1>
    
      <Image
        
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={imagenes[1]}
      />
    </Card>
      </div>



    <div className='hidden sm:grid grid-cols-1 grid-rows-2 gap-1 md:grid-cols-2 h-full'>

    <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={imagenes[0]}
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

    <div className="flex items-center w-[90%] mx-auto mt-5 justify-end ">
          <Button endContent={<FaPhotoVideo className='text-default-700 text-[22px]' />} className='bg-primaryGold text-primaryWhite text-[18px] ' key="full" onPress={() => handleOpen("full")}>ver mas</Button>
      </div>
      <Modal 
        size="full"
        isOpen={isOpen} 
        onClose={onClose} 
        className="bg-secondaryBlue"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className='h-screen'>
        {imagenes.map((imagen) => {
            return(
                <img src={imagen} alt="foto del auto" className='object-contain h-[100%] ' />
            )
        } )}
 
      </Carousel>
    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="solid" onPress={onClose}>
                  cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    <div className='w-[90%] mx-auto text-primaryWhite'>
      
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

      <div className='flex flex-wrap gap-3'>
      <Button className='bg-primaryBlue my-5 mx-auto text-primaryWhite w-[80%] sm:w-[30%] text-[18px] px-[24px] py-[12px]' size='lg' radius='lg' onClick={() => navigate("/")} >Volver al inicio</Button>
      <Button className='bg-primaryGold my-5 mx-auto text-primaryWhite w-[80%] sm:w-[30%] text-[18px] px-[24px] py-[12px]' size='lg' radius='lg' >Proceder con el pago</Button>

      </div>


      
    </div>

    </>
  )
}

export default PublicacionDetal