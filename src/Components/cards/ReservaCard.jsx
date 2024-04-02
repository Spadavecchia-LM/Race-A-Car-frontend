import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ReservaCard = ({ reserva }) => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    navigate("/publicacion/" + id);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <div className="flex justify-center items-center mb-8 w-full max-w-[80%] mx-auto">
      <Card shadow="sm" radius="lg" className="p-4 w-full">
        <CardBody
          className="overflow-visible p-0 hover:scale-[1.1] transition cursor-pointer duration-100"
          onClick={() => handleScroll(reserva.id)}
        >
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt="imagen del auto"
            className="w-full object-cover h-[200px]"
            src={reserva.auto?.imagen}
          />
        </CardBody>

        <CardFooter className="relative text-small flex-col items-start">
          <div className="py-4">
            <p className="font-bold mb-1">
              Código de reserva: {reserva.codigo}
            </p>
            <p className="font-bold mb-1 mt-2">
              {reserva.modeloAuto}
            </p>
            <p className="font-bold mb-1 mt-2">
              {reserva.desde} / {reserva.hasta}
            </p>
          </div>

          {/* Lugar de retiro y devolución */}
          <div className="mt-auto w-full flex flex-col items-end">
  <div className="text-right text-gray-800 mb-1">
    <p className="font-bold">
      Lugar de retiro: {reserva.lugarRetiro}
    </p>
  </div>
  <div className="text-right text-gray-800">
    <p className="font-bold">
      Lugar de devolución: {reserva.lugarDevolucion}
    </p>
  </div>
</div>

          {/* Botón de ver detalles */}
          <div className="w-full flex items-center mt-4">
            <Button
              className="bg-primaryGold text-primaryWhite text-sm px-4 py-2"
              size="sm"
              radius="lg"
              onClick={() => console.log("Ver detalles")}
            >
              Ver detalles
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReservaCard;
