import { handleTiltMove } from "../utils/Utils";

const Contact = ({ mapCanvasRef, mapWrapRef }) => {
	return (
		<>
			{/* Communications & Dynamic Interactive Canvas Map */}
			<div id="contact" className="bg-white py-[72px]">
				<div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
					<div>
						<div className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#00aeef] mb-2">
							Find us
						</div>
						<div className="text-3xl sm:text-[2rem] font-black text-[#0a0e1a] mb-2">
							Locate Us
						</div>
						<p className="text-[#777] text-[0.91rem] leading-relaxed mb-4">
							Conveniently located to serve all your printing needs. Walk in or
							reach us anytime.
						</p>
						<p className="font-extrabold text-[#0a0e1a] text-[0.97rem] mb-1">
							RKD Agri Retail Ltd.
						</p>
						<p className="text-[#777] text-[0.85rem] leading-relaxed mb-3.5">
							Insert your full business address here, Mumbai, Maharashtra
						</p>
						<div className="flex flex-wrap gap-2">
							<div className="inline-flex items-center gap-2 bg-[#f0f6ff] border border-[#0056b3]/12 rounded-[50px] p-2 px-4 text-[0.82rem] text-[#0056b3] font-semibold">
								✉ info@rkdprinting.com
							</div>
							<div className="inline-flex items-center gap-2 bg-[#f0f6ff] border border-[#0056b3]/12 rounded-[50px] p-2 px-4 text-[0.82rem] text-[#0056b3] font-semibold">
								{" "}
								📞 +91 XXXXX XXXXX
							</div>
						</div>
					</div>
					<div
						ref={mapWrapRef}
						className="rounded-[22px] overflow-hidden shadow-[0_20px_56px_rgba(0,0,0,0.11)] relative h-[270px] bg-[#e8eef6] cursor-default"
						style={{
							transform: "perspective(700px) rotateY(-4deg) rotateX(2deg)",
						}}
						onMouseMove={(e) => handleTiltMove(e, 700, 8, 10)}
						onMouseLeave={() => {
							if (mapWrapRef.current) {
								mapWrapRef.current.style.transform =
									"perspective(700px) rotateY(-4deg) rotateX(2deg)";
								mapWrapRef.current.style.transition = "transform 0.5s";
								setTimeout(() => {
									if (mapWrapRef.current)
										mapWrapRef.current.style.transition = "";
								}, 500);
							}
						}}>
						<canvas ref={mapCanvasRef} className="absolute inset-0" />
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<div className="text-center">
								<div className="w-[17px] h-[17px] bg-[#ec008c] rounded-full mx-auto mb-1.5 animate-pinpulse" />
								<div className="bg-white p-1.5 px-3 rounded-[20px] text-[0.8rem] font-bold text-[#0056b3] shadow-[0_3px_10px_rgba(0,0,0,0.1)]">
									RKD Printing
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
