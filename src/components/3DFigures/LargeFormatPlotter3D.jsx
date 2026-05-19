import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function PlotterMesh() {
	const carriageRef = useRef();
	const groupRef = useRef();

	// Ink cartridge colors array extracted exactly from your 2D canvas array
	const inkColors = [
		"#00aeef",
		"#ec008c",
		"#fff200",
		"#231f20",
		"#0f9d58",
		"#e53935",
	];

	// Paper print bands array extracted exactly from your 2D canvas layout
	const printBands = ["#00aeef", "#ec008c", "#fff200", "#333"];

	useFrame((state) => {
		const time = state.clock.getElapsedTime();

		// 1. Interactive idle floating/bobbing animation for the whole machine
		groupRef.current.position.y = Math.sin(time * 1.2) * 0.05;

		// 2. Automated animation loop moving the blue print carriage back and forth along the rail
		if (carriageRef.current) {
			carriageRef.current.position.x = Math.sin(time * 2.5) * 1.1;
		}
	});

	return (
		<group ref={groupRef} position={[0, 0.2, 0]}>
			{/* ================= LEG STAND ASSEMBLY (#555 & #263238) ================= */}
			{/* Left Stand Leg */}
			<mesh position={[-1.1, -0.8, 0]}>
				<boxGeometry args={[0.08, 1.1, 0.08]} />
				<meshStandardMaterial color="#555555" roughness={0.5} />
			</mesh>
			{/* Left Foot Base Wheel Component */}
			<mesh position={[-1.1, -1.35, 0]}>
				<boxGeometry args={[0.35, 0.12, 0.16]} />
				<meshStandardMaterial color="#263238" roughness={0.7} />
			</mesh>

			{/* Right Stand Leg */}
			<mesh position={[1.1, -0.8, 0]}>
				<boxGeometry args={[0.08, 1.1, 0.08]} />
				<meshStandardMaterial color="#555555" roughness={0.5} />
			</mesh>
			{/* Right Foot Base Wheel Component */}
			<mesh position={[1.1, -1.35, 0]}>
				<boxGeometry args={[0.35, 0.12, 0.16]} />
				<meshStandardMaterial color="#263238" roughness={0.7} />
			</mesh>

			{/* ================= MAIN CHASSIS BODY COMPONENTS ================= */}
			{/* Lower Main Chassis Body Box (#37474f) */}
			<mesh position={[0, -0.15, 0]}>
				<boxGeometry args={[2.8, 0.5, 0.6]} />
				<meshStandardMaterial color="#37474f" roughness={0.4} metalness={0.2} />
			</mesh>

			{/* Top Cover Deck Housing Box (#455a64) */}
			<mesh position={[0, 0.2, -0.05]}>
				<boxGeometry args={[2.8, 0.25, 0.5]} />
				<meshStandardMaterial color="#455a64" roughness={0.4} />
			</mesh>

			{/* ================= INK CARTRIDGE MATRIX OVERLAYS ================= */}
			<group position={[-1.1, 0.2, 0.21]}>
				{inkColors.map((color, i) => (
					<mesh key={i} position={[i * 0.14, 0, 0]}>
						<boxGeometry args={[0.1, 0.15, 0.05]} />
						<meshStandardMaterial color={color} roughness={0.3} />
					</mesh>
				))}
			</group>

			{/* ================= PRINT GUIDE RAIL & DYNAMIC PRINT CARRIAGE ================= */}
			{/* Horizontal Slider Rail Base (#90a4ae) */}
			<mesh position={[0, -0.05, 0.31]}>
				<boxGeometry args={[2.6, 0.06, 0.02]} />
				<meshStandardMaterial color="#90a4ae" metalness={0.6} roughness={0.2} />
			</mesh>

			{/* Animated Blue Print Carriage Box Unit (#0056b3) */}
			<mesh ref={carriageRef} position={[0, -0.05, 0.33]}>
				<boxGeometry args={[0.35, 0.18, 0.04]} />
				<meshStandardMaterial color="#0056b3" roughness={0.2} metalness={0.3} />
			</mesh>

			{/* ================= OUTPUT SHEET PLANE COMPONENTS ================= */}
			{/* Pure White Hanging Output Canvas Plane Component */}
			<mesh position={[0, -0.55, 0.305]}>
				<planeGeometry args={[2.2, 0.52]} />
				<meshStandardMaterial color="#ffffff" roughness={0.9} side={2} />
			</mesh>

			{/* CMYK Progress Printed Stripes Bands Row */}
			<group position={[-0.825, -0.35, 0.31]}>
				{printBands.map((color, i) => (
					<mesh key={i} position={[i * 0.55, 0, 0]}>
						<planeGeometry args={[0.52, 0.08]} />
						<meshBasicMaterial color={color} side={2} />
					</mesh>
				))}
			</group>

			{/* ================= GROUND SURFACE RADIAL SHADOW MESH ================= */}
			<mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[3.4, 1.2]} />
				<meshStandardMaterial
					color="#0a0e1a"
					transparent
					opacity={0.35}
					roughness={1}
				/>
			</mesh>
		</group>
	);
}

export default function LargeFormatPlotter3D() {
	return (
		<div className="w-full h-[200px] md:h-[200px] bg-transparent flex items-center justify-center">
			<Canvas
				camera={{ position: [0, 0, 3.2], fov: 45 }}
				gl={{ antialias: true }}>
				{/* Balanced Presentation Studio Lighting config */}
				<ambientLight intensity={0.7} />
				<directionalLight position={[10, 15, 8]} intensity={1.4} />
				<pointLight position={[-8, 5, -5]} intensity={0.4} />

				{/* Render 3D Plotter Rig Asset */}
				<PlotterMesh />
			</Canvas>
		</div>
	);
}
