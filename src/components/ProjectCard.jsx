import { motion } from "framer-motion"

export default function ProjectCard({project}){

return(

<motion.div
whileHover={{scale:1.05}}
className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden"
>

<iframe
width="100%"
height="220"
src={project.video}
title="demo"
allowFullScreen
/>

<div className="p-4">

<h3 className="text-xl font-semibold mb-2">

{project.title}

</h3>

<p className="text-gray-400">

{project.description}

</p>

</div>

</motion.div>

)

}