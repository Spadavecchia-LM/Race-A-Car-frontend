import React, { useContext, useState } from "react";
import { Spinner } from "@nextui-org/react";
import ReservaCard from "../cards/ReservaCard";
import { GlobalContext } from "../../context/AppContext";
import Reserva from "../cards/Reserva";

const MisReservas = () => {
  const [loading, setLoading] = useState(true);

  // Datos ficticios de reservas activas y finalizadas para simular
  const {state} = useContext(GlobalContext)
  const {reservasUsuario} = state

  const reservasActivas = reservasUsuario.filter(res => {
    const fin = new Date(res.fechaFin).getTime(); // Obtener el tiempo en milisegundos
    const hoy = new Date().getTime(); // Obtener el tiempo actual en milisegundos

    return fin - hoy > 0;
});

const reservasFinalizadas = reservasUsuario.filter(res => {
  const fin = new Date(res.fechaFin).getTime(); // Obtener el tiempo en milisegundos
  const hoy = new Date().getTime(); // Obtener el tiempo actual en milisegundos

  return fin - hoy < 0;
});


  console.log(reservasActivas)

  return (
    <div className="bg-secondaryBlue p-6 w-screen min-h-screen flex flex-col items-center">

      <div className="mb-8 w-full mx-auto">
        <h2 className="text-primaryWhite text-center text-2xl font-bold sm:text-4xl md:text-[50px] my-10">Reservas Activas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
         {reservasActivas.length > 0 ? (
            reservasActivas.map((reserva) => (
              <Reserva key={reserva.id} reserva={reserva} />
            ))
          ) : (
            <p className="text-primaryWhite">No tienes reservas activas en este momento.</p>
          )}
        </div>
      </div>

      <div className="w-full mx-auto">
        <h2 className="text-primaryWhite text-center text-2xl font-bold sm:text-4xl md:text-[50px] my-10">Reservas Finalizadas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
         {reservasFinalizadas.length > 0 ? (
            reservasFinalizadas.map((reserva) => (
              <Reserva key={reserva.id} reserva={reserva} />
            ))
          ) : (
            <p className="text-primaryWhite">No tienes reservas finalizadas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MisReservas;