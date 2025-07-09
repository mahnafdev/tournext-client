import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<Fragment>
			<NavBar />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
