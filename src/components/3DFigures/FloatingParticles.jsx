import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const PILL_COLORS = ["#00ffff", "#39ff14", "#ffaa00", "#ff3366"];

const generatePillData = (count) => {
	return Array.from({ length: count }, () => ({
		position: [
			(Math.random() - 0.5) * 8,
			(Math.random() - 0.5) * 6,
			(Math.random() - 0.5) * 4,
		],
		rotation: [
			Math.random() * Math.PI,
			Math.random() * Math.PI,
			Math.random() * Math.PI,
		],
		colorIndex: Math.floor(Math.random() * PILL_COLORS.length),
		speed: 0.3 + Math.random() * 0.5,
		phase: Math.random() * Math.PI * 2,
	}));
};

function PillMesh({ color }) {
	return (
		<group>
			<mesh position={[0, 0.15, 0]}>
				<sphereGeometry args={[0.08, 8, 8]} />
				<meshStandardMaterial
					color={color}
					emissive={color}
					emissiveIntensity={0.3}
					roughness={0.3}
					metalness={0.1}
				/>
			</mesh>
			<mesh>
				<cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
				<meshStandardMaterial
					color={color}
					emissive={color}
					emissiveIntensity={0.3}
					roughness={0.3}
					metalness={0.1}
				/>
			</mesh>
			<mesh position={[0, -0.15, 0]}>
				<sphereGeometry args={[0.08, 8, 8]} />
				<meshStandardMaterial
					color={color}
					emissive={color}
					emissiveIntensity={0.3}
					roughness={0.3}
					metalness={0.1}
				/>
			</mesh>
		</group>
	);
}

function FloatingParticles({ count = 40, colors = PILL_COLORS }) {
	const groupRef = useRef();
	const pillRefs = useRef([]);

	const pillData = useMemo(() => generatePillData(count), [count]);

	useFrame((state) => {
		const t = state.clock.getElapsedTime();

		if (groupRef.current) {
			groupRef.current.rotation.y = t * 0.04;
		}

		pillRefs.current.forEach((ref, i) => {
			if (!ref) return;
			const { speed, phase, rotation } = pillData[i];
			ref.rotation.x = rotation[0] + t * speed;
			ref.rotation.z = rotation[2] + t * speed * 0.7;
			ref.position.y =
				pillData[i].position[1] + Math.sin(t * speed + phase) * 0.3;
		});
	});

	return (
		<group ref={groupRef}>
			{pillData.map((pill, i) => (
				<group
					key={i}
					ref={(el) => (pillRefs.current[i] = el)}
					position={pill.position}
					rotation={pill.rotation}>
					<PillMesh color={colors[pill.colorIndex]} />
				</group>
			))}
		</group>
	);
}

export default FloatingParticles 	;
