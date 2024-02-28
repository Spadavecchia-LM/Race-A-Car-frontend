import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    navigate("/");
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [value, setValue] = useState("");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = !validateEmail(value) && value !== "";

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-start px-6 py-12 lg:px-8 bg-secondaryBlue text-primaryWhite">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primaryWhite">
          RACE-A-CAR
        </h2>
        <p className="text-center">Registro</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName">Nombre</label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              class="border-none sm:w-full bg-primaryWhite"
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellido</label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              class="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-primaryWhite"
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <Input
              type="email"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={
                isInvalid && "Por favor, ingrese un correo electrónico válido"
              }
              onValueChange={setValue}
              required
              class="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-primaryWhite"
              />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              required
              class="border-none sm:mx-auto sm:w-full sm:max-w-sm bg-primaryWhite"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primaryBlue px-3 py-1.5 text-sm font-semibold leading-6 text-primaryWhite shadow-sm hover:bg-secondaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
