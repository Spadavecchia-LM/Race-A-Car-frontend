import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import {Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, useDisclosure} from "@nextui-org/react";

import DetalleModal from "../pages/DetalleModal";
import Valorar from "../utils/Valorar";

const Reserva = ({ reserva }) => {

const {isOpen:isOpenDetalle,onOpen: onOpenDetalle,onOpenChange:onOpenChangeDetalle} = useDisclosure();
const {isOpen:isOpenValorar,onOpen: onOpenValorar,onOpenChange:onOpenChangeValorar} = useDisclosure();

const fin = new Date(reserva.fechaFin).getTime(); // Obtener el tiempo en milisegundos
const hoy = new Date().getTime();

  return (
    <>
      <div className="w-screen">
        <Card className="w-[90%] mx-auto max-h-[100vh] p-1 sm:p-5">
          <CardHeader className="flex gap-2">
            <Image src={reserva.auto.images[0]} className=" rounded-none" />
            <Image src={reserva.auto.images[1]} className="  rounded-none hidden sm:inline-block" />

          </CardHeader>
          <CardBody className="flex flex-col gap-5 text-primaryBlue">
            <h1 className="sm:text-[24px] font-[600]">Código de la reserva: {reserva.id}</h1>
            
            <h3 className="sm:font-[300] text-[22px]">{reserva.auto.marca} {reserva.auto.modelo} {reserva.auto.anio}</h3>
            <div className="flex gap-5">
            <h5 className="sm:text-[28px] font-[600]">{reserva.fechaComienzo.split("-").reverse().join("/")} - {reserva.fechaFin.split("-").reverse().join("/")}</h5>
            </div>
        
          </CardBody>
          <CardFooter className="flex justify-between items-center gap-3 sm:gap-0 flex-wrap">
            <Button size="md" onPress={onOpenDetalle} className="text-primaryWhite bg-primaryGold">Ver detalles</Button>
            <div className="flex flex-col text-primaryBlue font-[600]">
                {fin - hoy > 0 ? 
                  <>
                <p>Retiro en: {reserva.recogida}</p>
                <p>Devolucion en: {reserva.entrega}</p>
                  </>
                  :
                  reserva.valoracion == null ? 
                  <Button onPress={onOpenValorar} size="md" className="bg-primaryBlue text-primaryWhite">
                    Valorar
                    </Button>
                    :
                 
                   "Mi reseña: '" + reserva.valoracion.resena + "'"
              }
             
            </div>
          </CardFooter>
        </Card>
      </div>

      <Modal size="full" isOpen={isOpenDetalle} onOpenChange={onOpenChangeDetalle} scrollBehavior="inside" className="bg-secondaryBlue">
        <ModalContent>
          {(onClose) => (
            <>
            
              <ModalBody>
                <DetalleModal reserva={reserva}/>
              </ModalBody>
              <ModalFooter>
                <Button className="text-primaryWhite bg-primaryGold" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal size="xl" isOpen={isOpenValorar} onOpenChange={onOpenChangeValorar} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Dejanos tu opinion</ModalHeader>
              <ModalBody>
                <Valorar reserva={reserva}/>
              </ModalBody>
              <ModalFooter>
                <Button className="text-primaryWhite bg-primaryGold" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Reserva;
