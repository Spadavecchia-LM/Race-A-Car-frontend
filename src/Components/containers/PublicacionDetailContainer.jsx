import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PublicacionDetal from '../pages/PublicacionDetal'
import {publicaciones} from "../../js/data.js"
import { FaArrowLeft } from "react-icons/fa6";

const PublicacionDetailContainer = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const publicacionFiltrada = publicaciones.find(pub => pub.id == id)

  return (
    <div className='w-[90%] mx-auto'>
        <div className='w-full flex justify-start h-[40px] items-center pl-4 sticky top-0'><FaArrowLeft className='text-[24px] cursor-pointer' onClick={() => navigate("/")} /></div>
        <PublicacionDetal publicacion={publicacionFiltrada}/>
    </div>
  )
}

export default PublicacionDetailContainer