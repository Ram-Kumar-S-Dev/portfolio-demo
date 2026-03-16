import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import "@fontsource/inter"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


function AnimatedRoutes(){

const location = useLocation()

return(

<AnimatePresence mode="wait">

<Routes location={location} key={location.pathname}>

<Route path="/" element={<Home/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

</AnimatePresence>

)

}


function App(){

return(

<HashRouter>

<Navbar/>

<AnimatedRoutes/>

<Footer/>

</HashRouter>

)

}

export default App