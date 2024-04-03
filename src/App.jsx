import { Routes,Route } from "react-router-dom"

import Header from "./Components/utils/Header"
import Home from "./Components/pages/Home"
import PublicacionDetailContainer from "./Components/containers/PublicacionDetailContainer"
import Publicaciones from "./Components/pages/Publicaciones"
import Login from "./Components/pages/Login"
import Register from "./Components/pages/Register"
import { useContext } from "react"
import { GlobalContext } from "./context/AppContext"
import { Spinner } from "@nextui-org/react"
import PublicacionesEntreFechas from "./Components/pages/PublicacionesEntreFechas"
import Favoritos from "./Components/pages/Favoritos"
import MiCuenta from "./Components/pages/MiCuenta"
import Foot from "./Components/utils/Footer"
import ReservaSeleccionada from "./Components/pages/ReservaSeleccionada";
import MisReservas from "./Components/pages/MisReservas";
import DetalleReserva from "./Components/pages/DetalleReserva";
import WhatasppIcon from "./Components/utils/WhatasppIcon"
import PagarReserva from "./Components/pages/PagarReserva"



function App() {

  const {state} = useContext(GlobalContext)

  const {autos} = state

  return (
    <>
  {autos.length > 0 ? 
  <>
   <Header/>
   <Routes>
       <Route path="/" element= {<Home/>}/>
       <Route path="/publicacion/:id" element={<PublicacionDetailContainer/>}/>
       <Route path="/publicaciones" element={<Publicaciones/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/publicaciones/porfecha" element={<PublicacionesEntreFechas/>}/>
       <Route path="/user/favoritos" element={<Favoritos/>} />
       <Route path="/user/miCuenta" element={<MiCuenta/>}/>
       <Route path="/ReservaSeleccionada/:id" element={<ReservaSeleccionada />} />
       <Route path="/user/misreservas" element={<MisReservas />} />
       <Route path="/checkout" element={<PagarReserva/>}/>
       <Route path="/reserva/checkout" element={<DetalleReserva/>}/>
   </Routes>
   <Foot/>
   <WhatasppIcon/>
   </>
   :
   <div className="h-screen w-screen grid place-items-center">
     <Spinner label="cargando..." />
   </div>
}
 
    </>
  )
}

export default App
