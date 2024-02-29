import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";
import { Spinner } from "@nextui-org/spinner";
import Swal from "sweetalert2";
import { Input } from "@nextui-org/input";

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const {state, dispatch} = useContext(GlobalContext)

  const [user, setUser] = useState({
    username:"",
    password:""
  })

  const [isLogginIn, setIsLogginIn] = useState(false)

  const [isInvalid, setIsInvalid] = useState(false)

  const handleInputOnChange = (e) => {
    const {name, value} = e.target

    setUser({...user, [name]:value})
  }

  const displayAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Iniciaste sesión correctamente",
      showConfirmButton: true,
      timer: 3000
    });
    navigate("/")
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLogginIn(true)


    try{
      const response = await fetch("http://localhost:8085/auth/login", {
        method:"POST",
        body: JSON.stringify(user),
        headers:{
          "Content-Type": "application/json"
        }
      })


      if(response.ok){
        const {token} = await response.json()

        console.log(token)
        localStorage.setItem("Authorization", token)
        //setea userIsLogged a true
        dispatch({type:"LOGIN"})

        //guarda el mail del usuario en el context para poder hacer peticiones
        dispatch({type:"SET_USER_EMAIL", payload: user.username})

        document.querySelector("#loginForm").reset()

        setUser({
          username:"",
          password:""
        })
        displayAlert()
        
      }else{
        Swal.fire({
          icon:"error",
          title:"credenciales invalidas intente nuevamente",
          showConfirmButton:true
        })
        setIsInvalid(true)
      }

    }catch(err){
      console.log(err)
    }finally{
      setIsLogginIn(false)
    }
  }


    const navigate = useNavigate()


  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-secondaryBlue text-primaryWhite">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primaryWhite">
        RACE-A-CAR
      </h2>
      <p className='text-center'>Panel de administración</p>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-primaryWhite">
            correo electrónico
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="username"
              type="email"
              autoComplete="email"
              required
              className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primaryGreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-primaryWhite">
              contraseña
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primaryGreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={() => navigate("/dashboard")}
            className="flex w-full justify-center rounded-md bg-primaryBlue px-3 py-1.5 text-sm font-semibold leading-6 text-primaryWhite shadow-sm hover:bg-secondaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {"Iniciar sesión"}
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
    <div className="flex min-h-screen flex-1 flex-col justify-start px-6 py-12 lg:px-8 bg-secondaryBlue text-primaryWhite">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primaryWhite">
          RACE-A-CAR
        </h2>
        <p className="text-center">Inicio de sesión</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} id="loginForm">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-primaryWhite"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <Input
                id="email"
                variant="flat"
                isInvalid={isInvalid}
                name="username"
                type="email"
                autoComplete="email"
                required
                onChange={handleInputOnChange}
                errorMessage={isInvalid && "credenciales invalidas"}

              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-primaryWhite"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <Input
                id="password"
                variant="flat"
                isInvalid={isInvalid}
                name="password"
                type="password"
                autoComplete="current-password"
                errorMessage={isInvalid && "credenciales invalidas"}
                required
                onChange={handleInputOnChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primaryBlue px-3 py-1.5 text-sm hover:bg-primaryGold font-semibold leading-6 text-primaryWhite shadow-sm hover:bg-secondaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLogginIn ? <Spinner/> : "Iniciar sesíon"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
