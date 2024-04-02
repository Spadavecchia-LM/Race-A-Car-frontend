import React, {useContext} from 'react'
import { GlobalContext } from '../../context/AppContext';
import { Avatar, Button, Image } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell,DropdownMenu, Dropdown, DropdownItem, DropdownTrigger} from "@nextui-org/react";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const Favoritos = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));

    const { state, dispatch } = useContext(GlobalContext);

  
    const navigate = useNavigate() 

    const eliminar = (id) => {
        const nuevosFavoritos = favoritos.filter((fav) => fav.id !== id);
        localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
        dispatch({ type: "ELIMINAR_FAV", payload: id });
        Swal.fire(
          {
            title: "Borrado de favoritos",
            toast:true,
            showConfirmButton:false,
            position:"bottom",
            timer:2000,
            color:"#032047",
            icon:"error",
           
            
          }
          );
      };
  return (
    <>
    {favoritos == null || favoritos.length == 0 ?
    <div className='w-screen h-screen flex flex-col items-center gap-10 justify-center bg-secondaryBlue'>
      <h1 className='text-primaryWhite'>Parece que no hay nada en tus favoritos</h1>
      <Button color='warning' className='text-primaryWhite' onClick={() => navigate("/publicaciones")}>publicaciones</Button>        
    </div>
    :
    <div className='min-h-screen w-screen bg-secondaryBlue'>
        <h1 className='text-primaryWhite text-center text-[24px] pt-5'>favoritos</h1>
          <Table aria-label="Example static collection table " className='w-[90%] md:w-[75%] mx-auto pt-10'>
                <TableHeader>
                  <TableColumn>IMAGEN</TableColumn>
                  <TableColumn>AUTO</TableColumn>
                  <TableColumn>PRECIO DIARIO</TableColumn>
                  <TableColumn>ELIMINAR</TableColumn>
                </TableHeader>
                <TableBody>
                {favoritos.map(fav => {
            return(
                <TableRow key={fav.id}>
                    <TableCell><Avatar onClick={()=> navigate(`/publicacion/${fav.id}`)} className='cursor-pointer' size='lg' src={fav.images[0]}></Avatar></TableCell>
                    <TableCell>{fav.marca} {fav.modelo} {fav.anio}</TableCell>
                    <TableCell>{fav.valor}</TableCell>
                    <TableCell>
                    <FaRegTrashAlt className='text-danger text-[24px] cursor-pointer' onClick={()=> eliminar(fav.id)} />
                    </TableCell>
                  
                </TableRow>
            )
        })}
                </TableBody>
              </Table>
              <div className='w-full flex justify-center pt-10'>
              <Button color='warning' className='text-primaryWhite mx-auto' onClick={() => navigate("/publicaciones")}>publicaciones</Button>        

              </div>
    </div>
        
}

    </>
  )
}

export default Favoritos