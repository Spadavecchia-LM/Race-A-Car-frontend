import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Image, Input, Select, SelectItem } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillFilter } from "react-icons/ai";
import { marcas } from "../../js/data";
import { Avatar } from "flowbite-react";
import { GlobalContext } from "../../context/AppContext";

const FilterBox = ({array}) => {
  const [categorias, setCategorias] = useState([]);
  const {state, dispatch} = useContext(GlobalContext)
  const {autos,autosFiltrados} = state
  const [isFiltered, setIsFiltered] = useState(false);

  // const [filters, setFilters] = useState({
  //     filtroDeMarcas: "",
  //     filtroDeCategorias: "",
  // });

  const [marcasFilter, setMarcasFilter] = useState(new Set([]));
  const [categoriasFilter, setCategoriasFilter] = useState(new Set([]));


  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKENDURL + "/categoria/all");
        if (response.ok) {
          const data = await response.json();
          setCategorias(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCategorias();
  }, []);



  const handleFilter = (arr) => {
    
    const filtroDeMarcas = Array.from(marcasFilter).map(e => e.toLowerCase())
    const filtroDeCategorias = Array.from(categoriasFilter).map(e => e.toLowerCase())


    const autosFiltrados = arr.filter(auto => filtroDeMarcas.includes(auto.marca.toLowerCase()) || filtroDeCategorias.includes(auto.categoria.categoria.toLowerCase()))
    
    dispatch({type:"SET_FILTERED_AUTOS", payload:autosFiltrados})

    setIsFiltered(true)
    
  };


  const clearFilters = () => {
        document.querySelector("#filterForm").reset()
        setIsFiltered(false)
        setCategoriasFilter(new Set([]))
        setMarcasFilter(new Set([]))
        dispatch({type:"SET_FILTERED_AUTOS", payload:null})
  }

  return (
    <div className=" wrap mb-5 mt-5 w-[90%] mx-auto bg-formGrey  rounded-2xl p-[16px]">
      <form className="flex gap-10 items-center justify-center flex-wrap " id="filterForm">
        <Select
          selectionMode="multiple"
          size={"sm"}
          selectedKeys={marcasFilter}
          onSelectionChange={setMarcasFilter}
          className="w-full sm:w-1/2 md:w-1/4"
          aria-label="select de marcas"
          selectorIcon={<AiFillFilter />}
          placeholder="filtrar por marcas"
        >
          {marcas.map((marca) => {
            return (
              <SelectItem
                startContent={<Image className="w-[20px]" src={marca.imagen} />}
                value={marca.marca.toLowerCase()}
                key={marca.marca.toLowerCase()}
              >
                {marca.marca}
              </SelectItem>
            );
          })}
        </Select>

        <Select
          aria-label="select de categorias"
          selectionMode="multiple"
          size={"sm"}
          selectedKeys={categoriasFilter}
          onSelectionChange={setCategoriasFilter}
          className="w-full sm:w-1/2 md:w-1/4"
          selectorIcon={<AiFillFilter />}
          placeholder="Filtrar por categorías"
        >
          {categorias?.map((categoria) => {
            return (
              <SelectItem
                value={categoria.categoria.toLowerCase()}
                key={categoria.categoria.toLowerCase()}
              >
                {categoria.categoria}
              </SelectItem>
            );
          })}
        </Select>
        

        {!isFiltered && state.autosFiltrados == null ? 
        <Button
        size="md"
        className={`text-primaryWhite bg-primaryGold min-w-[260px] ${Array.from(marcasFilter).length == 0 && Array.from(categoriasFilter).length == 0 ? "hidden" : ""}`}
        radius="full"
        variant="solid"
        onClick={() => handleFilter(array)}
      >
        Aplicar filtro
      </Button>
      :
      <Button
      size="md"
      className="text-primaryWhite min-w-[260px]"
      color="danger"
      radius="full"
      variant="solid"
      onClick={() => clearFilters()}
    >
      Quitar filtros
    </Button>
    }
    {isFiltered && <span>{autosFiltrados.length} {autosFiltrados.length > 1 ? "resultados" : "resultado"}</span>}
        
      </form>
    </div>
  );
};

export default FilterBox;
