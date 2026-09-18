import { handleTiltLeave, handleTiltMove } from "../utils/Utils";

const Service = () => {
	const services = [
		{
			num: "01",
			icon: "🖨️",
			title: "Digital Printing",
			text: "Packaging, pharma boxes, cartons, fast-turnaround marketing materials.",
		},
		{
			num: "02",
			icon: "🎁",
			title: "Corporate Items",
			text: "ID cards, lanyards, custom mugs, and branded promotional desk items.",
		},
		{
			num: "03",
			icon: "📄",
			title: "Printed Articles",
			text: "Brochures, catalogs, flyers, letterheads, envelopes, stationery sets.",
		},
		{
			num: "04",
			icon: "🖼️",
			title: "Standees & Banners",
			text: "Roll-up standees, danglers, cubes, large-format advertising displays.",
		},
		{
			num: "05",
			icon: "📋",
			title: "Copying & B/W",
			text: "High-volume black & white and color copying with heavy-duty machines.",
		},
	];
	const machinery = [
		{
			id: "mc1",
			badge: "Digital",
			badgeBg: "bg-[#e6f6fd]",
			badgeTextColor: "text-[#006fa3]",
			name: "Digital Offset Printer",
			src: "/canon-machine.png",
			alt: "Canon Digital Offset Printer",
			description:
				"High-speed CMYK digital offset machine for vibrant, precise color reproduction on all paper stocks.",
		},
		{
			id: "mc2",
			badge: "Production",
			badgeBg: "bg-[#fde8f4]",
			badgeTextColor: "text-[#8c0050]",
			name: "Digital Production System",
			src: "/digital-printer.jpg",
			alt: "Digital Production Printer",
			description:
				"Heavy-duty digital printer designed for continuous high-speed, high-resolution production runs.",
		},
		{
			id: "mc3",
			badge: "Precision",
			badgeBg: "bg-[#e6f0fb]",
			badgeTextColor: "text-[#003d82]",
			name: "Flatbed Die Cutter",
			src: "/vulcan-flatbed-die-cutter.jpg",
			alt: "Vulcan Flatbed Die Cutter",
			description:
				"Precision digital flatbed cutting plotter for custom shapes, packaging, labels, and heavy card stocks.",
		},
	];

	return (
		<>
			{/* Capabilities Services Area Grid */}
			<div
				id="services"
				className="bg-gradient-to-b from-[#f0f4f8] to-[#e6edf5] py-[72px]">
				<div className="max-w-[1160px] mx-auto px-6">
					<div className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#00aeef] mb-2">
						What we offer
					</div>
					<div className="text-3xl sm:text-[2rem] font-black text-[#0a0e1a] tracking-[-0.5px] mb-2.5">
						Our Services
					</div>
					<div className="text-[#777] text-[0.92rem] leading-[1.75] max-w-[440px] mb-9">
						From digital to large-format, every need covered with precision.
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
						{services.map((svc, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl p-6 px-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#0056b3]/5 relative overflow-hidden preserve-3d cursor-default"
								onMouseMove={(e) => handleTiltMove(e, 500, 10, 10, 0, -8, true)}
								onMouseLeave={(e) => handleTiltLeave(e)}>
								<div className="absolute top-3 right-3.5 text-[2.6rem] font-black text-[#0056b3]/5 leading-none tracking-tighter">
									{svc.num}
								</div>
								<div className="w-[50px] h-[50px] rounded-2xl bg-gradient-to-br from-[#0056b3] to-[#0080c0] flex items-center justify-center text-xl mb-3.5 shadow-[0_5px_14px_rgba(0,86,179,0.28)]">
									{svc.icon}
								</div>
								<h3 className="text-[0.92rem] font-extrabold text-[#0a0e1a] mb-1.5">
									{svc.title}
								</h3>
								<p className="text-[0.78rem] text-[#888] leading-relaxed">
									{svc.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Ribbon Promo Text Break */}
			<div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] px-[5%] py-4 text-center relative overflow-hidden">
				<p className="text-white font-extrabold text-[0.95rem] tracking-[2px] uppercase relative z-10">
					<span className="text-[#fff200] mx-2">✦</span> Designing Work Also
					Done Here <span className="text-[#fff200] mx-2">✦</span>
				</p>
			</div>

			{/* Infrastructure Equipment Assets Showcase */}
			<div
				id="machines"
				className="bg-gradient-to-b from-[#f0f4f8] to-[#e6edf5] py-18">
				<div className="max-w-290 mx-auto px-6">
					<div className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#00aeef] mb-2">
						Our Equipment
					</div>
					<div className="text-3xl sm:text-[2rem] font-black text-[#0a0e1a] tracking-[-0.5px] mb-2.5">
						State-of-the-Art Machines
					</div>
					<div className="text-[#777] text-[0.92rem] leading-[1.75] max-w-[440px] mb-9">
						Industrial-grade printing technology for every job, small or large.
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{machinery.map((item, index) => (
							<div
								key={item.id || index}
								id={item.id || `mc${index + 1}`}
								className="bg-white rounded-[22px] p-8 px-7 shadow-[0_12px_40px_rgba(0,0,0,0.07)] relative overflow-hidden preserve-3d cursor-default flex flex-col justify-between"
								onMouseMove={(e) => handleTiltMove(e, 600, 10, 10, 10)}
								onMouseLeave={handleTiltLeave}>
								{item.badge && (
									<div
										className={`absolute top-4 right-4 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-[20px] ${item.badgeBg} ${item.badgeTextColor}`}>
										{item.badge}
									</div>
								)}

								<div>
									{/* Original Machine Image */}
									<div className="h-[180px] flex items-center justify-center mb-5 p-2">
										<img
											src={item.src}
											alt={item.alt || item.name}
											className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
										/>
									</div>

									{/* Machine Title (No Brand Logo) */}
									<div className="flex items-center gap-2 mb-1">
										<h3 className="text-[1rem] font-extrabold text-[#0a0e1a]">
											{item.name}
										</h3>
									</div>

									{/* Description */}
									<p className="text-[0.82rem] text-[#888] leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
