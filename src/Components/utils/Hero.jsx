import React from 'react'
import heroAuto from "../../assets/heroAuto.png"
const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-start justify-center'>
    
    <h1 className='text-primaryWhite text-center w-[60%] mx-auto  sm:text-[30px] md:text-[40px] lg:text-fsHero '>Descubrí el mundo sobre ruedas con nuestro servicio de renta de autos de lujo</h1>

    <img src={heroAuto} alt="portada de auto" className=' mx-auto object-fill' />

    </div>
    
  )
}

export default Hero