import React from 'react';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primaryBlue w-screen h-[100px] text-primaryWhite">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className='h-[100px]'/>
          <div>&copy;{new Date().getFullYear()} Race-A-Car. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;