import React, { useContext, useEffect } from "react";
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
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  
} from "@nextui-org/react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GlobalContext } from "../../context/AppContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const {state,dispatch} = useContext(GlobalContext)

  const {userIsLogged} = state

  const navigate = useNavigate();


  const rotate = () => {

    document.querySelector("#hamburger").classList.toggle("rotate-90")
  }

  const menuItems = ["Crear cuenta", "Iniciar sesión"];
  const menuItemsIfIsLogged = ["Mis reservas", "Lista de deseos", "Mi cuenta", "Cerrar sesión"]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-primaryBlue w-screen justify-between h-[100px] max-w-full ">
 

       
        <NavbarBrand onClick={() => navigate("/")}>
        <img
          src={logo}
          alt="LOGO DE LA PAGINA"
          className="w-[150px] h-[100px] cursor-pointer"
        />
        <p className="text-primaryWhite hidden md:block">RACE-A-CAR</p>
      </NavbarBrand>
      

      
     
        <div className="flex flex justify-end gap-4 w-[50vw] hidden md:flex ">
          {!userIsLogged ? 
           <Dropdown>
           <DropdownTrigger>
            <Avatar size="lg"/>
           </DropdownTrigger>
           <DropdownMenu aria-label="Static Actions">
             <DropdownItem key="iniciar sesion" onClick={() => dispatch({type:"LOGIN"})}>Iniciar sesión</DropdownItem>
             <DropdownItem key="registro">Registro</DropdownItem>
           </DropdownMenu>
         </Dropdown>
         :
         <Dropdown>
         <DropdownTrigger>
          <Avatar size="lg" name="A"/>
         </DropdownTrigger>
         <DropdownMenu aria-label="Static Actions">
           <DropdownItem key="reservas">Mis reservas</DropdownItem>
           <DropdownItem key="deseos">Lista de deseos</DropdownItem>
           <DropdownItem key="deseos">Mi cuenta</DropdownItem>
           <DropdownItem color="danger" key="deseos" onClick={() => dispatch({type:"LOGOUT"})}>Cerrar sesión</DropdownItem>


         </DropdownMenu>
       </Dropdown>
        
        }
       

        </div>

       

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
        icon={<GiHamburgerMenu id="hamburger" className="text-primaryWhite" onClick={rotate}/>}
      />
   
    
   

      <NavbarMenu className="pt-10 bg-primaryWhite">

        { !userIsLogged ? 
         menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={index === menuItems.length - 1 ? "text-primary" : "text-secondaryBlue"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))
          :
          menuItemsIfIsLogged.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={index === menuItems.length - 1 ? "text-danger" : "text-secondaryBlue"}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))
        }
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
