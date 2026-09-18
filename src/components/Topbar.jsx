import { faPrint } from "@fortawesome/free-solid-svg-icons";
import {
    faBars,
    faXmark,
    faBriefcase,
    faEnvelopeCircleCheck,
    faHouse,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { label: "Home", path: "/", icon: faHouse },
    { label: "About", path: "/about", icon: faUser },
    { label: "Service", path: "/services", icon: faBriefcase },
    { label: "Print-job", path: "/print-job", icon: faPrint },
    { label: "Contact", path: "/contact", icon: faEnvelopeCircleCheck },
];

const TopBar = () => {
    const [open, setOpen] = useState(false);

    return (
        /* Dynamic printing blue glassmorphism theme */
        <nav className="sticky top-0 w-full z-50 bg-[#001f4d]/80 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo1.png`}
                            className="w-9 h-9 object-contain drop-shadow-sm"
                            alt="Logo"
                        />
                        <span className="text-xl font-bold text-white tracking-tight">
                            RKD <span className="text-[#00aeef]">Printing</span>
                        </span>
                    </div>

                    {/* Desktop Menu - Floating Glass Pill Effect */}
                    <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-lg px-2 py-1 rounded-full border border-white/15 shadow-sm">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "bg-gradient-to-r from-[#00aeef] to-[#0056b3] text-white shadow-md shadow-[#00aeef]/30"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`
                                }>
                                <FontAwesomeIcon icon={item.icon} className="text-sm" />
                                <span className="hidden lg:block">{item.label}</span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <FontAwesomeIcon icon={open ? faXmark : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown - Floating Glass Card */}
            <div
                className={`absolute right-4 top-16 w-52 rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
                    open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
                } bg-[#001f4d]/95 backdrop-blur-xl md:hidden`}>
                <ul className="flex flex-col p-2">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                                        isActive
                                            ? "bg-gradient-to-r from-[#00aeef] to-[#0056b3] text-white font-semibold"
                                            : "text-white/80 hover:bg-white/10 hover:text-white"
                                    }`
                                }>
                                <FontAwesomeIcon icon={item.icon} className="w-5" />
                                <span className="font-medium">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TopBar;