// Reusable card 3D tilt tracking effect
export const handleTiltMove = (
	e,
	perspective = 600,
	rotX = 14,
	rotY = 14,
	transZ = 0,
	transY = 0,
	isScale = false,
) => {
	const el = e.currentTarget;
	const r = el.getBoundingClientRect();
	const x = (e.clientX - r.left) / r.width - 0.5;
	const y = (e.clientY - r.top) / r.height - 0.5;

	let transformStr = `perspective(${perspective}px) rotateX(${-y * rotX}deg) rotateY(${x * rotY}deg)`;
	if (transZ) transformStr += ` translateZ(${transZ}px)`;
	if (transY) transformStr += ` translateY(${transY}px)`;
	if (isScale) transformStr += ` scale(1.02)`;

	el.style.transform = transformStr;
	if (!isScale) {
		el.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(0,86,179,0.15)`;
	}
};

// Helper handling smooth interactive navigation scrolling
export const scrollToSection = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export const handleTiltLeave = (e, defaultTransform = "") => {
	const el = e.currentTarget;
	el.style.transform = defaultTransform;
	el.style.boxShadow = "";
	el.style.transition = "transform 0.5s, box-shadow 0.5s";
	setTimeout(() => {
		el.style.transition = "";
	}, 500);
};
