import React, { useState } from "react";
import { publicaciones } from "../../js/data";
import PublicacionCard from "../cards/PublicacionCard";
import { Pagination, PaginationItem } from "@nextui-org/react";

const Publicaciones = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // change this value according to your needs

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = publicaciones.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({left:0, top:0, behavior:"smooth"})
  };


  return (
    <>
      <div className="w-screen bg-secondaryBlue py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] gap-2  mx-auto">
          {currentItems.map((publicacion, i) => {
            return (
              <PaginationItem key={i}>
                <PublicacionCard publicacion={publicacion} />
              </PaginationItem>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center bg-secondaryBlue h-[100px]">
        <Pagination
          loop
          showControls
          total={Math.ceil(publicaciones.length / itemsPerPage)}
          initialPage={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Publicaciones;
