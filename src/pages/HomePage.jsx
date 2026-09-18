import { useEffect, useRef, useState } from "react";
import {
	handleTiltLeave,
	handleTiltMove,
	scrollToSection,
} from "../utils/Utils";
export default function HomePage() {
	// DOM Elements references for canvas systems and layouts
	const heroRef = useRef(null);
	const hcanvasRef = useRef(null);
	const printerCanvasRef = useRef(null);
	const mcanvas1Ref = useRef(null);
	const mcanvas2Ref = useRef(null);
	const mcanvas3Ref = useRef(null);
	const mapCanvasRef = useRef(null);
	const mapWrapRef = useRef(null);

	// Form State for Newsletter
	const [email, setEmail] = useState("");

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

	const products = [
		{
			name: "Business Cards",
			tag: "Corporate",
			tagC: "bg-[#e6f0fb]",
			tagT: "text-[#003d82]",
			bg: "from-[#e6f0fb] to-[#cce0f5]",
			draw: "bizcard",
		},
		{
			name: "Product Packaging",
			tag: "Digital Print",
			tagC: "bg-[#e6f6fd]",
			tagT: "text-[#005f8a]",
			bg: "from-[#e6f6fd] to-[#c5eaf8]",
			draw: "box",
		},
		{
			name: "Roll-up Standee",
			tag: "Large Format",
			tagC: "bg-[#fde8f4]",
			tagT: "text-[#7a0048]",
			bg: "from-[#fde8f4] to-[#f8c8e8]",
			draw: "standee",
		},
		{
			name: "Brochure / Catalog",
			tag: "Printed Article",
			tagC: "bg-[#e8f5e9]",
			tagT: "text-[#1b5e20]",
			bg: "from-[#e8f5e9] to-[#c8e6c9]",
			draw: "brochure",
		},
		{
			name: "Custom Mug",
			tag: "Corporate Gift",
			tagC: "bg-[#fff8e1]",
			tagT: "text-[#6d4c00]",
			bg: "from-[#fff8e1] to-[#ffecb3]",
			draw: "mug",
		},
		{
			name: "ID Card & Lanyard",
			tag: "Corporate",
			tagC: "bg-[#e8eaf6]",
			tagT: "text-[#1a237e]",
			bg: "from-[#e8eaf6] to-[#c5cae9]",
			draw: "idcard",
		},
		{
			name: "Flex Banner",
			tag: "Large Format",
			tagC: "bg-[#fde8f4]",
			tagT: "text-[#7a0048]",
			bg: "from-[#fce4ec] to-[#f8bbd0]",
			draw: "banner",
		},
		{
			name: "Letterhead Set",
			tag: "Stationery",
			tagC: "bg-[#f3e5f5]",
			tagT: "text-[#4a148c]",
			bg: "from-[#f3e5f5] to-[#e1bee7]",
			draw: "letterhead",
		},
	];

	// 2D Procedural Machinery Render Vectors
	const drawDigitalPrinter = (canvas) => {
		const ctx = canvas.getContext("2d"),
			W = canvas.width,
			H = canvas.height,
			cx = W / 2,
			cy = H / 2 + 10;
		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle = "#1565c0";
		ctx.beginPath();
		ctx.roundRect(cx - 55, cy - 30, 110, 55, 6);
		ctx.fill();
		ctx.fillStyle = "#1976d2";
		ctx.beginPath();
		ctx.roundRect(cx - 55, cy - 50, 110, 24, 4);
		ctx.fill();
		ctx.fillStyle = "#0d47a1";
		ctx.beginPath();
		ctx.roundRect(cx - 40, cy + 22, 80, 12, 3);
		ctx.fill();
		ctx.fillStyle = "rgba(0,220,255,0.15)";
		ctx.strokeStyle = "rgba(0,174,239,0.4)";
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.roundRect(cx - 30, cy - 24, 60, 18, 3);
		ctx.fill();
		ctx.stroke();
		["#00aeef", "#ec008c", "#fff200", "#333"].forEach((c, i) => {
			ctx.fillStyle = c;
			ctx.beginPath();
			ctx.arc(cx - 24 + i * 16, cy + 6, 5, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.fillStyle = "#fff";
		ctx.strokeStyle = "rgba(0,0,0,0.06)";
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.rect(cx - 22, cy - 60, 44, 16);
		ctx.fill();
		ctx.stroke();
		[4, 8, 12].forEach((ly) => {
			ctx.fillStyle = "rgba(0,86,179,0.4)";
			ctx.fillRect(cx - 18, cy - 60 + ly, 36, 2);
		});
		const sg = ctx.createRadialGradient(cx, cy + 40, 2, cx, cy + 40, 50);
		sg.addColorStop(0, "rgba(0,0,0,0.15)");
		sg.addColorStop(1, "rgba(0,0,0,0)");
		ctx.fillStyle = sg;
		ctx.beginPath();
		ctx.ellipse(cx, cy + 40, 50, 10, 0, 0, Math.PI * 2);
		ctx.fill();
	};

	const drawLargeFormat = (canvas) => {
		const ctx = canvas.getContext("2d"),
			W = canvas.width,
			H = canvas.height,
			cx = W / 2,
			cy = H / 2 + 5;
		ctx.clearRect(0, 0, W, H);
		ctx.strokeStyle = "#555";
		ctx.lineWidth = 3;
		[
			[cx - 50, cy + 50],
			[cx + 50, cy + 50],
		].forEach(([x, y]) => {
			ctx.beginPath();
			ctx.moveTo(cx, cy + 10);
			ctx.lineTo(x, y);
			ctx.stroke();
		});
		ctx.fillStyle = "#37474f";
		ctx.beginPath();
		ctx.roundRect(cx - 70, cy - 20, 140, 32, 5);
		ctx.fill();
		ctx.fillStyle = "#455a64";
		ctx.beginPath();
		ctx.roundRect(cx - 70, cy - 34, 140, 16, 3);
		ctx.fill();
		["#00aeef", "#ec008c", "#fff200", "#231f20", "#0f9d58", "#e53935"].forEach(
			(c, i) => {
				ctx.fillStyle = c;
				ctx.strokeStyle = "rgba(0,0,0,0.2)";
				ctx.lineWidth = 0.5;
				ctx.beginPath();
				ctx.roundRect(cx - 66 + i * 22, cy - 32, 14, 12, 2);
				ctx.fill();
				ctx.stroke();
			},
		);
		ctx.fillStyle = "#90a4ae";
		ctx.beginPath();
		ctx.roundRect(cx - 68, cy - 8, 136, 4, 2);
		ctx.fill();
		ctx.fillStyle = "#0056b3";
		ctx.beginPath();
		ctx.roundRect(cx - 10, cy - 14, 22, 14, 3);
		ctx.fill();
		ctx.fillStyle = "#fff";
		ctx.strokeStyle = "rgba(0,0,0,0.08)";
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.rect(cx - 55, cy + 10, 110, 26);
		ctx.fill();
		ctx.stroke();
		[0, 1, 2, 3].forEach((i) => {
			ctx.fillStyle = ["#00aeef", "#ec008c", "#fff200", "#333"][i];
			ctx.fillRect(cx - 55 + i * 28, cy + 10, 26, 4);
		});
		ctx.fillStyle = "#263238";
		[cx - 55, cx + 40].forEach((x) => {
			ctx.beginPath();
			ctx.roundRect(x, cy + 49, 16, 8, 2);
			ctx.fill();
		});
		const sg = ctx.createRadialGradient(cx, cy + 62, 2, cx, cy + 62, 55);
		sg.addColorStop(0, "rgba(0,0,0,0.12)");
		sg.addColorStop(1, "rgba(0,0,0,0)");
		ctx.fillStyle = sg;
		ctx.beginPath();
		ctx.ellipse(cx, cy + 62, 55, 8, 0, 0, Math.PI * 2);
		ctx.fill();
	};

	const drawCopier = (canvas) => {
		const ctx = canvas.getContext("2d"),
			W = canvas.width,
			H = canvas.height,
			cx = W / 2,
			cy = H / 2 + 10;
		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle = "#424242";
		ctx.beginPath();
		ctx.roundRect(cx - 55, cy + 10, 110, 28, 5);
		ctx.fill();
		ctx.fillStyle = "#616161";
		ctx.beginPath();
		ctx.roundRect(cx - 55, cy - 30, 110, 42, 5);
		ctx.fill();
		ctx.fillStyle = "#757575";
		ctx.beginPath();
		ctx.roundRect(cx - 55, cy - 55, 110, 27, 5);
		ctx.fill();
		ctx.fillStyle = "rgba(0,180,255,0.07)";
		ctx.strokeStyle = "rgba(0,174,239,0.2)";
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.roundRect(cx - 48, cy - 51, 96, 20, 3);
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "#1565c0";
		ctx.beginPath();
		ctx.roundRect(cx - 30, cy - 20, 60, 24, 4);
		ctx.fill();
		["#00aeef", "#4caf50", "#f44336"].forEach((c, i) => {
			ctx.fillStyle = c;
			ctx.beginPath();
			ctx.arc(cx - 16 + i * 16, cy - 8, 5, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.fillStyle = "#9e9e9e";
		ctx.beginPath();
		ctx.roundRect(cx - 45, cy + 36, 90, 8, 3);
		ctx.fill();
		ctx.fillStyle = "#fff";
		ctx.strokeStyle = "rgba(0,0,0,0.06)";
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.rect(cx - 35, cy + 20, 70, 18);
		ctx.fill();
		ctx.stroke();
		[4, 8, 12, 16].forEach((ly) => {
			ctx.fillStyle = "rgba(0,0,0,0.08)";
			ctx.fillRect(cx - 30, cy + 20 + ly, 60, 1.5);
		});
		const sg = ctx.createRadialGradient(cx, cy + 50, 2, cx, cy + 50, 55);
		sg.addColorStop(0, "rgba(0,0,0,0.12)");
		sg.addColorStop(1, "rgba(0,0,0,0)");
		ctx.fillStyle = sg;
		ctx.beginPath();
		ctx.ellipse(cx, cy + 50, 55, 8, 0, 0, Math.PI * 2);
		ctx.fill();
	};

	// 2D Procedural Product Icon Drawings
	const drawProduct = (canvas, type) => {
		const ctx = canvas.getContext("2d"),
			W = canvas.width,
			H = canvas.height,
			cx = W / 2,
			cy = H / 2;
		ctx.clearRect(0, 0, W, H);
		if (type === "bizcard") {
			ctx.fillStyle = "#fff";
			ctx.strokeStyle = "rgba(0,86,179,0.15)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.roundRect(cx - 44, cy - 26, 88, 52, 5);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = "#0056b3";
			ctx.fillRect(cx - 44, cy - 26, 88, 14);
			ctx.fillStyle = "rgba(0,174,239,0.5)";
			ctx.beginPath();
			ctx.arc(cx - 20, cy - 19, 6, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "rgba(0,0,0,0.5)";
			ctx.font = "bold 7px sans-serif";
			ctx.fillText("RKD PRINTING", cx - 24, cy + 4);
			ctx.fillStyle = "rgba(0,0,0,0.3)";
			ctx.font = "6px sans-serif";
			ctx.fillText("info@rkdprinting.com", cx - 30, cy + 14);
			ctx.fillText("+91 XXXXX XXXXX", cx - 24, cy + 22);
		}
		if (type === "box") {
			ctx.fillStyle = "#1a6fd4";
			ctx.beginPath();
			ctx.moveTo(cx - 28, cy - 20);
			ctx.lineTo(cx + 28, cy - 20);
			ctx.lineTo(cx + 28, cy + 28);
			ctx.lineTo(cx - 28, cy + 28);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle = "#0d4a9e";
			ctx.beginPath();
			ctx.moveTo(cx + 28, cy - 20);
			ctx.lineTo(cx + 44, cy - 32);
			ctx.lineTo(cx + 44, cy + 16);
			ctx.lineTo(cx + 28, cy + 28);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle = "#1565c0";
			ctx.beginPath();
			ctx.moveTo(cx - 28, cy - 20);
			ctx.lineTo(cx + 28, cy - 20);
			ctx.lineTo(cx + 44, cy - 32);
			ctx.lineTo(cx - 12, cy - 32);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle = "rgba(255,255,255,0.15)";
			ctx.font = "bold 8px sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("PRODUCT", cx, cy + 2);
			ctx.fillText("BOX", cx, cy + 12);
			ctx.textAlign = "left";
		}
		if (type === "standee") {
			ctx.fillStyle = "#0056b3";
			ctx.beginPath();
			ctx.roundRect(cx - 22, cy - 55, 44, 90, 3);
			ctx.fill();
			ctx.fillStyle = "rgba(0,174,239,0.3)";
			ctx.beginPath();
			ctx.roundRect(cx - 18, cy - 50, 36, 30, 2);
			ctx.fill();
			ctx.fillStyle = "rgba(255,255,255,0.7)";
			ctx.font = "bold 7px sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("RKD", cx, cy - 28);
			ctx.fillStyle = "rgba(255,255,255,0.5)";
			ctx.font = "5px sans-serif";
			ctx.fillText("PRINTING", cx, cy - 19);
			ctx.textAlign = "left";
			ctx.fillStyle = "#888";
			ctx.beginPath();
			ctx.rect(cx - 1, cy + 34, 2, 22);
			ctx.fill();
			ctx.fillStyle = "#666";
			ctx.beginPath();
			ctx.ellipse(cx, cy + 56, 16, 4, 0, 0, Math.PI * 2);
			ctx.fill();
		}
		if (type === "brochure") {
			ctx.fillStyle = "#fff";
			ctx.strokeStyle = "rgba(0,0,0,0.1)";
			ctx.lineWidth = 0.5;
			ctx.beginPath();
			ctx.roundRect(cx - 38, cy - 44, 76, 88, 3);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = "#0056b3";
			ctx.fillRect(cx - 38, cy - 44, 76, 22);
			ctx.fillStyle = "rgba(0,174,239,0.4)";
			ctx.beginPath();
			ctx.arc(cx - 10, cy - 33, 9, 0, Math.PI * 2);
			ctx.fill();
			[0, 1, 2, 3, 4].forEach((i) => {
				ctx.fillStyle = `rgba(0,0,0,${0.08 + i * 0.02})`;
				ctx.fillRect(cx - 30, cy - 10 + i * 10, 60 - i * 8, 4);
			});
			ctx.fillStyle = "rgba(0,86,179,0.2)";
			ctx.fillRect(cx - 30, cy + 42, 28, 16);
			ctx.fillRect(cx + 2, cy + 42, 28, 16);
		}
		if (type === "mug") {
			ctx.fillStyle = "#e0f4ff";
			ctx.strokeStyle = "rgba(0,86,179,0.2)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(cx - 24, cy - 30);
			ctx.lineTo(cx + 24, cy - 30);
			ctx.lineTo(cx + 20, cy + 28);
			ctx.lineTo(cx - 20, cy + 28);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(cx + 32, cy - 5, 14, Math.PI * 0.6, Math.PI * 1.4);
			ctx.strokeStyle = "rgba(0,86,179,0.3)";
			ctx.lineWidth = 5;
			ctx.stroke();
			["#00aeef", "#ec008c", "#fff200", "#0056b3"].forEach((c, i) => {
				ctx.fillStyle = c;
				ctx.fillRect(cx - 18, cy - 20 + i * 12, 36, 9);
			});
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.fillRect(cx + 8, cy - 28, 8, 56);
		}
		if (type === "idcard") {
			ctx.fillStyle = "#1565c0";
			ctx.beginPath();
			ctx.roundRect(cx - 32, cy - 44, 64, 86, 6);
			ctx.fill();
			ctx.fillStyle = "#fff";
			ctx.beginPath();
			ctx.roundRect(cx - 28, cy - 8, 56, 40, 4);
			ctx.fill();
			ctx.fillStyle = "rgba(0,86,179,0.7)";
			ctx.beginPath();
			ctx.arc(cx, cy - 24, 14, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "rgba(255,255,255,0.4)";
			ctx.font = "bold 8px sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("ID", cx, cy - 19);
			ctx.fillStyle = "rgba(0,0,0,0.5)";
			ctx.font = "bold 6px sans-serif";
			ctx.fillText("EMPLOYEE", cx, cy + 4);
			ctx.fillStyle = "rgba(0,0,0,0.3)";
			ctx.font = "5px sans-serif";
			ctx.fillText("Name Here", cx, cy + 14);
			ctx.fillText("Dept. | 0001", cx, cy + 22);
			ctx.textAlign = "left";
			ctx.fillStyle = "rgba(255,255,255,0.4)";
			ctx.beginPath();
			ctx.arc(cx, cy - 58, 4, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = "#fff200";
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.moveTo(cx - 20, cy - 44);
			ctx.lineTo(cx + 20, cy - 44);
			ctx.stroke();
		}
		if (type === "banner") {
			ctx.fillStyle = "#ec008c";
			ctx.beginPath();
			ctx.roundRect(cx - 50, cy - 36, 100, 72, 4);
			ctx.fill();
			ctx.fillStyle = "rgba(255,255,255,0.12)";
			ctx.fillRect(cx - 50, cy - 36, 100, 20);
			ctx.fillStyle = "rgba(255,255,255,0.9)";
			ctx.font = "bold 10px sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("RKD", cx, cy - 14);
			ctx.font = "7px sans-serif";
			ctx.fillStyle = "rgba(255,255,255,0.7)";
			ctx.fillText("PRINTING SOLUTIONS", cx, cy - 4);
			[cy + 8, cy + 18, cy + 26].forEach((ly) => {
				ctx.fillStyle = "rgba(255,255,255,0.25)";
				ctx.fillRect(cx - 40, ly, 80, 5);
			});
			ctx.textAlign = "left";
		}
		if (type === "letterhead") {
			ctx.fillStyle = "#fff";
			ctx.strokeStyle = "rgba(0,0,0,0.08)";
			ctx.lineWidth = 0.5;
			ctx.beginPath();
			ctx.roundRect(cx - 38, cy - 50, 76, 100, 3);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = "#0056b3";
			ctx.fillRect(cx - 38, cy - 50, 76, 16);
			ctx.fillStyle = "rgba(0,174,239,0.4)";
			ctx.fillRect(cx - 38, cy + 42, 76, 8);
			ctx.fillStyle = "rgba(255,255,255,0.9)";
			ctx.font = "bold 7px sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("RKD", cx, cy - 40);
			ctx.textAlign = "left";
			[0, 1, 2, 3, 4, 5].forEach((i) => {
				ctx.fillStyle = `rgba(0,0,0,${0.07 + i * 0.01})`;
				ctx.fillRect(cx - 30, cy - 20 + i * 10, 60 - (i % 2) * 10, 4);
			});
		}
	};

	// 2D Animated Floating Printer Generator Vector
	const drawHeroPrinter = (pctx, t) => {
		const W = 340,
			H = 320,
			cx = 170,
			cy = 160;
		pctx.clearRect(0, 0, W, H);
		const bob = Math.sin(t * 0.002) * 10;
		const ry = Math.sin(t * 0.0015) * 6;
		const g = pctx.createRadialGradient(cx, cy + bob, 10, cx, cy + bob, 120);
		g.addColorStop(0, "rgba(0,174,239,0.12)");
		g.addColorStop(1, "rgba(0,174,239,0)");
		pctx.fillStyle = g;
		pctx.fillRect(0, 0, W, H);
		pctx.save();
		pctx.translate(cx, cy + bob);
		const bw = 120,
			bh = 70,
			bd = 36,
			ox = ry * 0.5;
		pctx.beginPath();
		pctx.moveTo(-bw / 2 + ox, -bh / 2);
		pctx.lineTo(bw / 2 + ox, -bh / 2);
		pctx.lineTo(bw / 2 + bd * 0.5 + ox, -bh / 2 - bd * 0.4);
		pctx.lineTo(-bw / 2 + bd * 0.5 + ox, -bh / 2 - bd * 0.4);
		pctx.closePath();
		pctx.fillStyle = "#1a6fd4";
		pctx.fill();
		pctx.strokeStyle = "#0d4a9e";
		pctx.lineWidth = 1;
		pctx.stroke();
		pctx.beginPath();
		pctx.moveTo(-bw / 2 + ox, -bh / 2);
		pctx.lineTo(bw / 2 + ox, -bh / 2);
		pctx.lineTo(bw / 2 + ox, bh / 2);
		pctx.lineTo(-bw / 2 + ox, bh / 2);
		pctx.closePath();
		pctx.fillStyle = "#0a5abf";
		pctx.fill();
		pctx.strokeStyle = "#0d4a9e";
		pctx.lineWidth = 1;
		pctx.stroke();
		pctx.beginPath();
		pctx.moveTo(bw / 2 + ox, -bh / 2);
		pctx.lineTo(bw / 2 + bd * 0.5 + ox, -bh / 2 - bd * 0.4);
		pctx.lineTo(bw / 2 + bd * 0.5 + ox, bh / 2 - bd * 0.4);
		pctx.lineTo(bw / 2 + ox, bh / 2);
		pctx.closePath();
		pctx.fillStyle = "#0847a3";
		pctx.fill();
		pctx.strokeStyle = "#0d4a9e";
		pctx.lineWidth = 1;
		pctx.stroke();
		pctx.fillStyle = "rgba(0,174,239,0.18)";
		pctx.beginPath();
		pctx.roundRect(-bw / 2 + ox + 8, 4, 50, 22, 4);
		pctx.fill();
		[0, 1, 2].forEach((i) => {
			pctx.beginPath();
			pctx.arc(-bw / 2 + ox + 18 + i * 14, 16, 4, 0, Math.PI * 2);
			pctx.fillStyle = ["#00aeef", "#ec008c", "#fff200"][i];
			pctx.fill();
		});
		pctx.fillStyle = "rgba(0,220,255,0.08)";
		pctx.beginPath();
		pctx.roundRect(-bw / 2 + ox + 64, 4, 38, 22, 3);
		pctx.fill();
		pctx.strokeStyle = "rgba(0,174,239,0.3)";
		pctx.lineWidth = 0.5;
		pctx.stroke();
		pctx.fillStyle = "#0440a0";
		pctx.beginPath();
		pctx.roundRect(-bw / 2 + ox + 10, -bh / 2 + 6, bw - 20, 7, 2);
		pctx.fill();
		const py = -bh / 2 - (Math.sin(t * 0.003) * 0.5 + 0.5) * 28;
		pctx.fillStyle = "#ffffff";
		pctx.strokeStyle = "rgba(0,0,0,0.08)";
		pctx.lineWidth = 0.5;
		pctx.beginPath();
		pctx.rect(-40 + ox, py, 80, 30);
		pctx.fill();
		pctx.stroke();
		[6, 12, 18, 23].forEach((ly) => {
			pctx.fillStyle = `rgba(0,86,179,${ly < 18 ? 0.5 : 0.2})`;
			pctx.fillRect(-34 + ox, py + ly, 60, 2);
		});
		[
			[0, "#00aeef"],
			[16, "#ec008c"],
			[32, "#fff200"],
			[48, "#333"],
		].forEach(([x, c]) => {
			pctx.fillStyle = c;
			pctx.fillRect(-34 + ox + x, py + 6, 14, 4);
		});
		["#00aeef", "#ec008c", "#fff200", "#333"].forEach((c, i) => {
			const cx2 = -32 + i * 18 + ox,
				cy2 = -bh / 2 - bd * 0.4 - 8;
			pctx.fillStyle = c;
			pctx.beginPath();
			pctx.roundRect(cx2 - 5, cy2 - 12, 11, 16, 2);
			pctx.fill();
			pctx.fillStyle = "rgba(255,255,255,0.2)";
			pctx.beginPath();
			pctx.rect(cx2 - 2, cy2 - 10, 3, 8);
			pctx.fill();
		});
		pctx.fillStyle = "#0440a0";
		pctx.beginPath();
		pctx.roundRect(bw / 2 + ox + 6, bh * 0.05 - bd * 0.2, 8, 10, 1);
		pctx.fill();
		pctx.restore();
		pctx.save();
		pctx.translate(cx, cy + bh / 2 + 8 + bob);
		const sg = pctx.createRadialGradient(10, 0, 2, 10, 0, 70);
		sg.addColorStop(0, "rgba(0,0,0,0.2)");
		sg.addColorStop(1, "rgba(0,0,0,0)");
		pctx.fillStyle = sg;
		pctx.beginPath();
		pctx.ellipse(10, 0, 70, 14, 0, 0, Math.PI * 2);
		pctx.fill();
		pctx.restore();
		[
			{ cx: -140, cy: -60, c: "#00aeef", s: 0.7, phase: 0 },
			{ cx: 140, cy: -40, c: "#ec008c", s: 0.6, phase: 1.5 },
			{ cx: -130, cy: 60, c: "#fff200", s: 0.55, phase: 3 },
			{ cx: 135, cy: 70, c: "#231f20", s: 0.5, phase: 2 },
		].forEach((d) => {
			const bx = d.cx + Math.sin(t * 0.002 + d.phase) * 12,
				by = d.cy + Math.cos(t * 0.0018 + d.phase) * 8;
			pctx.save();
			pctx.translate(cx + bx, cy + by + bob * 0.5);
			pctx.rotate(Math.PI * 0.75);
			pctx.scale(d.s, d.s);
			pctx.beginPath();
			pctx.arc(0, 0, 14, Math.PI, Math.PI * 2);
			pctx.bezierCurveTo(14, 0, 18, 24, 0, 28);
			pctx.bezierCurveTo(-18, 24, -14, 0, -14, 0);
			pctx.closePath();
			pctx.fillStyle = d.c;
			pctx.shadowColor = "rgba(0,0,0,0.3)";
			pctx.shadowBlur = 6;
			pctx.shadowOffsetX = 3;
			pctx.shadowOffsetY = 4;
			pctx.fill();
			pctx.restore();
		});
	};

	// Setup Lifecycle Canvas Engines & Physics Particles Loop
	useEffect(() => {
		// 1. Static Drawings Execution Path
		if (mcanvas1Ref.current) drawDigitalPrinter(mcanvas1Ref.current);
		if (mcanvas2Ref.current) drawLargeFormat(mcanvas2Ref.current);
		if (mcanvas3Ref.current) drawCopier(mcanvas3Ref.current);

		products.forEach((p, idx) => {
			const canvas = document.getElementById(`prod-canvas-${idx}`);
			if (canvas) drawProduct(canvas, p.draw);
		});

		// 2. Vector Grid Mock Map Renderer Execution Path
		const mc = mapCanvasRef.current;
		const mw = mapWrapRef.current;
		let handleMapResize = () => {};

		if (mc && mw) {
			const drawMap = () => {
				const w = mc.width,
					h = mc.height;
				const mctx = mc.getContext("2d");
				mctx.clearRect(0, 0, w, h);
				mctx.fillStyle = "#e8eef6";
				mctx.fillRect(0, 0, w, h);
				mctx.strokeStyle = "rgba(0,86,179,0.09)";
				mctx.lineWidth = 1;
				for (let x = 0; x < w; x += 32) {
					mctx.beginPath();
					mctx.moveTo(x, 0);
					mctx.lineTo(x, h);
					mctx.stroke();
				}
				for (let y = 0; y < h; y += 32) {
					mctx.beginPath();
					mctx.moveTo(0, y);
					mctx.lineTo(w, y);
					mctx.stroke();
				}
				[
					[0, h * 0.4, w, h * 0.38],
					[0, h * 0.65, w, h * 0.62],
					[w * 0.3, 0, w * 0.32, h],
					[w * 0.6, 0, w * 0.58, h],
				].forEach(([x1, y1, x2, y2]) => {
					mctx.beginPath();
					mctx.moveTo(x1, y1);
					mctx.lineTo(x2, y2);
					mctx.strokeStyle = "rgba(255,255,255,0.85)";
					mctx.lineWidth = 7;
					mctx.stroke();
				});
				[
					[w * 0.12, h * 0.2, 60, 28],
					[w * 0.5, h * 0.15, 48, 22],
					[w * 0.72, h * 0.5, 70, 30],
					[w * 0.2, h * 0.72, 55, 26],
				].forEach(([x, y, bw, bh]) => {
					mctx.fillStyle = "rgba(0,86,179,0.07)";
					mctx.beginPath();
					mctx.roundRect(x, y, bw, bh, 3);
					mctx.fill();
				});
			};

			handleMapResize = () => {
				mc.width = mw.offsetWidth;
				mc.height = mw.offsetHeight;
				drawMap();
			};
			handleMapResize();
			window.addEventListener("resize", handleMapResize);
		}

		// 3. Main Frame Dynamic Particle Updates Engine Path
		const hero = heroRef.current;
		const hcanvas = hcanvasRef.current;
		const pc = printerCanvasRef.current;
		let animationFrameId;

		if (hero && hcanvas && pc) {
			const hctx = hcanvas.getContext("2d");
			const pctx = pc.getContext("2d");

			const resizeHeroCanvas = () => {
				hcanvas.width = hero.offsetWidth;
				hcanvas.height = hero.offsetHeight;
			};
			resizeHeroCanvas();
			window.addEventListener("resize", resizeHeroCanvas);

			// Instantiating memory structures for flying atoms
			let pts = [];
			for (let i = 0; i < 55; i++) {
				pts.push({
					x: Math.random() * hero.offsetWidth,
					y: Math.random() * hero.offsetHeight,
					r: Math.random() * 1.8 + 0.4,
					vx: (Math.random() - 0.5) * 0.35,
					vy: (Math.random() - 0.5) * 0.35,
					a: Math.random() * 0.5 + 0.1,
				});
			}

			let timeTick = 0;
			const animationLoop = () => {
				timeTick += 16;

				// Clearing & Redrawing background point-matrix
				hctx.clearRect(0, 0, hcanvas.width, hcanvas.height);
				pts.forEach((p) => {
					p.x += p.vx;
					p.y += p.vy;
					if (p.x < 0) p.x = hcanvas.width;
					if (p.x > hcanvas.width) p.x = 0;
					if (p.y < 0) p.y = hcanvas.height;
					if (p.y > hcanvas.height) p.y = 0;
					hctx.beginPath();
					hctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
					hctx.fillStyle = `rgba(0,174,239,${p.a})`;
					hctx.fill();
				});

				// Drawing atomic linkage lines vectors
				pts.forEach((p, i) => {
					for (let j = i + 1; j < pts.length; j++) {
						const q = pts[j],
							d = Math.hypot(p.x - q.x, p.y - q.y);
						if (d < 85) {
							hctx.beginPath();
							hctx.moveTo(p.x, p.y);
							hctx.lineTo(q.x, q.y);
							hctx.strokeStyle = `rgba(0,174,239,${0.07 * (1 - d / 85)})`;
							hctx.lineWidth = 0.5;
							hctx.stroke();
						}
					}
				});

				// Trigger loop frame iteration on simulated machinery layout
				drawHeroPrinter(pctx, timeTick);
				animationFrameId = requestAnimationFrame(animationLoop);
			};
			animationLoop();

			// Hook context cleanup loop
			return () => {
				window.removeEventListener("resize", resizeHeroCanvas);
				window.removeEventListener("resize", handleMapResize);
				cancelAnimationFrame(animationFrameId);
			};
		}
	}, []);

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
					className="relative z-10 flex flex-wrap items-center justify-center gap-[60px] max-w-[1100px] w-full">
					<div className="flex-1 min-w-70">
						<div className="text-[0.72rem] font-bold tracking-[3px] uppercase text-[#00aeef] mb-3.5">
							Premium Printing Solutions
						</div>
						<div className="flex gap-3 mb-7">
							<div className="w-10 h-10 rounded-t-full rounded-bl-full -rotate-45 transition-all duration-300 cursor-default bg-[#00aeef] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:-rotate-45 hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-t-full rounded-bl-full -rotate-45 transition-all duration-300 cursor-default bg-[#ec008c] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:-rotate-45 hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-t-full rounded-bl-full -rotate-45 transition-all duration-300 cursor-default bg-[#fff200] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:-rotate-45 hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
							<div className="w-10 h-10 rounded-t-full rounded-bl-full -rotate-45 transition-all duration-300 cursor-default bg-[#231f20] shadow-[4px_5px_0_rgba(0,0,0,0.45),0_10px_18px_rgba(0,0,0,0.25)] hover:-rotate-45 hover:scale-130 hover:-translate-y-2 hover:shadow-[5px_8px_0_rgba(0,0,0,0.35),0_18px_28px_rgba(0,0,0,0.3)]" />
						</div>
						<h1 className="text-3xl sm:text-[2.8rem] font-black text-white leading-[1.1] tracking-[-1px] mb-4 shadow-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
							All Types
							<br />
							<em className="not-italic text-[#00aeef]">Printing Solutions</em>
						</h1>
						<p className="text-white/72 text-[0.98rem] leading-relaxed mb-7 max-w-[500px]">
							High-quality digital printing, corporate branding, large-format
							displays, and design — all under one roof in Mumbai.
						</p>
						<div className="flex flex-wrap gap-3">
							<button
								onClick={() => scrollToSection("services")}
								className="bg-gradient-to-br from-[#00aeef] to-[#0080c0] text-white px-7 py-3 rounded-[50px] text-[0.92rem] font-bold cursor-pointer shadow-[0_8px_24px_rgba(0,174,239,0.4)] hover:-translate-y-[3px] hover:shadow-[0_14_32px_rgba(0,174,239,0.5)] transition-all duration-200">
								Explore Services
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="bg-transparent text-white border-2 border-[#8f8f8f] px-7 py-3 rounded-[50px] text-[0.92rem] font-semibold cursor-pointer hover:bg-white/10 hover:border-white/60 transition-all duration-200">
								Get a Quote
							</button>
						</div>
					</div>
					<div className="w-[340px] h-[320px] relative">
						<canvas
							ref={printerCanvasRef}
							width="340"
							height="320"
							className="absolute inset-0"
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
							onMouseLeave={(e) => handleTiltLeave(e)}>
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

			{/* Ribbon Promo Text Break */}
			<div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] px-[5%] py-4 text-center relative overflow-hidden">
				<p className="text-white font-extrabold text-[0.95rem] tracking-[2px] uppercase relative z-10">
					<span className="text-[#fff200] mx-2">✦</span> Designing Work Also
					Done Here <span className="text-[#fff200] mx-2">✦</span>
				</p>
			</div>

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

			{/* Infrastructure Equipment Assets Showcase */}
			<div
				id="machines"
				className="bg-gradient-to-b from-[#f0f4f8] to-[#e6edf5] py-[72px]">
				<div className="max-w-[1160px] mx-auto px-6">
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
							<div className="h-[180px] flex items-center justify-center mb-5">
								<canvas ref={mcanvas1Ref} width="200" height="160" />
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
								<canvas ref={mcanvas2Ref} width="200" height="160" />
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
							<div className="h-[180px] flex items-center justify-center mb-5">
								<canvas ref={mcanvas3Ref} width="200" height="160" />
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

			{/* Finished Output Products Grid Catalog */}
			<div id="products" className="bg-white py-[72px]">
				<div className="max-w-[1160px] mx-auto px-6">
					<div className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#00aeef] mb-2">
						What we produce
					</div>
					<div className="text-3xl sm:text-[2rem] font-black text-[#0a0e1a] tracking-[-0.5px] mb-2.5">
						Our Products
					</div>
					<div className="text-[#777] text-[0.92rem] leading-[1.75] max-w-[440px] mb-9">
						Every item crafted with precision, color accuracy, and premium
						materials.
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
						{products.map((prod, idx) => (
							<div
								key={idx}
								className="rounded-[20px] overflow-hidden bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] cursor-default preserve-3d border border-[#0056b3]/6 transition-shadow duration-300"
								onMouseMove={(e) => handleTiltMove(e, 500, 12, 12, 0, -6)}
								onMouseLeave={(e) => handleTiltLeave(e)}>
								<div
									className={`h-40 relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${prod.bg}`}>
									<canvas id={`prod-canvas-${idx}`} width="200" height="120" />
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
