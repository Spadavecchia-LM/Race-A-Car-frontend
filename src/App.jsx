import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"

function App() {

  return (
    <>

  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  
  </Routes>
  <Footer/>
    </>
  )
}

export default App
