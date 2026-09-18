import { scrollToSection } from "../utils/Utils";

const Footer = ({ setEmail }) => {
	return (
		<>
			{/* Global Comprehensive Landing Page Footer */}
			<footer className="bg-gradient-to-br from-[#020b1e] via-[#041230] to-[#061840] text-white/55 relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.04)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

				<div className="max-w-290 mx-auto px-6 py-16 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
					{/* Brand Presentation Cell */}
					<div>
						<div className="flex items-center gap-2.5 mb-4.5">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0056b3] to-[#00aeef] flex items-center justify-center font-black text-[13px] text-white shadow-[0_4px_16px_rgba(0,86,179,0.4)]">
								RKD
							</div>
							<div className="leading-tight">
								<b className="block text-1rem font-extrabold text-white">
									RKD Printing
								</b>
								<span className="text-[0.65rem] text-white/45">
									Agri Retail Ltd.
								</span>
							</div>
						</div>
						<p className="text-[0.84rem] line-span leading-relaxed text-white/45 mb-5.5 max-w-[280px]">
							Mumbai's trusted printing partner for over 15 years. We deliver
							precision, colour, and quality across every medium — from a
							business card to a 10-foot banner.
						</p>
						<div className="flex gap-3 mb-7">
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#00aeef] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#ec008c] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-[#fff200] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-full transition-all duration-300 cursor-default bg-white shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
						</div>
						<div className="flex gap-2.5">
							<a
								href="#"
								className="w-8.5 h-8.5 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-sm font-bold text-white/60 hover:bg-[#00aeef]/20 hover:border-[#00aeef]/40 hover:-translate-y-0.5 transition-all">
								f
							</a>
							<a
								href="#"
								className="w-8.5 h-8.5 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-sm font-bold text-white/60 hover:bg-[#00aeef]/20 hover:border-[#00aeef]/40 hover:-translate-y-0.5 transition-all">
								in
							</a>
							<a
								href="#"
								className="w-8.5 h-8.5 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-sm font-bold text-white/60 hover:bg-[#00aeef]/20 hover:border-[#00aeef]/40 hover:-translate-y-0.5 transition-all">
								w
							</a>
							<a
								href="#"
								className="w-8.5 h-8.5 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-sm font-bold text-white/60 hover:bg-[#00aeef]/20 hover:border-[#00aeef]/40 hover:-translate-y-0.5 transition-all">
								li
							</a>
						</div>
						<div className="bg-[#00aeef]/6 border border-[#00aeef]/15 rounded-[14px] p-5 mt-5">
							<p className="text-[0.8rem] text-white/50 mb-3 font-semibold">
								📬 Get print deals &amp; offers in your inbox
							</p>
							<div className="flex gap-2">
								<input
									type="email"
									placeholder="your@email.com"
									// value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="flex-1 bg-white/5 border border-white/10 rounded-[20px] p-2 px-3.5 text-[0.8rem] text-white outline-none focus:border-[#00aeef]/40 transition-colors"
								/>
								<button className="bg-gradient-to-br from-[#00aeef] to-[#0080c0] text-white border-none p-2 px-4 rounded-[20px] text-[0.78rem] font-bold cursor-pointer whitespace-nowrap hover:-translate-y-[1px] transition-transform">
									Subscribe
								</button>
							</div>
						</div>
					</div>

					{/* Navigation Directory Matrix Links */}
					<div className="pl-0 md:pl-8">
						<h4 className="text-[0.78rem] font-extrabold uppercase tracking-[2px] text-white/90 mb-4.5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:width-6 after:h-[2px] after:bg-[#00aeef] after:rounded-sm">
							Quick Links
						</h4>
						<ul className="list-none space-y-2.5">
							<li>
								<button
									onClick={() => scrollToSection("hero")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Home
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("about")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									About Us
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Our Services
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("machines")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Our Machines
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("products")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Products
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("contact")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Contact Us
								</button>
							</li>
						</ul>
					</div>

					{/* Capabilities Inventory Links */}
					<div>
						<h4 className="text-[0.78rem] font-extrabold uppercase tracking-[2px] text-white/90 mb-4.5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:width-6 after:h-[2px] after:bg-[#00aeef] after:rounded-sm">
							Services
						</h4>
						<ul className="list-none space-y-2.5">
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Digital Printing
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Corporate Gifting
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Brochures &amp; Flyers
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Standees &amp; Banners
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Bulk Copying
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-[0.83rem] text-white/45 hover:text-[#00aeef] transition-colors flex items-center gap-1.5 before:content-['›'] before:text-[#00aeef] before:text-1rem">
									Design Services
								</button>
							</li>
						</ul>
					</div>

					{/* Contact Details Grid Cell */}
					<div className="space-y-3.5">
						<h4 className="text-[0.78rem] font-extrabold uppercase tracking-[2px] text-white/90 mb-4.5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:width-6 after:h-[2px] after:bg-[#00aeef] after:rounded-sm">
							Contact
						</h4>
						<div className="flex items-start gap-2.5 text-[0.82rem] text-white/45 leading-normal">
							<div className="w-7 h-7 rounded-lg bg-[#00aeef]/10 border border-[#00aeef]/25 flex items-center justify-center text-sm shrink-0 mt-0.5">
								📍
							</div>
							<div>
								Insert your full business address here, Mumbai, Maharashtra
							</div>
						</div>
						<div className="flex items-start gap-2.5 text-[0.82rem] text-white/45 leading-normal">
							<div className="w-7 h-7 rounded-lg bg-[#00aeef]/10 border border-[#00aeef]/25 flex items-center justify-center text-sm shrink-0 mt-0.5">
								📞
							</div>
							<div>
								+91 XXXXX XXXXX
								<br />
								+91 XXXXX XXXXX
							</div>
						</div>
						<div className="flex items-start gap-2.5 text-[0.82rem] text-white/45 leading-normal">
							<div className="w-7 h-7 rounded-lg bg-[#00aeef]/10 border border-[#00aeef]/25 flex items-center justify-center text-sm shrink-0 mt-0.5">
								✉
							</div>
							<div>
								info@rkdprinting.com
								<br />
								orders@rkdprinting.com
							</div>
						</div>
						<div className="flex items-start gap-2.5 text-[0.82rem] text-white/45 leading-normal">
							<div className="w-7 h-7 rounded-lg bg-[#00aeef]/10 border border-[#00aeef]/25 flex items-center justify-center text-sm shrink-0 mt-0.5">
								🕐
							</div>
							<div>
								Mon – Sat: 9:00 AM – 8:00 PM
								<br />
								Sunday: 10:00 AM – 4:00 PM
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-290 mx-auto px-6">
					<hr className="border-none border-t border-white/6 m-0" />
				</div>

				{/* Closing Layout Attributes Cell */}
				<div className="max-w-290 mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-[0.78rem] text-white/35">
					<p>
						&copy; 2026{" "}
						<b className="text-white/70 font-bold">RKD Agri Retail Ltd.</b> All
						Rights Reserved &nbsp;|&nbsp; All Types Printing Solutions
					</p>
					<div className="flex gap-2 flex-wrap">
						<span className="text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[20px] bg-white/5 border border-white/10 text-white/40">
							ISO Certified
						</span>
						<span className="text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[20px] bg-white/5 border border-white/10 text-white/40">
							Privacy Policy
						</span>
						<span className="text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[20px] bg-white/5 border border-white/10 text-white/40">
							Terms of Use
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
