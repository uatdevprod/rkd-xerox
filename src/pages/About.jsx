import { handleTiltLeave, handleTiltMove } from "../utils/Utils";

const About = () => {
	const aboutCards = [
		{
			icon: "🏢",
			title: "About Us",
			text: "A premier printing solution provider delivering high-quality materials. We ensure your brand looks its best every time.",
			barBg: "bg-[#00aeef]",
			iconBg: "bg-[#e6f6fd]",
		},
		{
			icon: "🎯",
			title: "Our Vision",
			text: "To be the leading printing partner for all businesses, offering innovative, sustainable, cost-effective solutions.",
			barBg: "bg-[#ec008c]",
			iconBg: "bg-[#fde8f4]",
		},
		{
			icon: "👥",
			title: "The Team",
			text: "Skilled designers, printing technicians, and customer professionals ensuring strict quality from start to delivery.",
			barBg: "bg-[#0056b3]",
			iconBg: "bg-[#e6f0fb]",
		},
	];

	return (
		<>
			{/* About Corporate Identity Section */}
			<div id="about" className="max-w-[1160px] mx-auto px-6 py-[72px]">
				<div className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#00aeef] mb-2">
					Who we are
				</div>
				<div className="text-3xl sm:text-[2rem] font-black text-[#0a0e1a] tracking-[-0.5px] mb-2.5">
					Built on Quality &amp; Precision
				</div>
				<div className="text-[#777] text-[0.92rem] leading-[1.75] max-w-[440px] mb-11">
					Years of printing expertise and a commitment to making every brand
					shine in print.
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
					{aboutCards.map((card, i) => (
						<div
							key={i}
							className="bg-white rounded-[22px] p-7 shadow-[0_10px_36px_rgba(0,0,0,0.07)] relative overflow-hidden preserve-3d cursor-default"
							onMouseMove={(e) => handleTiltMove(e, 600, 14, 14, 12)}
							onMouseLeave={(e) => handleTiltLeave(e)}>
							<div
								className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 ${card.iconBg}`}>
								{card.icon}
							</div>
							<h3 className="text-1rem font-extrabold text-[#0a0e1a] mb-2">
								{card.title}
							</h3>
							<p className="text-[0.84rem] text-[#777] leading-relaxed">
								{card.text}
							</p>
							<div
								className={`absolute bottom-0 left-0 h-[3px] w-12 ${card.barBg}`}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default About;
