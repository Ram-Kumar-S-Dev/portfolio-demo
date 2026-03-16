import { NavLink } from "react-router-dom"

export default function Navbar(){

const base="px-5 py-2 rounded-md transition"

const active="bg-[#76B900] text-black"

const inactive="text-gray-400 hover:text-white"

return(

<nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">

<h1 className="text-xl font-bold tracking-wide">
RAM KUMAR S
</h1>

<div className="flex gap-4">

<NavLink
to="/"
className={({isActive}) =>
`${base} ${isActive?active:inactive}`
}
>
Home
</NavLink>

<NavLink
to="/projects"
className={({isActive}) =>
`${base} ${isActive?active:inactive}`
}
>
Projects
</NavLink>

<NavLink
to="/contact"
className={({isActive}) =>
`${base} ${isActive?active:inactive}`
}
>
Contact
</NavLink>

</div>

</nav>

)

}