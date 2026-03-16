import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"

export default function Projects() {

return (

<motion.div
initial={{ opacity:0, x:40 }}
animate={{ opacity:1, x:0 }}
exit={{ opacity:0, x:-40 }}
transition={{ duration:0.3 }}
>

<div className="p-10 grid md:grid-cols-2 gap-6">

{projects.map((project,index)=>(
<ProjectCard key={index} project={project}/>
))}

</div>

</motion.div>
)

}