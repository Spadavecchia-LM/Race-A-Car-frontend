import { Button, Spinner } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { Card, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import { GiGearStickPattern } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import { Toast } from "flowbite-react";
import { Rating } from "flowbite-react";

const PublicacionCard = ({ publicacion }) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos"));
  const { state, dispatch } = useContext(GlobalContext);
  const { autos } = state;

  const navigate = useNavigate();

  const handleScroll = (id) => {
    navigate("/publicacion/" + id);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const addToFav = () => {
    if (state.userIsLogged) {
      if (!isInFavs(publicacion.id)) {
        dispatch({ type: "ADD_FAV", payload: publicacion });
        localStorage.setItem(
          "favoritos",
          JSON.stringify([...state.favoritos, publicacion])
        );
        Swal.fire({
          title: "se agrego a favoritos",
          toast:true,
          showConfirmButton:false,
          position:"bottom",
          timer:2000,
          icon:"success",
          color:"#032047"
        });
      }
    } else {
      Swal.fire(
        {
          title: "Debes iniciar sesión para poder agregar a favoritos",
          toast:true,
          showConfirmButton:false,
          position:"bottom",
          timer:2000,
          color:"#032047",
          icon:"warning",
          iconColor:"#ba8f04"
        }
        );
    }
  };
  const eliminar = (id) => {
    const nuevosFavoritos = favoritos.filter((fav) => fav.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    dispatch({ type: "ELIMINAR_FAV", payload: id });
    Swal.fire(
      {
        title: "se quito de favoritos",
        toast:true,
        showConfirmButton:false,
        position:"bottom",
        timer:2000,
        color:"#032047",
        icon:"error",
        
      }
      );
  };

  const isInFavs = (id) => {
    return state.favoritos.some((user) => user.id == id);
  };

  return (
    <>
      {autos.length > 0 ? (
        <Card shadow="sm" className="p-2  min-h-full" >
          <CardBody className="overflow-visible p-0 hover:scale-[1.1] transition cursor-pointer  duration-100" onClick={() => handleScroll(publicacion.id)}>
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="imagen del auto"
              className="w-full object-cover h-[100%]"
              src={publicacion.images[1]}
            />
          </CardBody>

          <CardFooter className="text-small flex-col items-start min-h-[200px]">
            <div className="py-10 ">
              <h3 className="text-[20px] text-primaryBlue">
                {publicacion.marca} {publicacion.modelo} {publicacion.anio}
              </h3>
              <p className="text-primaryBlue text-[20px] md:text-[24px]  lg:text-[28px] pt-5">
                {publicacion.valor} USD/dia
              </p>

              <div className="flex justify-between items-center mt-4 w-full">
                <Chip className="bg-primaryBlue text-primaryWhite text-[12px]">
                  {publicacion.categoria.categoria}
                </Chip>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    {(Math.random() * (5 - 4) + 4).toFixed(2)}
                  </p>
                  <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                  <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                    {Math.ceil(Math.random() * 500)} valoraciones
                  </a>
                </Rating>
              </div>
            </div>

            {/* car specs */}
            <div className="grid place-items-center grid-cols-2 grid-rows-2 xl:grid-rows-1 xl:grid-cols-4  w-full gap-2  p-3 sm:p-2 bg-[#edf0f5]  rounded-2xl min-h-[80px]">
              <span className="flex flex-col items-center text-[12px]">
                <TbEngine /> {publicacion.caballosDeFuerza}cv
              </span>
              <span className="flex flex-col items-center text-[12px]">
                <GiGearStickPattern /> {publicacion.tipoDeCaja}
              </span>
              <span className="flex flex-col items-center text-[12px]">
                <GoPeople /> {publicacion.capacidad}
              </span>
              <span className="flex flex-col items-center text-[12px] text-center">
                <BsFillFuelPumpFill /> {publicacion.combustion}{" "}
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-5">
              <Button
                className="bg-primaryGold my-5 text-primaryWhite w-[70%] text-[18px] px-[24px] py-[12px]"
                size="lg"
                radius="lg"
                onClick={() => handleScroll(publicacion.id)}
              >
                Alquilar ahora
              </Button>
              {!isInFavs(publicacion.id) ? (
                <CiHeart
                  onClick={() => addToFav()}
                  className="text-[32px]  cursor-pointer hover:text-danger "
                />
              ) : (
                <FaHeart
                  className="text-[28px]  cursor-pointer text-danger"
                  onClick={() => eliminar(publicacion.id)}
                />
              )}
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PublicacionCard;
