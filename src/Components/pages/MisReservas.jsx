import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";
import ReservaCard from "../cards/ReservaCard";

const MisReservas = () => {
  const [loading, setLoading] = useState(true);

  // Datos ficticios de reservas activas y finalizadas para simular
  const reservasActivas = [
    {
        id: 1,
        codigo: "ABC123",
        modeloAuto: "Toyota Corolla",
        desde: "2024-03-20",
        hasta: "2024-03-25",
        lugarRetiro: "Aeropuerto",
        lugarDevolucion: "Centro de la ciudad",
      },
      {
        id: 2,
        codigo: "ABC123",
        modeloAuto: "Toyota Corolla",
        desde: "2024-03-20",
        hasta: "2024-03-25",
        lugarRetiro: "Aeropuerto",
        lugarDevolucion: "Centro de la ciudad",
      },
  ];

  const reservasFinalizadas = [
    {
        id: 3,
        codigo: "DEF456",
        modeloAuto: "Honda Civic",
        desde: "2024-03-10",
        hasta: "2024-03-15",
        lugarRetiro: "Estación de tren",
        lugarDevolucion: "Hotel",
      },
  ];

  // Simulación de carga
  setTimeout(() => {
    setLoading(false);
  }, 2000); // Simular carga de 2 segundos

  return (
    <div className="bg-secondaryBlue p-6 w-screen flex flex-col items-center">
      <h1 className="text-primaryWhite text-xl font-bold sm:text-2xl md:text-3xl my-10">
        Mis Reservas
      </h1>

      <div className="mb-8 w-full mx-auto">
        <h2 className="text-primaryWhite text-center text-xl mb-4">Reservas Activas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {loading ? (
            <Spinner />
          ) : reservasActivas.length > 0 ? (
            reservasActivas.map((reserva) => (
              <ReservaCard key={reserva.id} reserva={reserva} />
            ))
          ) : (
            <p className="text-primaryWhite">No tienes reservas activas en este momento.</p>
          )}
        </div>
      </div>

      <div className="w-full mx-auto">
        <h2 className="text-primaryWhite text-center text-xl mb-4">Reservas Finalizadas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {loading ? (
            <Spinner />
          ) : reservasFinalizadas.length > 0 ? (
            reservasFinalizadas.map((reserva) => (
              <ReservaCard key={reserva.id} reserva={reserva} />
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