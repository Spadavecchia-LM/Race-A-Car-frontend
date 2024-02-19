import React from 'react'
import heroAuto from "../../assets/heroAuto.png"
const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-start justify-center '>
    
    <h1 className='text-primaryWhite text-fsHero text-center w-[90%] mx-auto'>Descubrí el mundo sobre ruedas con nuestro servicio de renta de autos de lujo</h1>

    <img src={heroAuto} alt="portada de auto" className=' mx-auto object-fill' />

    </div>
    
  )
}

export default Hero