import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Spinner } from "@nextui-org/react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();

  const [isSigningUp, setIsSigningUp] = useState(false)

  const [payload, setPayload] = useState({
    nombre:"",
    apellido:"",
    email:"",
    telefono:"",
    documento:"",
    password:""
    })

  const [repetirContraseña, setRepetirContraseña] = useState("")





  
  const handleInputChange = (e) => {
    const {name, value} = e.target

    setPayload({...payload, [name]:value})
  }

  const handleRepetirContraseñaOnChange = (e) => {
    setRepetirContraseña(e.target.value)
  }


  const validateEmail = (value) =>{
   return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  }

  const validateNombre = (value) => {
    return value.match(/^[a-zA-Z]{4,}$/)
  }
  const validateApellido = (value) => {
    return value.match(/^[a-zA-Z]{4,}$/)
  }
  const validateTelefono = (value) => {
    return value.match(/^[1-9][0-9]*$/)
  }
  const validateDocumento = (value) => {
    return value.match(/^[1-9][0-9]*$/)
  }
  const validateContraseña = () => {
    return payload.password === repetirContraseña 
  }


  const emailIsInvalid = !validateEmail(payload.email) && payload.email !== "";
  const nombreIsInvalid = !validateNombre(payload.nombre) && payload.nombre !== ""
  const apellidoIsInvalid = !validateApellido(payload.apellido) && payload.apellido !== ""
  const telefonoIsInvalid = !validateTelefono(payload.telefono) && payload.telefono !== ""
  const documentoIsInvalid = !validateDocumento(payload.documento) && payload.documento !== ""
  const contraseñaIsInvalid = !validateContraseña()


  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSigningUp(true)

    if(!emailIsInvalid && !nombreIsInvalid && !apellidoIsInvalid && !telefonoIsInvalid && !documentoIsInvalid && !contraseñaIsInvalid){
      try{

        const settings = {
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }

        const response = await fetch(import.meta.env.VITE_BACKENDURL + "/auth/register", settings)

        if(response.ok){

          Swal.fire({
            icon:"success",
            title:"Registro exitoso!",
            text:"Te enviamos un mail con tus datos, ya podes iniciar sesión"
          })

          setPayload({
            nombre:"",
            apellido:"",
            email:"",
            telefono:"",
            documento:"",
            password:""
          })

          setRepetirContraseña("")

          document.querySelector("#registerForm").reset()

  

          navigate("/")

          window.scrollTo({left:0, top:0, behavior:"instant"})
        }

      }catch(err){
        console.log(err)
      }
      finally{
        setIsSigningUp(false)
      }
    }else{
      alert("revise los campos y vuelta a intentarlo")
      setIsSigningUp(false)
    }

  };




  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center min-h-screen w-full pt-5 flex-col bg-[url('./assets/porscheRegister.jpg')] bg-cover">
   
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full w-full max-w-screen mx-auto"
        id="registerForm"
      >
        <div>
          <Input
            size="lg"
            type="text"
            label="Nombre"
            labelPlacement="outside"
            id="firstName"
            required
            className="border-none sm:w-full text-secondaryBlue"
            style={{ width: '100%' }}
            onChange={handleInputChange}
            variant="flat"
            name="nombre"
            isInvalid={nombreIsInvalid}
            color={nombreIsInvalid ? "danger" : "primary"}
            errorMessage={
              nombreIsInvalid && "minimo 4 caracteres y solo letras"
            }
          />
        </div>
        <div>
          <Input
            label="Apellido"
            size="lg"
            type="text"
            id="lastName"
            labelPlacement="outside"
            name="apellido"
            onChange={handleInputChange}
            required
            className="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-transparent"
            variant="flat"
            isInvalid={apellidoIsInvalid}
            color={apellidoIsInvalid ? "danger" : "primary"}
            errorMessage={
              nombreIsInvalid && "minimo 4 caracteres y solo letras"
            }
          />
        </div>
        <div>
          <Input
            size="lg"
            label="Correo electrónico"
            type="email"
            labelPlacement="outside"
            name="email"
            isInvalid={emailIsInvalid}
            color={emailIsInvalid ? "danger" : "primary"}
            errorMessage={
              emailIsInvalid &&
              "Por favor, ingrese un correo electrónico válido"
            }
            onChange={handleInputChange}
            required
            className="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-transparent"
            variant="flat"
          />
        </div>
        <div>
          <Input
            size="lg"
            label="Teléfono"
            type="text"
            labelPlacement="outside"
            name="telefono"
            id="telefono"
            required
            className="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-transparent"
            onChange={handleInputChange}
            isInvalid={telefonoIsInvalid}
            color={telefonoIsInvalid ? "danger" : "primary"}
            variant="flat"
            errorMessage={
              telefonoIsInvalid && "no puede empezar con 0 y solo numeros"
            }
          />
        </div>
        <div>
          <Input
            size="lg"
            name="documento"
            label="Documento"
            labelPlacement="outside"
            type="text"
            id="documento"
            required
            className="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-transparent"
            onChange={handleInputChange}
            isInvalid={documentoIsInvalid}
            color={documentoIsInvalid ? "danger" : "primary"}
            variant="flat"
            errorMessage={
              documentoIsInvalid && "no puede empezar con 0 y solo numeros"
            }
          />
        </div>
        <div>
          <Input
            size="lg"
            label="Contraseña"
            labelPlacement="outside"
            id="password"
            onChange={handleInputChange}
            name="password"
            isInvalid={contraseñaIsInvalid}
            color={contraseñaIsInvalid ? "danger" : "primary"}
            errorMessage={
              contraseñaIsInvalid && "las contraseña no coinciden"
            }
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            required
            className="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-transparent text-primaryBlue"
            variant="flat"
          />
        </div>
        <div>
          <Input
            size="lg"
            label="Confirmar contraseña"
            id="confirmarContraseña"
            labelPlacement="outside"
            onChange={handleRepetirContraseñaOnChange}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <BsEyeFill className="text-2xl text-default-400 pointer-events-none " />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            required
            className="sm:mx-auto sm:w-full sm:max-w-sm"
            variant="flat"
            isInvalid={contraseñaIsInvalid}
            color={contraseñaIsInvalid ? "danger" : "primary"}
            errorMessage={
              contraseñaIsInvalid && "las contraseña no coinciden"
            }
          />
        </div>
        <div className="mt-4">
          <Button
            type="submit"
            size="lg"
            className="flex w-full justify-center rounded-large bg-primaryBlue px-3 py-1.5 text-sm font-semibold leading-6 text-primaryWhite shadow-sm hover:bg-primaryGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSigningUp ? <Spinner /> : "Registrarse"}
          </Button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;
