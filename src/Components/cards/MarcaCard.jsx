import React from 'react'
import {Card, CardFooter, Image} from "@nextui-org/react";



const MarcaCard = ({marca}) => {
  return (
    <Card
    radius="sm"
    className="border-none min-w-[200px] min-h-[120px] flex flex-col justify-around items-center bg-formGrey"
    
  >
    <Image
      alt="logo de la marca"
      className="object-cover"
      src={marca.imagen}
     
    />
      <p className='align-center'>{marca.marca}</p>
  </Card>
  )
}

export default MarcaCard