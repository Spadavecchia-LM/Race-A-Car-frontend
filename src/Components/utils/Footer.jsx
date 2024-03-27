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
            <Footer.Title title="about" className='text-primaryWhite' />
            <Footer.LinkGroup col>
              <Footer.Link  className='text-primaryWhite'>Flowbite</Footer.Link>
              <Footer.Link  className='text-primaryWhite'>Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" className='text-primaryWhite' />
            <Footer.LinkGroup col>
              <Footer.Link className='text-primaryWhite'>Github</Footer.Link>
              <Footer.Link className='text-primaryWhite'>Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className='text-primaryWhite' />
            <Footer.LinkGroup col>
              <Footer.Link className='text-primaryWhite'>Privacy Policy</Footer.Link>
              <Footer.Link className='text-primaryWhite'>Terms &amp; Conditions</Footer.Link>
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