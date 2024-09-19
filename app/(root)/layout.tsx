import MobileNav from "@/components/ui/shared/MobileNav";
import Sidebar from "@/components/ui/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="root">
			<Sidebar />
			<MobileNav />
			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>

			<Toaster />
		</main>
	);
};

export default Layout;
