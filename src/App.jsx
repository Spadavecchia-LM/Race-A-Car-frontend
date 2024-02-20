import { Routes,Route } from "react-router-dom"
import Footer from "./Components/utils/Footer"
import Header from "./Components/utils/Header"
import Home from "./Components/pages/Home"
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
