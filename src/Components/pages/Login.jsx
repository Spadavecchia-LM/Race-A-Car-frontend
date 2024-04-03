import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";
import { Spinner } from "@nextui-org/spinner";
import Swal from "sweetalert2";
import { Input } from "@nextui-org/input";


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
      timer: 2000,
      toast:true,
      color:"#032047",
      position:"center"
    });
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLogginIn(true)


    try{
      const response = await fetch(import.meta.env.VITE_BACKENDURL + "/auth/login", {
        method:"POST",
        body: JSON.stringify(user),
        headers:{
          "Content-Type": "application/json"
        }
      })


      if(response.ok){
        const {token} = await response.json()

     
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

  return (
    <div className="flex items-center h-screen flex-1 flex-col justify-start px-6 py-12 lg:px-8 bg-primaryBlue bg-[url('./assets/porscheLogin.jpg')] bg-cover text-primaryWhite">

      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-10" onSubmit={handleSubmit} id="loginForm">
          <div>
            <div>
              <Input
                id="email"
                variant="flat"
                placeholder="Correo electrónico"
                isInvalid={isInvalid}
                name="username"
                type="email"
                autoComplete="email"
                required
                onChange={handleInputOnChange}
                errorMessage={isInvalid && "Credenciales inválidas"}
              />
            </div>
          </div>
    
          <div>
            <div>
              <Input
                id="password"
                variant="flat"
                placeholder="Contraseña"
                isInvalid={isInvalid}
                name="password"
                type="password"
                autoComplete="current-password"
                errorMessage={isInvalid && "Credenciales inválidas"}
                required
                onChange={handleInputOnChange}
              />
            </div>
          </div>
    
            <button
              type="submit"
              size="lg"
              className="flex w-full justify-center rounded-large bg-primaryBlue py-3 text-sm font-semibold leading-6 text-primaryWhite shadow-sm hover:bg-primaryGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLogginIn ? <Spinner /> : "Iniciar sesión"}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
