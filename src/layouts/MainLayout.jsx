import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
// import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Topbar />
			{/* <Toaster position="top-center" /> */}
			<main className="grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
