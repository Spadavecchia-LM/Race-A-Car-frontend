import React, { useContext, useEffect, useState } from "react";
import { publicaciones } from "../../js/data";
import PublicacionCard from "../cards/PublicacionCard";
import { Pagination, PaginationItem } from "@nextui-org/react";
import { GlobalContext } from "../../context/AppContext";
import FilterBox from "../utils/FilterBox";

const PublicacionesEntreFechas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // change this value according to your needs

  const {state} = useContext(GlobalContext)
  const {fechas} = state

  const {autosEntreFechas} = state
 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =  autosEntreFechas.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({left:0, top:0, behavior:"smooth"})
  };


  return (
    <>



         <div className="w-screen bg-secondaryBlue py-5">
          
          <p className="text-primaryWhite text-center">mostrando autos disponibles entre el {fechas.inicio.split("-").reverse().join("/")} hasta {fechas.fin.split("-").reverse().join("/")} </p>
        {currentItems.length > 0 ? 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] gap-2  mx-auto">
          {currentItems.map((publicacion, i) => {
            return (
              <PaginationItem key={i}>
                <PublicacionCard publicacion={publicacion} />
              </PaginationItem>
            );
          })}
        </div>
        : 

        <h1 className="text-primaryWhite text-center h-[50vh]">no se encontraron resultados con los filtros aplicados</h1>
      }
       
       </div>
 
 
       <div className="flex justify-center items-center bg-secondaryBlue h-[100px]">
         <Pagination
           loop
           showControls
           total={Math.ceil(autosEntreFechas.length / itemsPerPage )}
           initialPage={currentPage}
           onChange={handlePageChange}
         />
       </div>
       </>

  );
};

export default PublicacionesEntreFechas;
