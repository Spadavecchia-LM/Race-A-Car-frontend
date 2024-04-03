import { Button } from "@nextui-org/button";
import React, { useContext, useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem, Input, Spinner } from "@nextui-org/react";
import { BsGeoAlt } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { municipios } from "../../js/municipios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";

const SearchBox = () => {
  const buenosAires = municipios.filter((mun) => mun.provincia.id == "06");

  const {dispatch} = useContext(GlobalContext)


  const [recogidaDate, setRecogidaDate] = useState("");
  const [entregaDate, setEntregaDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateRecogida = () => {
    const now = new Date();
    const recogida = new Date(recogidaDate);
    return recogida >= now;
  };

  const validateEntrega = () => {
    const recogida = new Date(recogidaDate);
    const entrega = new Date(entregaDate);
    return entrega > recogida;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEntrega() && validateRecogida()) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKENDURL}/autos/disponiblesPorFecha?fechaInicio=${recogidaDate}&fechaFin=${entregaDate}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          dispatch({type:"SET_AUTOSENTREFECHAS", payload: data})
          dispatch({type:"SET_FECHAS", payload: {inicio: recogidaDate, fin: entregaDate}})
          navigate("/publicaciones/porfecha");
          window.scrollTo({ left: 0, top: 0, behavior: "instant" });

          setEntregaDate("");
          setRecogidaDate("");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert(
        "las fechas ingresadas son invalidas, la fecha de recogida no puede ser anterior a hoy y la fecha de entrega tiene que ser superior a la fecha de recogida"
      );
    }
  };

  return (
    <div className="h-[auto] min-h-[150px] wrap mb-5 mt-5 w-[90%] mx-auto bg-formGrey flex justify-center items-center rounded-2xl p-[16px]">
      <form
        className="flex gap-10 items-center justify-center flex-wrap "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ">
          <Autocomplete
            variant="flat"
            labelPlacement="outside"
            label="Lugar de recogida"
            isRequired
            aria-label="municipios"
            size="lg"
            startContent={<BsGeoAlt />}
            defaultItems={buenosAires}
          >
            {(item) => (
              <AutocompleteItem
                endContent={item.provincia.nombre}
                key={item.id}
              >
                {item.nombre}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div className="flex flex-col ">
          <Input
            label="Fecha de recogida"
            value={recogidaDate}
            onValueChange={setRecogidaDate}
            placeholder="date"
            labelPlacement="outside"
            isRequired
            size={"lg"}
            variant="flat"
            type="date"
            name="recogida"
            className="bg-transparent min-w-[260px]"
            id="fechaRecogida"
          />
        </div>
        <div className="flex flex-col ">
          <Autocomplete
            variant="flat"
            isRequired
            labelPlacement="outside"
            label="Lugar de entrega"
            aria-label="municipios"
            size="lg"
            startContent={<BsGeoAlt />}
            defaultItems={buenosAires}
          >
            {(item) => (
              <AutocompleteItem
                endContent={item.provincia.nombre}
                key={item.id}
                textValue={item.provincia.nombre}
              >
                {item.nombre}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div className="flex flex-col ">
          <Input
            value={entregaDate}
            onValueChange={setEntregaDate}
            placeholder="date"
            variant="flat"
            label="Fecha de entrega"
            labelPlacement="outside"
            isRequired
            size={"lg"}
            type="date"
            name="entrega"
            className="bg-transparent min-w-[260px]"
            id="fechaEntrega"
          />
        </div>

        <div className="mt-8">
          <Button
            size="lg"
            endContent={<FaArrowRight />}
            className="text-primaryWhite bg-primaryGold min-w-[260px]"
            radius="full"
            variant="solid"
            type="submit"
          >
            {isLoading ? <Spinner/> : "buscar un vehículo"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
