import React from 'react';
import Logo from './utils/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primaryBlue w-full fixed bottom-0 text-primaryWhite">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo"/>
          <div>&copy;{new Date().getFullYear()} Race-A-Car. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;