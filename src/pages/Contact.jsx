import { Mail, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact(){

return(

<motion.div
initial={{ opacity:0, x:40 }}
animate={{ opacity:1, x:0 }}
exit={{ opacity:0, x:-40 }}
transition={{ duration:0.3 }}
>

<section className="py-20 text-center">

<h2 className="text-4xl font-bold mb-10">

Contact

</h2>

<div className="flex flex-col items-center gap-6">

<a
href="mailto:yourmail@gmail.com"
className="flex items-center gap-3 bg-[#111111] border border-gray-800 px-6 py-4 rounded-md hover:border-[#76B900]"
>

<Mail/>

srkmn07@gmail.com

</a>

<a
href="https://www.linkedin.com/in/ram-kumar-s-b4b9391b4"
className="flex items-center gap-3 bg-[#111111] border border-gray-800 px-6 py-4 rounded-md hover:border-[#76B900]"
>

<Linkedin/>

LinkedIn

</a>

</div>

</section>

</motion.div>
)

}