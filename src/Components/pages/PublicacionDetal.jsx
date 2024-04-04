import React, { useContext,useState,useEffect } from "react";
import { Card, Image, Button, Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
  Autocomplete,
  AutocompleteItem
} from "@nextui-org/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GlobalContext } from "../../context/AppContext";
import { GiGearStickPattern } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiSteeringFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GiCarWheel } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import DateRangePicker from "../utils/DateRangePicker";
import Politics from '../utils/Politics'
import { municipios } from "../../js/municipios";
import { BsGeoAlt } from "react-icons/bs";
import Swal from "sweetalert2";


const PublicacionDetal = ({ publicacion }) => {
  const { state,dispatch } = useContext(GlobalContext);
  const buenosAires = municipios.filter((mun) => mun.provincia.id == "06");
const [items, setItems] = useState([])





  const [disabledDates, setDisabledDates] = React.useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {

    const getItems = async() => {
      
      try{
        const response = await fetch(import.meta.env.VITE_BACKENDURL + "/items/todos")
        if(response.ok){
          const data = await response.json()
          setItems(data)
        }
      }catch(err){
        console.log(err)
      }
    }
    getItems()

  },[])

  useEffect(() => {
    const getFechasInhabilitadas = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKENDURL + "/reservas/" + publicacion.id + "/fechasInhabilitadas"
        );
        if (response.ok) {
          const data = await response.json();
          const dates = data.map((d) => new Date(d));
          setDisabledDates(dates);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Marcar que la carga ha finalizado
      }
    };

    getFechasInhabilitadas();
  }, []);

  const [recogida, setRecogida] = useState("")
  const [entrega, setEntrega] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const [reserva, setReserva] = useState({
    auto: publicacion,
    fechaComienzo: "",
    fechaFin: "",
    recogida: "",
    entrega:"",
    formaDePago: "VISA terminada en 0054"
  })

  useEffect(() => {
    setReserva({...reserva, recogida: recogida,entrega: entrega})
  },[recogida, entrega])

  useEffect(() => {
    setReserva({...reserva, fechaComienzo: state.fechaInicioReserva, fechaFin: state.fechaFinReserva})
  },[state.fechaInicioReserva, state.fechaFinReserva])


  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const handleScroll = () => {
    navigate("/publicaciones");
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });

    
  };
  const handleProceedToPayment = () => {
    // Redirigir al componente ReservaSeleccionada con la ID de la publicación
    if(recogida == "" || entrega == ""){
      Swal.fire({
        title:"Tienes que elegir un lugar de entrega y uno de recogida antes de proceder con la reserva",
        color:"#032047",
        icon:"error",
        toast:true,
        timer:4000

      })
    }
    
    else{
      dispatch({type:"SET_RESERVA", payload:reserva})
      navigate(`/ReservaSeleccionada/${publicacion.id}`);
      window.scrollTo({left:0, top:0, behavior:"instant"})
    }




  };

  const {
    id,
    marca,
    modelo,
    anio,
    color,
    valor,
    capacidad,
    traccion,
    categoria,
    combustion,
    caballosDeFuerza,
    tipoDeCaja,
    images,
  } = publicacion;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-primaryWhite text-[24px] sm:text[40px] md:text-[50px] text-center my-10">
        {marca} {modelo} {anio}
      </h1>

      <div className="grid grid-cols-1 grid-rows-1 gap-3 md:grid-cols-2 md:max-h-[75vh] w-[90%] mx-auto">
        <Card className="rounded-large bg-secondaryBlue">
          <Image
            alt="Card background"
            className="z-0 w-full h-full object-cover  rounded-large"
            src={images[1]}
          />
        </Card>

        <div className="hidden sm:grid grid-cols-1  grid-rows-2 gap-3 md:grid-cols-2 h-full">
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-large">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={images[0]}
            />
          </Card>
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-large">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={images[2]}
            />
          </Card>
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-large">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none "
              src={images[3]}
            />
          </Card>
          <Card className=" h-[100%] col-span-1 row-span-1 rounded-large">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={images[4]}
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
                    {images.map((imagen, i) => {
                      return (
                        <img
                          src={imagen}
                          alt="foto del auto"
                          className="object-contain h-[100%] "
                          key={i}
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
        <div className="grid   grid-cols-2 md:grid-cols-4 gap-14 w-[90%]  text-primaryWhite mt-20">
          <div className="flex gap-2 items-center">
            <FaCar className="text-[20px]" />
            <p>{marca}</p>
          </div>
          <div className="flex gap-2 items-center">
            <RiSteeringFill className="text-[20px]" />
            <p>{modelo}</p>
          </div>
          <div className="flex  gap-2 items-center">
            <MdAttachMoney className="text-[20px]" />
            <p>{valor} usd/dia</p>
          </div>
          <div className="flex  gap-2 items-center">
            <GoPeople className="text-[20px]" />
            <p>{capacidad}</p>
          </div>
          <div className="flex  gap-2 items-center">
            <BiCategory className="text-[20px]" />
            <p>{categoria.categoria}</p>
          </div>
          <div className="flex  gap-2 items-center">
            <LuFuel className="text-[20px]" />
            <p>{combustion} </p>
          </div>
          <div className="flex  gap-2 items-center">
            <FaCalendarAlt className="text-[20px]" />
            <p>Días de alquiler: </p>
          </div>
          <div className="flex  gap-2 items-center">
            <IoIosColorPalette className="text-[20px]" />
            <p>{color} </p>
          </div>
          <div className="flex  gap-2 items-center">
            <GiGearStickPattern className="text-[20px]" />
            <p>{tipoDeCaja} </p>
          </div>
          <div className="flex  gap-2 items-center">
            <CiStar className="text-[20px]" />
            <p>{anio}</p>
          </div>
          <div className="flex  gap-2 items-center">
            <GiCarWheel className="text-[20px]" />
            <p>{traccion}</p>
          </div>
          <div className="flex gap-2  items-center">
            <TbEngine className="text-[20px]" />
            <p> {caballosDeFuerza} hp </p>
          </div>
        </div>
        <div className="w-[90%] h-[2px] bg-white my-10 mt-20"></div>
        <div className="text-primaryWhite w-full flex justify-center mt-8">
          <h1 className="text-2xl font-bold">Extras del vehículo</h1>
        </div>
        <div className="flex flex-col items-center w-full mt-20 mb-20">
          <div className="mx-auto w-[90%]">
            <div className="text-primaryWhite grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-1 place-items-start md:place-items-center ">
              <div className="list-disc list-inside flex flex-col justify-start items-start">
                <ul className="list-disc list-inside flex flex-col gap-10">
                  {items.map(i => {
                    return(
                      <li className="text-[14px]  md:text-[18px]" key={i.id}>
                      {i.nombre}
                      <Chip className="ml-5">incluido</Chip>
                    </li>
                    )
                  })}
               
                </ul>
              </div>
              <div className="list-disc list-inside flex flex-col justify-start items-start">
                <ul className="list-disc list-inside">
                  <li className="text-[14px] md:text-[18px]">
                    Chofer privado $40usd/dia <Chip className="ml-5">opcional</Chip>
                  </li>
                  <li className="mt-10 text-[14px]  md:text-[18px]">
                    Combustible/carga ilimitada $250usd/dia
                    <Chip className="ml-5">opcional</Chip>
                  </li>
                  <li className="mt-10 text-[14px]  md:text-[18px]">
                    GPS satelital $25usd/dia
                    <Chip className="ml-5">opcional</Chip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        loading ? <Spinner/> :
        <div className="w-[90%] mx-auto">
        <h3 className="text-center text-primaryWhite">
          Ver fechas disponibles
        </h3>
        <div className="flex w-full justify-center gap-4">
                    <DateRangePicker disabledDates={disabledDates}/>
        </div>
        <div className="bg-[#d4d4d4] p-10 mt-5 flex flex-col gap-5 rounded-lg sm:w-1/2 mx-auto w-[90%]">
        <Autocomplete
            variant="flat"
            labelPlacement="outside"
            label="Lugar de recogida"
            isRequired
            aria-label="municipios"
            size="lg"
            startContent={<BsGeoAlt />}
            defaultItems={buenosAires}
            selectedKey={recogida}
            onSelectionChange={setRecogida}
          >
            {(item) => (
              <AutocompleteItem
                endContent={item.provincia.nombre}
                key={item.nombre}
                
              >
                {item.nombre}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            variant="flat"
            isRequired
            labelPlacement="outside"
            label="Lugar de entrega"
            aria-label="municipios"
            size="lg"
            startContent={<BsGeoAlt />}
            defaultItems={buenosAires}
            selectedKey={entrega}
            onSelectionChange={setEntrega}
           
          >
            {(item) => (
              <AutocompleteItem
                endContent={item.provincia.nombre}
                key={item.nombre}
               
              >
                {item.nombre}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
      </div>
      }
     
     <Politics />
      <div className="flex flex-col gap-3 pb-10">
        <Button
          className="bg-primaryBlue my-5 mx-auto text-primaryWhite w-[80%] sm:w-[90%] text-[18px] px-[24px] py-[12px]"
          size="lg"
          radius="lg"
          onClick={() => handleScroll()}
        >
          Seguir viendo
        </Button>
        <Button
          className="bg-primaryGold my-5 mx-auto text-primaryWhite w-[80%] sm:w-[90%] text-[18px] px-[24px] py-[12px]"
          size="lg"
          radius="lg"
          onClick={()=> handleProceedToPayment()}
        >
          Proceder con la reserva
        </Button>
      </div>
    </>
  );
};

export default PublicacionDetal;
