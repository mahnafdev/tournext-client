import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
	return (
		<Fragment>
			<Toaster
				position="top-left"
				reverseOrder={true}
				toastOptions={{
					duration: 2500,
				}}
			/>
			<NavBar />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
