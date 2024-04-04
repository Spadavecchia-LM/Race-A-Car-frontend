import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import DetalleModal from "../pages/DetalleModal";
const Reserva = ({ reserva }) => {

const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
            <Button onPress={onOpen} className="text-primaryWhite bg-primaryGold">Ver detalles</Button>
            <div className="flex flex-col text-primaryBlue font-[600]">
                <p>Retiro en: {reserva.recogida}</p>
                <p>Devolucion en: {reserva.entrega}</p>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" className="bg-secondaryBlue">
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
    </>
  );
};

export default Reserva;
