import React from 'react';
import { Card, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

const MarcaCard = ({ marca }) => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleCardClick = () => {
    navigate("/publicaciones"); // Navega a la vista de publicaciones al hacer clic en la tarjeta
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  };

  return (
    <div onClick={handleCardClick}> 
    <Card
      radius="sm"
      className="border-none min-w-[200px] min-h-[120px] flex flex-col justify-around items-center bg-formGrey cursor-pointer" // Añade cursor-pointer para indicar que es clickable
      
    >
      <Image
        alt="logo de la marca"
        className="object-cover"
        src={marca.imagen}
      />
      <p className='align-center'>{marca.marca}</p>
    </Card>
    </div>
  );
};

export default MarcaCard;