export default function ExperienceHighlights(){

const highlights = [
"Architected modular VR/AR training systems in Unity with reusable task managers, exam workflows and multilingual localization.",
"Integrated voice interaction pipelines using Whisper STT and Azure TTS for AI-driven feedback.",
"Built XR applications for Meta Quest, Pico and AR Foundation with mobile performance optimization.",
"Designed ScriptableObject-based frameworks and reusable prefabs for scalable Unity development.",
"Implemented dynamic model loading and configuration using JSON and API-driven content."
]

return(

<section className="py-20 max-w-5xl mx-auto px-6">

<h2 className="text-3xl font-bold mb-10 text-center">
Professional Highlights
</h2>

<ul className="space-y-5 text-gray-400 text-lg text-left leading-relaxed">

{highlights.map((h,i)=>(
<li key={i} className="flex gap-3">
<span className="text-[#76B900] mt-1">•</span>
<span>{h}</span>
</li>
))}

</ul>

</section>

)
}