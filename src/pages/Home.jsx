import ExperienceHighlights from "../components/ExperienceHighlights"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ThreeBackground from "../components/ThreeBackground"
import { motion } from "framer-motion"

export default function Home(){

return(

<motion.div
initial={{ opacity:0 }}
animate={{ opacity:1 }}
exit={{ opacity:0 }}
transition={{ duration:0.3 }}
>

<Hero/>
<ExperienceHighlights />
<Skills/>

</motion.div>

)

}