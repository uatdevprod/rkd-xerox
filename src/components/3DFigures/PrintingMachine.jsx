import { Canvas } from "@react-three/fiber";
import MachineMesh from "./MachineMesh";
import FloatingParticles from "./FloatingParticles";

export default function PrintingMachine() {
	return (
		<div className="w-full h-[320px] sm:w-[340px] md:h-[350px] relative z-10">
			{/* Shifted Y from 0 to 1.2 to tilt the view downward */}
			<Canvas camera={{ position: [0, 1.2, 3.5], fov: 50 }}>
				<ambientLight intensity={0.7} />
				<directionalLight position={[5, 10, 5]} intensity={1.5} />
				<FloatingParticles />
				<MachineMesh />
			</Canvas>
		</div>
	);
}
