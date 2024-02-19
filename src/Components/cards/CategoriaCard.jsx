import React from 'react'
import {Card, Image} from "@nextui-org/react";

const CategoriaCard = ({categoria}) => {
  return (
    <Card
    radius="sm"
    className="border-none min-w-[200px] min-h-[120px] flex flex-col justify-around items-center bg-formGrey"
    
  >
    <Image
      alt="logo de la marca"
      className="object-cover"
      src={categoria.imagen}
     
    />
      <p className='align-center'>{categoria.nombre}</p>
  </Card>
  )
}

export default CategoriaCard