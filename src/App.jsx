import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import HomePage from "@/pages/HomePage";
import Service from "@/pages/Service";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes that share the main layout */}
				<Route element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<About />} />
					<Route path="services" element={<Service />} />
					<Route path="contact" element={<Contact />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}
