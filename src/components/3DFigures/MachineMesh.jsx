import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MachineMesh = () => {
	const meshGroup = useRef();
	const paperRef = useRef();

	useFrame((state) => {
		const time = state.clock.getElapsedTime();

		// Gentle hovering effect for the whole machine
		if (meshGroup.current) {
			meshGroup.current.position.y = Math.sin(time * 2) * 0.12;
			meshGroup.current.rotation.y = Math.sin(time * 1.5) * 0.05;
		}

		// Loop an animation making the paper slide out of the slot
		if (paperRef.current) {
			const printCycle = (time * 0.5) % 1; // Loops from 0 to 1 every 2 seconds
			// Moves forward out of the slot and fades/disappears at the end
			paperRef.current.position.z = 0.35 + printCycle * 0.4;
			paperRef.current.scale.z = 1 - printCycle * 0.3; // slightly shortens as it exits
		}
	});

	return (
		<group ref={meshGroup}>
			{/* 1. MAIN CHASSIS BASE BODY */}
			<mesh position={[0, -0.2, 0]}>
				<boxGeometry args={[2.2, 1.1, 1.2]} />
				<meshStandardMaterial color="#0a5abf" roughness={0.2} metalness={1.3} />
			</mesh>

			{/* 2. TOP SCANNER UNIT */}
			<mesh position={[0, 0.45, -0.05]}>
				<boxGeometry args={[2.2, 0.2, 1.1]} />
				<meshStandardMaterial color="#1a6fd4" roughness={0.4} />
			</mesh>

			{/* Scanner Glass Accent Line */}
			<mesh position={[0, 0.54, -0.05]}>
				<boxGeometry args={[2.0, 0.02, 0.9]} />
				<meshStandardMaterial color="#111111" roughness={0.1} dark={true} />
			</mesh>

			{/* 3. REAR PAPER INPUT TRAY */}
			<group position={[0, 0.6, -0.55]} rotation={[-0.4, 0, 0]}>
				{/* Tray Structure */}
				<mesh>
					<boxGeometry args={[1.6, 0.5, 0.05]} />
					<meshStandardMaterial color="#1a6fd4" />
				</mesh>
				{/* Raw Paper waiting to be printed */}
				<mesh position={[0, 0.05, 0.03]}>
					<boxGeometry args={[1.4, 0.5, 0.2]} />
					<meshStandardMaterial color="#ffffff" roughness={0.5} />
				</mesh>
			</group>
			{/* 4. FRONT CONTROL PANEL & UI */}
			<group position={[0, 0.2, 0.63]}>
				{/* Pushed slightly forward on Z */}
				{/* Angled Panel Base */}
				<mesh rotation={[0.5, 0, 0]}>
					{" "}
					{/* Angled sharper */}
					<boxGeometry args={[1.8, 0.3, 0.05]} />
					<meshStandardMaterial color="#111111" roughness={0.5} />
				</mesh>
				{/* Glowing LED Screen */}
				<mesh position={[-0.3, 0.02, 0.03]} rotation={[0.5, 0, 0]}>
					<boxGeometry args={[0.7, 0.16, 0.02]} />
					<meshStandardMaterial
						color="#00ffff"
						emissive="#00aeef"
						emissiveIntensity={1.2}
					/>
				</mesh>
				{/* Status Button 1 (Green) */}
				<mesh position={[0.3, 0.02, 0.03]} rotation={[0.5, 0, 0]}>
					<boxGeometry args={[0.08, 0.08, 0.02]} />
					<meshStandardMaterial
						color="#39ff14"
						emissive="#39ff14"
						emissiveIntensity={1.2}
					/>
				</mesh>
				{/* Status Button 2 (Red) */}
				<mesh position={[0.45, 0.02, 0.03]} rotation={[0.5, 0, 0]}>
					<boxGeometry args={[0.08, 0.08, 0.02]} />
					<meshStandardMaterial
						color="#ff0033"
						emissive="#ff0033"
						emissiveIntensity={1.2}
					/>
				</mesh>
			</group>
			{/* 5. PRINT OUTPUT SLOT (The Dark Opening Indentation) */}
			<mesh position={[0, -0.15, 0.59]}>
				<boxGeometry args={[1.5, 0.15, 0.05]} />
				<meshStandardMaterial color="#052044" roughness={0.9} />
			</mesh>

			{/* Internal Feed Roller visible inside slot */}
			<mesh position={[0, -0.15, 0.57]} rotation={[0, 0, Math.PI / 2]}>
				<cylinderGeometry args={[0.04, 0.04, 1.4, 8]} />
				<meshStandardMaterial color="#333333" roughness={0.8} />
			</mesh>

			{/* 6. ANIMATED PRINTED PAPER SHEET */}
			{/* Starting position sits inside the slot, useFrame moves it forward */}
			<mesh ref={paperRef} position={[0, -0.14, 0.4]}>
				<boxGeometry args={[1.3, 0.005, 0.5]} />
				<meshStandardMaterial
					color="#ffffff"
					roughness={0.4}
					emissive="#ffffff"
					emissiveIntensity={0.1}
				/>
			</mesh>

			{/* Lower Catch Tray support */}
			<mesh position={[0, -0.23, 0.75]}>
				<boxGeometry args={[1.4, 0.02, 0.4]} />
				<meshStandardMaterial color="#0a5abf" roughness={0.4} />
			</mesh>
		</group>
	);
};

export default MachineMesh;
