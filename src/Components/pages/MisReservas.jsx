import React, { useContext, useState, useEffect } from "react";
import { Card, Image, Spinner } from "@nextui-org/react";
import { GlobalContext } from "../../context/AppContext";

const MisReservas = () => {
  const { state } = useContext(GlobalContext);
  const [reservasActivas, setReservasActivas] = useState([]);
  const [reservasFinalizadas, setReservasFinalizadas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una llamada a la API para obtener las reservas del usuario
    const fetchReservas = async () => {
      try {
        // Suponiendo que state.user contiene la información del usuario
        const response = await fetch(`http://tu-api.com/reservas/${state.user.id}`);
        if (response.ok) {
          const data = await response.json();
          // Separar las reservas activas de las finalizadas
          const activas = data.filter(reserva => reserva.estado === 'activo');
          const finalizadas = data.filter(reserva => reserva.estado === 'finalizada');
          setReservasActivas(activas);
          setReservasFinalizadas(finalizadas);
          setLoading(false);
        } else {
          console.error('Error al obtener las reservas del usuario');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchReservas();
  }, [state.user.id]);

  return (
    <div className="bg-secondaryBlue p-6 h-screen flex flex-col">
      <h1 className="text-primaryWhite text-xl font-bold sm:text-2xl md:text-3xl my-10">
        Mis Reservas
      </h1>

      <div className="mb-8">
        <h2 className="text-primaryWhite text-center text-xl mb-4">Reservas Activas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {loading ? (
            <Spinner />
          ) : reservasActivas.length > 0 ? (
            reservasActivas.map((reserva) => (
              <Card key={reserva.id} className="bg-secondaryBlue text-primaryWhite w-[300px]">
                <Image
                  alt="Imagen del auto reservado"
                  className="w-full h-64 object-cover rounded-t-lg"
                  src={reserva.auto.imagen}
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">
                    {reserva.auto.marca} {reserva.auto.modelo}
                  </h2>
                  <p>Fecha de inicio: {reserva.fechaInicio}</p>
                  <p>Fecha de fin: {reserva.fechaFin}</p>
                  <p>Estado: {reserva.estado}</p>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-primaryWhite">No tienes reservas activas en este momento.</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-primaryWhite text-center text-xl mb-4">Reservas Finalizadas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {loading ? (
            <Spinner />
          ) : reservasFinalizadas.length > 0 ? (
            reservasFinalizadas.map((reserva) => (
              <Card key={reserva.id} className="bg-secondaryBlue text-primaryWhite w-[300px]">
                <Image
                  alt="Imagen del auto reservado"
                  className="w-full h-64 object-cover rounded-t-lg"
                  src={reserva.auto.imagen}
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">
                    {reserva.auto.marca} {reserva.auto.modelo}
                  </h2>
                  <p>Fecha de inicio: {reserva.fechaInicio}</p>
                  <p>Fecha de fin: {reserva.fechaFin}</p>
                  <p>Estado: {reserva.estado}</p>
                </div>
              </Card>
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