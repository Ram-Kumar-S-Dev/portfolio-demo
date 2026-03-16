import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar(){

const [open,setOpen] = useState(false)
const navigate = useNavigate()

const base="px-5 py-2 rounded-md transition"
const active="bg-[#76B900] text-black"
const inactive="text-gray-400 hover:text-white"

const handleNavigate = (path) => {

setOpen(false)   // close menu first

setTimeout(()=>{

navigate(path)   // navigate after animation

},200)

}

return(

<nav className="border-b border-gray-800">

<div className="flex justify-between items-center px-6 md:px-10 py-4">

<h1 className="text-lg md:text-xl font-bold tracking-wide">
RAM KUMAR S
</h1>

{/* Desktop Menu */}

<div className="hidden md:flex gap-4">

<NavLink to="/" className={({isActive}) =>
`${base} ${isActive?active:inactive}`
}>Home</NavLink>

<NavLink to="/projects" className={({isActive}) =>
`${base} ${isActive?active:inactive}`
}>Projects</NavLink>

<NavLink to="/contact" className={({isActive}) =>
`${base} ${isActive?active:inactive}`
}>Contact</NavLink>

</div>

{/* Mobile Button */}

<button
className="md:hidden text-white"
onClick={()=>setOpen(!open)}
>
{open ? <X size={28}/> : <Menu size={28}/>}
</button>

</div>

{/* Mobile Menu */}

<AnimatePresence>

{open && (

<motion.div
initial={{opacity:0, y:-20}}
animate={{opacity:1, y:0}}
exit={{opacity:0, y:-20}}
transition={{duration:0.25}}
className="md:hidden flex flex-col items-center gap-4 pb-6"
>

<button
onClick={()=>handleNavigate("/")}
className={`${base} ${inactive}`}
>
Home
</button>

<button
onClick={()=>handleNavigate("/projects")}
className={`${base} ${inactive}`}
>
Projects
</button>

<button
onClick={()=>handleNavigate("/contact")}
className={`${base} ${inactive}`}
>
Contact
</button>

</motion.div>

)}

</AnimatePresence>

</nav>

)

}