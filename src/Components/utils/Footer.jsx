import React from 'react';
import Logo from '../../assets/logo.png';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsX } from "react-icons/bs";

const Foot = () => {
  return (
    <Footer container className='bg-primaryBlue rounded-none'>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <h1 className='text-primaryWhite'>Race-A-Car</h1>
        </div>
        <div className=" grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="Sobre nosotros" className='text-primaryWhite' />
            <Footer.LinkGroup col>
              <Footer.Link  className='text-primaryWhite'>Historia</Footer.Link>
              <Footer.Link  className='text-primaryWhite'>Servicios</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Redes" className='text-primaryWhite' />
            <Footer.LinkGroup col>
              <Footer.Link className='text-primaryWhite'>Facebook</Footer.Link>
              <Footer.Link className='text-primaryWhite'>Instagram</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Politicas" className='text-primaryWhite' />
            <Footer.LinkGroup col>
              <Footer.Link className='text-primaryWhite'>Politicas de uso</Footer.Link>
              <Footer.Link className='text-primaryWhite'>Politicas de cancelación</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright className='text-primaryWhite' by="Equipo 2 - Certified Tech Developer - PF" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <BsTwitter className='text-primaryWhite' />
          <BsFacebook className='text-primaryWhite'/>
          <BsGithub className='text-primaryWhite'/>
          <BsInstagram className='text-primaryWhite'/>
          <BsLinkedin className='text-primaryWhite'/>
        </div>
      </div>
    </div>
  </Footer>
  );
};

export default Foot;