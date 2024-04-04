import React, {useContext, useState} from "react";
import { Rating } from "flowbite-react";
import { Button, Textarea } from "@nextui-org/react";
import { GlobalContext } from "../../context/AppContext";

const Valorar = ({reserva}) => {
  const [rating, setRating] = useState(0);
  const {state} = useContext(GlobalContext)
  const [mensaje, setMensaje] = useState("")
  const handleRatingChange = (value) => {
    setRating(value); // Actualiza el estado con el valor del rating seleccionado
  };

  const handleSubmit = () => {

    const hoy = new Date();

// Obtener el año
const año = hoy.getFullYear();

// Obtener el mes
let mes = hoy.getMonth() + 1; // Se agrega 1 porque los meses se cuentan desde 0
mes = mes < 10 ? '0' + mes : mes; // Agregar un 0 antes si es menor a 10

// Obtener el día
let dia = hoy.getDate();
dia = dia < 10 ? '0' + dia : dia; // Agregar un 0 antes si es menor a 10

// Formatear la fecha en el formato YYYY-MM-DD
const fechaFormateada = `${año}-${mes}-${dia}`;

    const payload = {
        usuarioId: state.user.id,
        reservaId: reserva.id,
        valoracion: rating,
        reseña: mensaje,
        fechaReseña: fechaFormateada
    }
    console.log(payload)
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <Rating size="md">
          <Rating.Star
            filled={rating >= 1}
            onClick={() => handleRatingChange(1)}
          />
          <Rating.Star
            filled={rating >= 2}
            onClick={() => handleRatingChange(2)}
          />
          <Rating.Star
            filled={rating >= 3}
            onClick={() => handleRatingChange(3)}
          />
          <Rating.Star
            filled={rating >= 4}
            onClick={() => handleRatingChange(4)}
          />
          <Rating.Star
            filled={rating >= 5}
            onClick={() => handleRatingChange(5)}
          />
        </Rating>
        <div>
          <Textarea
            id="valorarText"
            label="tu opinion"
            variant="flat"
            value={mensaje}
            onValueChange={setMensaje}
          ></Textarea>
        </div>
        <div>
          <Button onClick={()=>handleSubmit()} className="text-primaryWhite bg-primaryBlue">Enviar</Button>
        </div>
      </div>
    </>
  );
};

export default Valorar;
