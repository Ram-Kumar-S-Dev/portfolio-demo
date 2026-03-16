import {
Code,
Cpu,
Box,
Database,
Globe,
Server,
Github,
Scan
} from "lucide-react"

export default function Skills(){

const skills=[
{ name:"Unity", icon:Box },
{ name:"AR Foundation", icon:Cpu },
{ name:"Meta Interaction SDK", icon:Cpu },
{ name:"Nvidia Isaac Sim", icon:Cpu },
{ name:"ROS2", icon:Server },
{ name:"React.js", icon:Globe },
{ name:"C#", icon:Code },
{ name:"JavaScript", icon:Code },
{ name:"Firebase", icon:Database },
{ name:"VR Interaction Framework", icon:Cpu },
{ name:"Github", icon:Github },
{name:"Nuitrack", icon:Scan}
]

return(

<section className="py-24">

<h2 className="text-4xl text-center mb-16 font-bold">

Technology Stack

</h2>

<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">

{skills.map((skill,i)=>{

const Icon=skill.icon

return(

<div
key={i}
className="bg-[#111111] border border-gray-800 p-8 rounded-lg
flex flex-col items-center justify-center text-center
transition duration-300
hover:border-[#76B900]
hover:shadow-[0_0_20px_#76B900]"
>

<Icon size={32} className="mb-4 text-[#76B900]" />

<p className="text-gray-300">

{skill.name}

</p>

</div>

)

})}

</div>

</section>

)

}