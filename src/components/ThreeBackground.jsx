import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Box() {
  return (
    <mesh rotation={[45,45,0]}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  )
}

export default function ThreeBackground(){

  return(

<div className="absolute top-0 left-0 w-full h-full -z-10">

<Canvas>

<ambientLight intensity={0.5} />

<directionalLight position={[2,2,2]} />

<Box/>

<OrbitControls enableZoom={false}/>

</Canvas>

</div>

  )
}