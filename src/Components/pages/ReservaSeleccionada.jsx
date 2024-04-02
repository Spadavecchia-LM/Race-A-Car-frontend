import React, { useState, useEffect } from "react";
import PublicacionCard from "../cards/PublicacionCard"; // Importa tu componente de card de publicación

const ReservaSeleccionada = ({ id }) => {
  const [publicacion, setPublicacion] = useState(null);

  useEffect(() => {
    const fetchPublicacion = async () => {
      try {
        const response = await fetch(`http://tu-api.com/publicaciones/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPublicacion(data);
        } else {
          console.error("Error al obtener la publicación");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };

    fetchPublicacion();
  }, [id]);

  return (
    <div className="flex flex-col h-screen bg-secondaryBlue text-primaryWhite">
      <div className="text-center font-bold text-2xl underline mb-4">
        Reserva Seleccionada
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          {publicacion ? (
            <div>
              <div className="mb-4">
                <p>Fecha desde: {publicacion.fechaDesde}</p>
                <p>Fecha hasta: {publicacion.fechaHasta}</p>
              </div>
              <div className="mb-4">
                <p>Vehículo reservado:</p>
                <p>{publicacion.marca} {publicacion.modelo} {publicacion.anio}</p>
              </div>
              <div>
                <p>Valor total de la reserva: {publicacion.valorTotal}</p>
              </div>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="w-1/2 p-4">
          {/* Contenido derecho */}
          {publicacion && <PublicacionCard publicacion={publicacion} />}
        </div>
      </div>
    </div>
  );
};

export default ReservaSeleccionada;