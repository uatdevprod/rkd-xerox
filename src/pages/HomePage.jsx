import React, { useRef } from "react";

// Tilt utility handlers
const handleTiltMove = (
	e,
	perspective = 500,
	maxTiltX = 12,
	maxTiltY = 12,
	scale = 1,
	tiltReverse = -6,
) => {
	const card = e.currentTarget;
	const rect = card.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	const centerX = rect.width / 2;
	const centerY = rect.height / 2;
	const rotateX = ((y - centerY) / centerY) * maxTiltY * (tiltReverse / 10);
	const rotateY = ((centerX - x) / centerX) * maxTiltX * (tiltReverse / 10);

	card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale || 1}, ${scale || 1}, 1)`;
	card.style.transition = "transform 0.1s ease-out";
};

const handleTiltLeave = (e) => {
	const card = e.currentTarget;
	card.style.transform =
		"perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
	card.style.transition = "transform 0.5s ease-out";
};

const scrollToSection = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export default function HomePage({ customProducts }) {
	// DOM Elements references for layout systems
	const heroRef = useRef(null);
	const hcanvasRef = useRef(null);

	// Structured Static Datasets
	const stats = [
		{ num: "500+", label: "Happy Clients", borderColor: "border-t-[#00aeef]" },
		{
			num: "15+",
			label: "Years Experience",
			borderColor: "border-t-[#ec008c]",
		},
		{ num: "5", label: "Core Services", borderColor: "border-t-[#0056b3]" },
		{
			num: "99%",
			label: "On-Time Delivery",
			borderColor: "border-t-[#00b050]",
		},
	];

	// Dynamic products list with img properties replacing canvas drawings
	const defaultProducts = [
		{
			name: "Business Cards",
			tag: "Corporate",
			tagC: "bg-[#e6f0fb]",
			tagT: "text-[#003d82]",
			bg: "from-[#e6f0fb] to-[#cce0f5]",
			img: "/business-cards.png",
			alt: "Business Cards Printing",
		},
		{
			name: "Product Packaging",
			tag: "Digital Print",
			tagC: "bg-[#e6f6fd]",
			tagT: "text-[#005f8a]",
			bg: "from-[#e6f6fd] to-[#c5eaf8]",
			img: "/packaging.png",
			alt: "Custom Packaging Boxes",
		},
		{
			name: "Roll-up Standee",
			tag: "Large Format",
			tagC: "bg-[#fde8f4]",
			tagT: "text-[#7a0048]",
			bg: "from-[#fde8f4] to-[#f8c8e8]",
			img: "/rollup-standee.png",
			alt: "Roll-up Standee Banner",
		},
		{
			name: "Brochure / Catalog",
			tag: "Printed Article",
			tagC: "bg-[#e8f5e9]",
			tagT: "text-[#1b5e20]",
			bg: "from-[#e8f5e9] to-[#c8e6c9]",
			img: "/brochure-catalogue.jpg",
			alt: "Printed Brochure and Catalog",
		},
		{
			name: "Custom Mug",
			tag: "Corporate Gift",
			tagC: "bg-[#fff8e1]",
			tagT: "text-[#6d4c00]",
			bg: "from-[#fff8e1] to-[#ffecb3]",
			img: "/custom-mug.png",
			alt: "Custom Branded Mug",
		},
		{
			name: "ID Card & Lanyard",
			tag: "Corporate",
			tagC: "bg-[#e8eaf6]",
			tagT: "text-[#1a237e]",
			bg: "from-[#e8eaf6] to-[#c5cae9]",
			img: "/id-card-lanyard.png",
			alt: "Corporate ID Cards and Lanyard",
		},
		{
			name: "Flex Banner",
			tag: "Large Format",
			tagC: "bg-[#fde8f4]",
			tagT: "text-[#7a0048]",
			bg: "from-[#fce4ec] to-[#f8bbd0]",
			img: "/flex-banner.png",
			alt: "Large Format Flex Banner",
		},
		{
			name: "Letterhead Set",
			tag: "Stationery",
			tagC: "bg-[#f3e5f5]",
			tagT: "text-[#4a148c]",
			bg: "from-[#f3e5f5] to-[#e1bee7]",
			img: "/letterhead-set.png",
			alt: "Corporate Letterhead Set",
		},
	];

	const products = customProducts || defaultProducts;

	return (
		<div className="bg-[#f0f4f8] text-[#1a1a2e] font-sans antialiased overflow-x-hidden selection:bg-[#00aeef] selection:text-white">
			{/* Custom Global Animation Inject Layer */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
        @keyframes pinpulse {
          0%, 100% { box-shadow: 0 0 0 5px rgba(236, 0, 140, 0.2), 0 0 0 10px rgba(236, 0, 140, 0.07); }
          50% { box-shadow: 0 0 0 9px rgba(236, 0, 140, 0.14), 0 0 0 18px rgba(236, 0, 140, 0.04); }
        }
        .animate-pinpulse { animation: pinpulse 2s infinite; }
      `,
				}}
			/>

			{/* Main Hero Section Area */}
			<section
				ref={heroRef}
				id="hero"
				className="min-h-[520px] bg-gradient-to-br from-[#001f4d] via-[#003d82] to-[#0056b3] relative overflow-hidden flex items-center justify-center px-[5%] py-[50px]">
				<canvas
					ref={hcanvasRef}
					className="absolute inset-0 opacity-45 pointer-events-none"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none" />

				<div
					id="heroContent"
					className="relative z-10 flex flex-wrap items-center justify-center gap-[60px] max-w-275 w-full">
					<div className="flex-1 min-w-70">
						<div className="text-[0.72rem] font-bold tracking-[3px] uppercase text-[#00aeef] mb-3.5">
							Premium Printing Solutions
						</div>
						<div className="flex gap-3 mb-7">
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#00aeef] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#ec008c] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#fff200] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#231f20] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
						</div>
						<h1 className="text-3xl sm:text-[2.8rem] font-black text-white leading-[1.1] tracking-[-1px] mb-4 shadow-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
							All Types
							<br />
							<em className="not-italic text-[#00aeef]">Printing Solutions</em>
						</h1>
						<p className="text-white/72 text-[0.98rem] leading-relaxed mb-7 max-w-125">
							High-quality digital printing, corporate branding, large-format
							displays, and design — all under one roof in Mumbai.
						</p>
						<div className="flex flex-wrap gap-3">
							<button
								onClick={() => scrollToSection("services")}
								className="bg-gradient-to-br from-[#00aeef] to-[#0080c0] text-white px-7 py-3 rounded-[50px] text-[0.92rem] font-bold cursor-pointer shadow-[0_8px_24px_rgba(0,174,239,0.4)] hover:-translate-y-0.75 hover:shadow-[0_14_32px_rgba(0,174,239,0.5)] transition-all duration-200">
								Explore Services
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="bg-transparent text-white border-2 border-[#8f8f8f] px-7 py-3 rounded-[50px] text-[0.92rem] font-semibold cursor-pointer hover:bg-white/10 hover:border-white/60 transition-all duration-200">
								Get a Quote
							</button>
						</div>
					</div>
					<div className="w-85 h-80 relative flex items-center justify-center">
						<img
							src="/digital-printer.jpg"
							alt="Digital Printer Preview"
							className="max-h-full max-w-full object-contain filter drop-shadow-2xl rounded-2xl"
						/>
					</div>
				</div>
			</section>

			{/* Floating Metrics Status Row Container */}
			<div className="bg-[#f0f4f8] pb-[52px]">
				<div className="flex flex-wrap justify-center gap-3.5 max-w-[840px] -mt-9 mx-auto relative z-10 px-5">
					{stats.map((st, i) => (
						<div
							key={i}
							className={`bg-white rounded-2xl p-4 px-5.5 text-center flex-1 min-w-[130px] border-t-3 ${st.borderColor} shadow-[0_16px_48px_rgba(0,0,0,0.09),0_3px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(0,0,0,0.13)] transition-all duration-250 cursor-default`}
							onMouseMove={(e) => handleTiltMove(e, 400, 10, 10, 0, -6)}
							onMouseLeave={handleTiltLeave}>
							<div className="text-[1.8rem] font-black text-[#0056b3] leading-none">
								{st.num}
							</div>
							<div className="text-[0.68rem] text-[#999] font-bold uppercase tracking-[0.5px] mt-1">
								{st.label}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Finished Output Products Grid Catalog */}
			<div id="products" className="bg-white py-18">
				<div className="max-w-290 mx-auto px-6">
					<div className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#00aeef] mb-2">
						What we produce
					</div>
					<div className="text-3xl sm:text-[2rem] font-black text-[#0a0e1a] tracking-[-0.5px] mb-2.5">
						Our Products
					</div>
					<div className="text-[#777] text-[0.92rem] leading-[1.75] max-w-110 mb-9">
						Every item crafted with precision, color accuracy, and premium
						materials.
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
						{products.map((prod, idx) => (
							<div
								key={prod.name || idx}
								className="rounded-[20px] overflow-hidden bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] cursor-default preserve-3d border border-[#0056b3]/6 transition-shadow duration-300"
								onMouseMove={(e) => handleTiltMove(e, 500, 12, 12, 0, -6)}
								onMouseLeave={handleTiltLeave}>
								{/* Product Image Box Container */}
								<div
									className={`h-40 relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${prod.bg}`}>
									<img
										src={prod.img || prod.src}
										alt={prod.alt || prod.name}
										className="object-contain max-h-full max-w-full drop-shadow-md transition-transform duration-300 hover:scale-105 p-3"
									/>
								</div>
								<div className="p-4">
									<div
										className={`inline-block text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[20px] mb-2 ${prod.tagC} ${prod.tagT}`}>
										{prod.tag}
									</div>
									<h4 className="text-[0.9rem] font-extrabold text-[#0a0e1a] mb-1">
										{prod.name}
									</h4>
									<p className="text-[0.76rem] text-[#999] leading-relaxed">
										Premium quality print item
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
