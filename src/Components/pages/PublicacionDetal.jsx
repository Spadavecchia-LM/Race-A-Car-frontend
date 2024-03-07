import React, { useContext } from "react";
import { Card, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GlobalContext } from "../../context/AppContext";
import { GiGearStickPattern } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiSteeringFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCar } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { TiSpanner } from "react-icons/ti";

const PublicacionDetal = ({ publicacion }) => {
  const { state } = useContext(GlobalContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const handleScroll = () => {
    navigate("/publicaciones");
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  };

  const {
    id,
    marca,
    modelo,
    anio,
    precio,
    capacidad,
    categoria,
    hp,
    transmision,
    imagenes,
  } = publicacion;

  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 gap-1 md:grid-cols-2 md:max-h-[75vh] w-[90%] mx-auto">
        <div className="row-span-1 md:row-span-2 ">
          <Card className="md:h-[100%] rounded-none bg-primaryBlue">
            <h1 className="bg-primaryGold text-primaryWhite text-[24px] sm:text[40px] md:text-[50px] text-center">
              {marca} {modelo} {anio}
            </h1>

            <Image
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={imagenes[1]}
            />
          </Card>
        </div>

        <div className="hidden sm:grid grid-cols-1 grid-rows-2 gap-1 md:grid-cols-2 h-full">
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={imagenes[0]}
            />
          </Card>
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={imagenes[2]}
            />
          </Card>
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none "
              src={imagenes[3]}
            />
          </Card>
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-none">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={imagenes[4]}
            />
          </Card>
        </div>
      </div>

      <div className="flex items-center w-[90%] mx-auto mt-5 justify-end ">
        <Button
          endContent={<FaPhotoVideo className="text-default-700 text-[22px]" />}
          className="bg-primaryGold text-primaryWhite text-[18px] "
          key="full"
          onPress={() => handleOpen("full")}
        >
          ver mas
        </Button>
      </div>
      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-secondaryBlue"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                  <Carousel className="h-screen">
                    {imagenes.map((imagen) => {
                      return (
                        <img
                          src={imagen}
                          alt="foto del auto"
                          className="object-contain h-[100%] "
                        />
                      );
                    })}
                  </Carousel>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="solid" onPress={onClose}>
                  cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex flex-col items-center w-full mt-10">
        <div className="w-[90%] h-[2px] bg-white my-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-20 gap-x-80 w-[90%] text-primaryWhite mt-20">
          <div className="flex justify-start items-center">
            <FaCar />
            <p>Marca: {marca}</p>
          </div>
          <div className="flex justify-start items-center">
            <RiSteeringFill />
            <p>Modelo: {modelo}</p>
          </div>
          <div className="flex justify-start items-center">
            <FaWallet />
            <p>Precio: ${precio}</p>
          </div>
          <div className="flex justify-start items-center">
            <GoPeople />
            <p>Capacidad: {capacidad}</p>
          </div>
          <div className="flex justify-start items-center">
            <RxHamburgerMenu />
            <p>Categoría: {categoria}</p>
          </div>
          <div className="flex justify-start items-center">
            <IoMdSpeedometer />
            <p>RPM: </p>
          </div>
          <div className="flex justify-start items-center">
            <FaCalendarAlt />
            <p>Días de alquiler: </p>
          </div>
          <div className="flex justify-start items-center">
            <IoIosColorPalette />
            <p>Color: </p>
          </div>
          <div className="flex justify-start items-center">
            <GiGearStickPattern />
            <p>Caja: </p>
          </div>
          <div className="flex justify-start items-center">
            <CiStar />
            <p>Año: {anio}</p>
          </div>
          <div className="flex justify-start items-center">
            <TiSpanner />
            <p>Tracción: </p>
          </div>
          <div className="flex justify-start items-center">
            <TbEngine />
            <p>Motor: </p>
          </div>
        </div>
        <div className="w-[90%] h-[2px] bg-white my-10 mt-20"></div>
        <div className='text-primaryWhite w-full flex justify-center mt-8'>
    <h1 className='text-2x1 font-bold'>Extras del vehículo</h1>
  </div>
  <div className='flex flex-col items-center w-full mt-20'>
  <div className='mx-auto w-[90%]'>
    <div className='text-primaryWhite grid grid-cols-2 gap-5'>
      <div className='list-disc list-inside flex flex-col justify-center items-center'>
      <ul className='list-disc list-inside'>
        <li>Techo solar panorámico</li>
        <li className="mt-10">Cámara de retroceso</li>
        <li className="mt-10">Sistema de frenos ABS</li>
      </ul>
      </div>
      <div className='list-disc list-inside flex flex-col justify-center items-center'>
      <ul className='list-disc list-inside'>
        <li>Llantas de aleación</li>
        <li className="mt-10">Asientos calefaccionados</li>
        <li className="mt-10">Sistema de navegación GPS</li>
      </ul>
      </div>
    </div>
  </div>
</div>
<div className="w-[90%] h-[2px] bg-white my-10 mt-20"></div>
</div>

      <div className="flex flex-wrap gap-3">
        <Button
          className="bg-primaryBlue my-5 mx-auto text-primaryWhite w-[80%] sm:w-[30%] text-[18px] px-[24px] py-[12px]"
          size="lg"
          radius="lg"
          onClick={() => handleScroll()}
        >
          Seguir viendo
        </Button>
        <Button
          className="bg-primaryGold my-5 mx-auto text-primaryWhite w-[80%] sm:w-[30%] text-[18px] px-[24px] py-[12px]"
          size="lg"
          radius="lg"
        >
          Proceder con el pago
        </Button>
      </div>
    </>
  );
};

export default PublicacionDetal;
