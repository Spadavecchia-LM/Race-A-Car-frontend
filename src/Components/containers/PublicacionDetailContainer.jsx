import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PublicacionDetal from '../pages/PublicacionDetal'
import {publicaciones} from "../../js/data.js"
import { FaArrowLeft } from "react-icons/fa6";
import { GlobalContext } from '../../context/AppContext.jsx';
import { CiShare2 } from "react-icons/ci";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
  Snippet,
  Link,

} from "@nextui-org/react";
import Toastify from 'toastify-js'

const PublicacionDetailContainer = () => {

  const {state} = useContext(GlobalContext)

  const {autos} = state

    const {id} = useParams()
    const navigate = useNavigate()
    
    const publicacionFiltrada = autos.find(pub => pub.id == id)

    const enlace = window.location.href; // Aquí deberías tener tu enlace

    const copiarEnlace =  () => {
   
        navigator.clipboard.writeText(enlace);
        displayToast()
  
    };

    const mensajeRedes = `¡Mira este auto que encontre en Race-A-car! ${publicacionFiltrada.marca} ${publicacionFiltrada.modelo} ${publicacionFiltrada.anio} a tan solo ${publicacionFiltrada.valor} dolares al dia. Aqui te dejo el enlace: ${enlace}
    `
    const compartirMensaje = () => {
        navigator.clipboard.writeText(mensajeRedes)
        displayToast()
    }

    const mensajeFormatedado = mensajeRedes.replace(/ /g, "%20")

    const displayToast = () => {
      Toastify({
        text: "enlace copiado en el portapapeles",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
  
    }
   
  return (
    <div className='w-[100vw] bg-secondaryBlue'>
        <div className='w-[90%] mx-auto flex justify-start gap-5 h-[40px] pt-5 items-center '>
          <FaArrowLeft className='text-[40px] cursor-pointer text-primaryWhite' onClick={() => navigate("/publicaciones")} />
          <Dropdown>
            <DropdownTrigger>
              <Button className='border-none bg-transparent'>
                <CiShare2 className='text-[40px] cursor-pointer text-primaryWhite' />
                </Button>
            </DropdownTrigger>
            <DropdownMenu  aria-label='static actions'>
              <DropdownItem className='text-[14px]' textValue='copy' key="copy link" onClick={() => copiarEnlace()}>
                copiar enlace 
                </DropdownItem>
              <DropdownItem textValue='wpp' key="wpp"><Link className='text-[#fffff] text-[14px]' href={`https://wa.me/?text=${mensajeFormatedado}`} target='_blank'>compartir por whatsapp</Link></DropdownItem>
              <DropdownItem textValue='instagram'  key="instagram"><Link onClick={()=> compartirMensaje()} className='text-[#fffff] text-[14px]' href={`https://www.instagram.com/direct/inbox`} target='_blank'>compartir por instagram</Link></DropdownItem>
              <DropdownItem textValue='twitter'  key="twitter"><Link onClick={()=> compartirMensaje()} className='text-[#fffff] text-[14px]' href={`https://twitter.com/messages/compose?recipient_id=USER_ID`} target='_blank'>compartir por twitter</Link></DropdownItem>

            </DropdownMenu>


            
          </Dropdown>

          </div>
        <PublicacionDetal publicacion={publicacionFiltrada}/>
    </div>
  )
}

export default PublicacionDetailContainer