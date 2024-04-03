import React, { useState, useEffect, useContext } from "react";
import PublicacionCard from "../cards/PublicacionCard"; // Importa tu componente de card de publicación
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";
import ReservaCard from "../cards/ReservaCard";
import { Button, Spinner } from "@nextui-org/react";
import Swal from "sweetalert2";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Login from "./Login";

const ReservaSeleccionada = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false)
  const { state, dispatch } = useContext(GlobalContext);

  const { reservaSeleccionada } = state;

  const inicioSinFormatear = new Date(reservaSeleccionada.fechaComienzo);
  const finSinFormatear = new Date(reservaSeleccionada.fechaFin);

  const inicioAño = inicioSinFormatear.getFullYear();
  let inicioMes = inicioSinFormatear.getMonth() + 1;
  let inicioDia = inicioSinFormatear.getDate();
  inicioMes = inicioMes < 10 ? "0" + inicioMes : inicioMes;
  inicioDia = inicioDia < 10 ? "0" + inicioDia : inicioDia;

  const finAño = finSinFormatear.getFullYear();
  let finMes = finSinFormatear.getMonth() + 1;
  let finDia = finSinFormatear.getDate();
  finMes = finMes < 10 ? "0" + finMes : finMes;
  finDia = finDia < 10 ? "0" + finDia : finDia;

  const inicioFormateado = `${inicioAño}-${inicioMes}-${inicioDia}`;
  const finFormateado = `${finAño}-${finMes}-${finDia}`;

  const [reservaPayload, setReservaPayload] = useState({
    autoId: reservaSeleccionada.auto.id,
    formaDePago: reservaSeleccionada.formaDePago,
    fechaComienzo: inicioFormateado,
    fechaFin: finFormateado,
    email: "",
    recogida: reservaSeleccionada.recogida,
    entrega:reservaSeleccionada.entrega
  });
  
  const refrescarReservas = async() => {
    try{
      const response = await fetch(import.meta.env.VITE_BACKENDURL + "/reservas/" + state.user.id)

      if(response.ok){
          const data = await response.json()
          dispatch({type:"GET_RESERVAS_USUARIO", payload: data.reverse()})
      }
  }catch(err){
      console.log(err)
  }
  }

  const handleSubmit  = async () => {

    const settings = {
      method:"POST",
      headers:{
        "Authorization": `Bearer: ${localStorage.getItem("Authorization")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reservaPayload)
    }
    setIsLoading(true)
    try{
      const response = await fetch(import.meta.env.VITE_BACKENDURL + "/reservas/crear", settings)

      if(response.ok){
        Swal.fire({
          title:"¡Reserva realizada con éxito!",
          icon:"success",
          toast:true,
          timer:3000,
          showConfirmButton:false,
          position:"bottom"
        })
        const data = await response.json()
        await refrescarReservas()
        navigate("/reserva/checkout/" + data.id)
      }else{
        Swal.fire({
          title:"Opss algo salio mal",
          icon:"error",
          toast:true,
          timer:3000,
          showConfirmButton:false,
          position:"bottom"
        })
        setIsLoading(false)
      }
    }catch(err){
      console.log(err)

    }finally{
      setIsLoading(false)
    }

  }

  useEffect(() => {
    if(state.userIsLogged){
      setReservaPayload({...reservaPayload, email: state.user.email})
    }

  },[state.user])

  

  const navigate = useNavigate();

  const inicio = state.fechaInicioReserva.toLocaleDateString();
  const fin = state.fechaFinReserva.toLocaleDateString();

  const diferencia = Math.ceil(
    (state.fechaFinReserva - state.fechaInicioReserva) / (1000 * 60 * 60 * 24)
  );

  console.log(diferencia);

  return (
    <>
      <div className="flex flex-col  bg-secondaryBlue w-screen text-primaryWhite">
        <div className="text-center text-[40px]  mb-4">
          Reserva seleccionada
        </div>
        <div className="flex justify-around w-[80%] mx-auto flex-wrap">
          <>
            {reservaSeleccionada ? (
              <div className="flex flex-col py-4  justify-between gap-5 md:gap-0">
                <div className="rounded-lg flex flex-wrap gap-2 justify-center text-secondaryBlue bg-primaryWhite py-[12px] px-[24px]  w-[90%] sm:w-full mx-auto">
                  <p>desde el {inicio}</p>
                  <p>al {fin}</p>
                </div>

                <div className=" rounded-lg text-secondaryBlue bg-primaryWhite flex flex-wrap justify-center py-[12px] px-[24px]  w-[90%] sm:w-full mx-auto">
                  <p>Vehículo reservado:</p>
                  <p>
                    {reservaSeleccionada.auto.marca}{" "}
                    {reservaSeleccionada.auto.modelo}{" "}
                    {reservaSeleccionada.auto.anio}
                  </p>
                </div>

                <div className=" rounded-lg text-secondaryBlue bg-primaryWhite flex justify-center  py-[12px] px-[24px] w-[90%] sm:w-full mx-auto">
                  <p>
                    Valor total de la reserva: $
                    {reservaSeleccionada.auto.valor * diferencia} por{" "}
                    {diferencia} dias{" "}
                  </p>
                </div>
              </div>
            ) : (
              <p>Cargando...</p>
            )}
          </>
          <div className=" p-4">
            {/* Contenido derecho */}
            {reservaSeleccionada && (
              <ReservaCard reserva={reservaSeleccionada} />
            )}
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-col gap-5 items-center  justify-center bg-secondaryBlue py-10">
        <Button
          size="lg"
          className="bg-primaryBlue text-primaryWhite w-[60%]"
          onClick={() => history.back()}
        >
          volver
        </Button>
        {state.userIsLogged ? (
          <Button
            size="lg"
            className="bg-primaryGold text-primaryWhite w-[60%]"
            onClick={() => handleSubmit()}
          >
            {isLoading ? <Spinner/> : "Pagar y confirmar reserva"}
          </Button>
        ) : (
          <Button
            size="lg"
            className="bg-primaryGold text-primaryWhite w-[60%]"
            onPress={onOpen}
          >
            Pagar y confirmar reserva
          </Button>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"

      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-primaryBlue">
                Debes iniciar sesión para proceder con tu reserva.
              </ModalHeader>
              <ModalBody>
                <Login />
              </ModalBody>
              <ModalFooter className="flex justify-between items-center">
                <Button
                  size="md"
                  onClick={() => navigate("/register")}
                  className="text-primaryBlue bg-transparent"
                >
                  Quiero crear mi cuenta
                </Button>
                <Button
                  className="bg-primaryGold text-primaryWhite"
                  size="md"
                  variant="light"
                  onPress={onClose}
                >
                  cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReservaSeleccionada;
