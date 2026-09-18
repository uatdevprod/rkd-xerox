import { handleTiltLeave, handleTiltMove } from "../utils/Utils";

const Service = () => {
	return (
		<>
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
						<div
							id="mc1"
							className="bg-white rounded-[22px] p-8 px-7 shadow-[0_12px_40px_rgba(0,0,0,0.07)] relative overflow-hidden preserve-3d cursor-default"
							onMouseMove={(e) => handleTiltMove(e, 600, 10, 10, 10)}
							onMouseLeave={(e) => handleTiltLeave(e)}>
							<div className="absolute top-4 right-4 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-[20px] bg-[#e6f6fd] text-[#006fa3]">
								Digital
							</div>
							<div className="h-45 flex items-center justify-center mb-5">
								{/* <canvas ref={mcanvas1Ref} width="200" height="160" /> */}
							</div>
							<h3 className="text-1rem font-extrabold text-[#0a0e1a] mb-1.5">
								Digital Offset Printer
							</h3>
							<p className="text-[0.82rem] text-[#888] leading-relaxed">
								High-speed CMYK digital offset machine for vibrant, precise
								color reproduction on all paper stocks.
							</p>
						</div>

						<div
							id="mc2"
							className="bg-white rounded-[22px] p-8 px-7 shadow-[0_12px_40px_rgba(0,0,0,0.07)] relative overflow-hidden preserve-3d cursor-default"
							onMouseMove={(e) => handleTiltMove(e, 600, 10, 10, 10)}
							onMouseLeave={(e) => handleTiltLeave(e)}>
							<div className="absolute top-4 right-4 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-[20px] bg-[#fde8f4] text-[#8c0050]">
								Large Format
							</div>
							<div className="h-[180px] flex items-center justify-center mb-5">
								{/* <canvas ref={mcanvas2Ref} width="200" height="160" /> */}
							</div>
							<h3 className="text-1rem font-extrabold text-[#0a0e1a] mb-1.5">
								Large Format Plotter
							</h3>
							<p className="text-[0.82rem] text-[#888] leading-relaxed">
								Wide-format inkjet plotter for banners, standees, flex boards,
								and outdoor advertising prints.
							</p>
						</div>

						<div
							id="mc3"
							className="bg-white rounded-[22px] p-8 px-7 shadow-[0_12px_40px_rgba(0,0,0,0.07)] relative overflow-hidden preserve-3d cursor-default"
							onMouseMove={(e) => handleTiltMove(e, 600, 10, 10, 10)}
							onMouseLeave={(e) => handleTiltLeave(e)}>
							<div className="absolute top-4 right-4 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-[20px] bg-[#e6f0fb] text-[#003d82]">
								Heavy Duty
							</div>
							<div className="h-45 flex items-center justify-center mb-5">
								{/* <canvas ref={mcanvas3Ref} width="200" height="160" /> */}
							</div>
							<h3 className="text-1rem font-extrabold text-[#0a0e1a] mb-1.5">
								Heavy Duty Copier
							</h3>
							<p className="text-[0.82rem] text-[#888] leading-relaxed">
								Industrial photocopier for high-volume B&amp;W and color
								document copying at rapid speeds.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
