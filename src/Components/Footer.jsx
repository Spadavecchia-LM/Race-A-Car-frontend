import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primaryBlue w-full h-[150px] text-primaryWhite">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className='h-[150px]'/>
          <div>&copy;{new Date().getFullYear()} Race-A-Car. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;