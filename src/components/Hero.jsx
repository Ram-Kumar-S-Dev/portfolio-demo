import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold mb-6"
>

Unity Developer

</motion.h1>

<p className="text-gray-400 max-w-3xl text-lg leading-relaxed">

Unity Developer with <span className="text-[#76B900] font-semibold">5+ years of experience </span>
 developing AR/VR training applications using Unity and C# across mobile and cross-platform devices such as Meta Quest, Pico.

</p>
<br />
<p className="text-gray-400 max-w-3xl text-lg leading-relaxed">

Experience building robotics simulation and digital twin environments
using NVIDIA Isaac Sim and ROS2, along with modern web applications using React.js.

</p>

</section>

)

}