import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();


  const rotate = () => {

    document.querySelector("#hamburger").classList.toggle("rotate-90")
  }

  const menuItems = ["Crear cuenta", "Iniciar sesión"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-primaryBlue w-screen justify-between h-[100px] max-w-full ">
 

       
        <NavbarBrand>
        <img
          src={logo}
          alt="LOGO DE LA PAGINA"
          className="w-[150px] h-[100px]"
        />
        <p className="text-primaryWhite ">RACE-A-CAR</p>
      </NavbarBrand>
      

      
     
        <div className="flex flex justify-end gap-4 w-[50vw] hidden md:flex ">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="ghost"
            className="text-primaryWhite"
          >
            Crear cuenta
          </Button>
          <Button
            as={Link}
            color="primary"
            href="#"
            className="text-primaryWhite"
            variant="ghost"
          >
            Iniciar sesión
          </Button>
        </div>

       

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
        icon={<GiHamburgerMenu id="hamburger" className="text-primaryWhite" onClick={rotate}/>}
      />
   
    
   

      <NavbarMenu className="pt-10 bg-primaryWhite">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={index === menuItems.length - 1 ? "text-primary" : "text-secondaryBlue"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
