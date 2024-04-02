import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatasppIcon = () => {
  return (
    <div className='relative bg-primaryBlue pt-20'>
        <a className='fixed bottom-2 right-5 ' href="https://api.whatsapp.com/send/?phone=5491121674504" target='_blank'><FaWhatsapp className='text-[green] text-[40px] hover:text-primaryWhite transition duration-500 ease-in-out hover:scale-125' /></a>
    </div>
  )
}

export default WhatasppIcon