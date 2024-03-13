import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PublicacionDetal from '../pages/PublicacionDetal'
import {publicaciones} from "../../js/data.js"
import { FaArrowLeft } from "react-icons/fa6";
import { GlobalContext } from '../../context/AppContext.jsx';

const PublicacionDetailContainer = () => {

  const {state} = useContext(GlobalContext)

  const {autos} = state

    const {id} = useParams()
    const navigate = useNavigate()
    
    const publicacionFiltrada = autos.find(pub => pub.id == id)

  return (
    <div className='w-[100vw] bg-secondaryBlue'>
        <div className='w-[90%] mx-auto flex justify-start h-[40px] items-center '><FaArrowLeft className='text-[40px] cursor-pointer text-primaryWhite' onClick={() => navigate("/")} /></div>
        <PublicacionDetal publicacion={publicacionFiltrada}/>
    </div>
  )
}

export default PublicacionDetailContainer