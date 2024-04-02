import React, { useState, useEffect, useContext } from "react";
import PublicacionCard from "../cards/PublicacionCard"; // Importa tu componente de card de publicación
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";
import ReservaCard from "../cards/ReservaCard";
import { Button } from "@nextui-org/react";

const ReservaSeleccionada = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const { id } = useParams()

    const publicacionFiltrada = state.autos.filter(auto => auto.id == id)

    const publicacion = publicacionFiltrada[0]


    const inicio = state.fechaInicioReserva.toLocaleDateString()
    const fin = state.fechaFinReserva.toLocaleDateString()

    const diferencia = (state.fechaFinReserva - state.fechaInicioReserva) / (1000 * 60 * 60 * 24)

    console.log(diferencia)

    return (
        <>
         <div className="flex flex-col  bg-secondaryBlue text-primaryWhite">
            <div className="text-center font-bold text-2xl underline mb-4">
                Reserva Seleccionada
            </div>
            <div className="flex justify-around flex-wrap">
                <>
                    {publicacion ? (
                        <div className="flex flex-col justify-center gap-20">
                            <Button size="lg" disabled>
                                <p>Fecha desde: {inicio}</p>
                                <p>Fecha hasta: {fin}</p>
                            </Button>

                            <Button size="lg"  disabled>
                                <p>Vehículo reservado:</p>
                                <p>{publicacion.marca} {publicacion.modelo} {publicacion.anio}</p>
                            </Button>


                            <Button size="lg"  disabled>
                                <p>Valor total de la reserva: ${publicacion.valor * diferencia} por {diferencia} dias </p>
                            </Button>
                        </div>
                        
                    )
                    
                    
                    : (
                        <p>Cargando...</p>
                    )}
                    </>
                <div className="w-1/2 p-4">
                    {/* Contenido derecho */}
                    {publicacion && <ReservaCard reserva={publicacion} />}
                </div>
            </div>
        </div>
        <div className="w-screen flex justify-center bg-secondaryBlue py-10">
        <Button size="lg" className="bg-primaryGold text-primaryWhite w-[70%] ">Proceder con el pago</Button>
        </div>
        </>
       
    );
};

export default ReservaSeleccionada;