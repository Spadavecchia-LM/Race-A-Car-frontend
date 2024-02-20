import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import PublicacionDetailContainer from "./Components/containers/PublicacionDetailContainer"

function App() {

  return (
    <>

  <Header/>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/publicacion/:id" element={<PublicacionDetailContainer/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
