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

  const { state, dispatch } = useContext(GlobalContext);

  const { userIsLogged } = state;

  const { user } = state;

  const navigate = useNavigate();

  const rotate = () => {
    document.querySelector("#hamburger").classList.toggle("rotate-90");
  };

  const logout = () => {
    localStorage.removeItem("Authorization");
    dispatch({ type: "LOGOUT" });
  };

  const menuItems = [
    { name: "Crear cuenta", path: "/register" },
    { name: "Iniciar sesión", path: "/login" },
  ];
  const menuItemsIfIsLogged = [
    { name: "Mis reservas", path: "/user/reservas" },
    { name: "Lista de deseos", path: "/user/favoritos" },
    { name: "Mi cuenta", path: "/user/cuenta" },
    { name: "Cerrar sesión", path: "/" },
  ];

  const navigateAndClose = (url) => {
    navigate(url);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primaryBlue w-screen justify-between h-[100px] max-w-full "
    >
      <NavbarBrand onClick={() => navigate("/")}>
        <img
          src={logo}
          alt="LOGO DE LA PAGINA"
          className="w-[150px] h-[100px] cursor-pointer"
        />
        <p className="text-primaryWhite hidden md:block">RACE-A-CAR</p>
      </NavbarBrand>

      <div className="flex flex justify-end gap-4 w-[50vw] hidden md:flex ">
        {!userIsLogged ? (
          <Dropdown>
            <DropdownTrigger>
              <Avatar size="lg" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="iniciar sesion"
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </DropdownItem>
              <DropdownItem
                key="registro"
                onClick={() => navigate("/register")}
              >
                Crear cuenta
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                size="lg"
                name={user?.nombre
                  .substring(0, 1)
                  .toUpperCase()
                  .concat(user?.apellido.substring(0, 1).toUpperCase())}
                color="warning"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="reservas">Mis reservas</DropdownItem>
              <DropdownItem key="deseos" onClick={() => navigate("/user/favoritos", window.scrollTo({left:0, top:0, behavior:"instant"}))}>Favoritos</DropdownItem>
              <DropdownItem key="cuenta">Mi cuenta</DropdownItem>
              <DropdownItem color="danger" key="logout" onClick={logout}>
                Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden border-radius-[100%] w-[60px]"
        icon={
          userIsLogged ? (
            <Avatar
              size="lg"
              name={user?.nombre
                .substring(0, 1)
                .toUpperCase()
                .concat(user?.apellido.substring(0, 1).toUpperCase())}
              color="warning"
            />
          ) : (
            <Avatar size="lg" />
          )
        }
      />

      <NavbarMenu className="pt-10 bg-primaryWhite">
        {!userIsLogged
          ? menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={
                    index === menuItems.length - 1
                      ? "text-primary"
                      : "text-secondaryBlue"
                  }
                  onClick={() => navigateAndClose(item.path)}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))
          : menuItemsIfIsLogged.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                {item.path == "/" ? (
                  <Link
                    className={
                      index === menuItemsIfIsLogged.length - 1
                        ? "text-danger"
                        : "text-secondaryBlue"
                    }
                    onClick={logout}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    className={
                      index === menuItemsIfIsLogged.length - 1
                        ? "text-danger"
                        : "text-secondaryBlue"
                    }
                    onClick={() => navigateAndClose(item.path)}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                )}
              </NavbarMenuItem>
            ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
