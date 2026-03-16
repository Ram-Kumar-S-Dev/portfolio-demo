import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {

return (

<div className="p-10 grid md:grid-cols-2 gap-6">

{projects.map((project,index)=>(
<ProjectCard key={index} project={project}/>
))}

</div>

)

}