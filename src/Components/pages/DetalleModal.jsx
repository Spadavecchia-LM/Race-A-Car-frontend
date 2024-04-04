import { Button, Image, Spinner } from "@nextui-org/react";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/AppContext";
import { Preview, print } from "react-html2pdf";

const DetalleModal = ({ reserva }) => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <div className="pb-20 w-full md:w-1/2  bg-secondaryBlue text-primaryWhite">
        <h1 className="text-left py-10 w-[80%] mx-auto  text-[40px]">
          Detalle reserva: #{reserva.id}
        </h1>

        <Preview id="toPdf">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-[90%] mx-auto p-5 bg-primaryWhite rounded-large">
            <Image src={reserva.auto.images[0]} className="w-full" />

            <div className="flex flex-col text-primaryBlue  justify-between">
              <h2 className="font-bold text-[28px]">
                {reserva.auto.marca} {reserva.auto.modelo} {reserva.auto.anio}
              </h2>
              <h2 className="font-bold">
                Titular de la reserva:{" "}
                <span className="font-[500]">
                  {state.user.nombre} {state.user.apellido}
                </span>{" "}
              </h2>
              <h2 className="font-bold">
                Email: <span className="font-[500]">{state.user.email}</span>
              </h2>
              <h2 className="font-bold">
                Teléfono:{" "}
                <span className="font-[500]">{state.user.telefono}</span>
              </h2>
              <h2 className="font-bold">
                Pago: <span className="font-[500]">{reserva.formaDePago}</span>
              </h2>
              <h2 className="font-bold">
                Total: <span className="font-[500]">USD {reserva.total}</span>
              </h2>
              <div className="flex">
                <Button
                  onClick={() => print("voucher", "toPdf")}
                  className="bg-primaryGold text-primaryWhite"
                >
                  Descargar Voucher
                </Button>
              </div>
            </div>
            <div className="flex flex-col text-primaryBlue">
              <h2 className="font-bold">Retiro/Pick Up:</h2>
              <p className="font-bold">
                {new Date(reserva.fechaComienzo).toLocaleDateString()}
              </p>
              <p>{reserva.recogida}, provincia de Buenos Aires.</p>
              <br />
              <hr className="text-bold" />
              <br />

              <h2 className="font-bold">Devolución / Drop Off:</h2>
              <p className="font-bold">
                {new Date(reserva.fechaFin).toLocaleDateString()}
              </p>
              <p>{reserva.entrega}, provincia de Buenos Aires.</p>
            </div>
          </div>
        </Preview>
      </div>
    </>
  );
};

export default DetalleModal;
