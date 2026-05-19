export default function Topbar() {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="bg-white/92 backdrop-blur-[20px] px-[5%] h-16 flex items-center justify-between sticky top-0 z-500 border-b border-[#0056b3]/10 shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
			<div className="flex items-center gap-2.5">
				<div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#0056b3] to-[#00aeef] flex items-center justify-center font-black text-[12px] text-white tracking-[-0.5px] shadow-[0_4px_12px_rgba(0,86,179,0.35)]">
					RKD
				</div>
				<div className="leading-tight">
					<b className="text-base font-extrabold text-[#0056b3] block">
						RKD Printing
					</b>
					<span className="text-[0.62rem] text-[#888] font-medium uppercase tracking-wider">
						Agri Retail Ltd.
					</span>
				</div>
			</div>
			<ul className="hidden sm:flex items-center gap-6 list-none">
				<li>
					<button
						onClick={() => scrollToSection("about")}
						className="text-[0.83rem] font-semibold text-[#555] hover:text-[#0056b3] transition-colors duration-200">
						About
					</button>
				</li>
				<li>
					<button
						onClick={() => scrollToSection("services")}
						className="text-[0.83rem] font-semibold text-[#555] hover:text-[#0056b3] transition-colors duration-200">
						Services
					</button>
				</li>
				<li>
					<button
						onClick={() => scrollToSection("machines")}
						className="text-[0.83rem] font-semibold text-[#555] hover:text-[#0056b3] transition-colors duration-200">
						Machines
					</button>
				</li>
				<li>
					<button
						onClick={() => scrollToSection("products")}
						className="text-[0.83rem] font-semibold text-[#555] hover:text-[#0056b3] transition-colors duration-200">
						Products
					</button>
				</li>
				<li>
					<button
						onClick={() => scrollToSection("contact")}
						className="bg-[#0056b3] text-white px-[18px] py-2 rounded-[20px] text-[0.82rem] font-semibold shadow-[0_4px_12px_rgba(0,86,179,0.3)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,86,179,0.4)] transition-all duration-200">
						Contact
					</button>
				</li>
			</ul>
		</nav>
	);
}
