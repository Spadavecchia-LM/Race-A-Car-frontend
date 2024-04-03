
import React, { useContext } from "react";
import { Card, CardBody, CardFooter, Image, Button,Chip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { TbEngine } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GlobalContext } from "../../context/AppContext";

const ReservaCard = ({ reserva }) => {
  const navigate = useNavigate();

  const {state} = useContext(GlobalContext)

  const handleScroll = (id) => {
    navigate("/publicacion/" + id);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

 
  
  return (
    <>
    <div className="flex justify-center items-center mx-auto">
      <Card shadow="sm" radius="lg" className="p-2">
        <CardBody
          className="overflow-visible p-0 hover:scale-[1.1] transition cursor-pointer duration-100"
          onClick={() => handleScroll(reserva.auto.id)}
        >
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt="imagen del auto"
            className="w-full object-cover h-[150px]"
            src={reserva.auto.images[0]}
          />
        </CardBody>

        <CardFooter className=" text-small flex-col items-start">
        <div className="py-10 ">
              <h3 className="text-[20px] text-primaryBlue">
                {reserva.auto.marca} {reserva.auto.modelo} {reserva.auto.anio}
              </h3>
              <p className="text-primaryBlue text-[20px] md:text-[24px]  lg:text-[28px] pt-5">
                {reserva.auto.valor} USD/dia
              </p>
            </div>
            <div className="grid place-items-center grid-cols-2 grid-rows-2 xl:grid-rows-1 xl:grid-cols-4  w-full gap-2  p-3 sm:p-2 bg-[#edf0f5]  rounded-2xl min-h-[80px] mb-5">
              <span className="flex flex-col items-center text-[12px]">
                <TbEngine /> {reserva.auto.caballosDeFuerza}cv
              </span>
              <span className="flex flex-col items-center text-[12px]">
                <GiGearStickPattern /> {reserva.auto.tipoDeCaja}
              </span>
              <span className="flex flex-col items-center text-[12px]">
                <GoPeople /> {reserva.auto.capacidad}
              </span>
              <span className="flex flex-col items-center text-[12px] text-center">
                <BsFillFuelPumpFill /> {reserva.auto.combustion}{" "}
              </span>
            </div>
          {/* Lugar de retiro y devolución */}
          <div className="mt-auto w-full flex flex-col items-end">
  <div className="text-right text-gray-800 mb-1">
    <p className="font-bold">
      Lugar de recogida: {reserva.recogida}.
    </p>
  </div>
  <div className="text-right text-gray-800">
    <p className="font-bold">
      Lugar de entrega: {reserva.entrega}.
    </p>
  </div>
</div>
        </CardFooter>
        
      </Card>
    </div>
    
    </>
    
  );
};

export default ReservaCard;
