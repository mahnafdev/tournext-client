import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
	return (
		<Fragment>
			<Toaster
				position="top-left"
				reverseOrder={true}
				toastOptions={{
					duration: 2500,
				}}
			/>
			<Sidebar />
		</Fragment>
	);
};

export default DashboardLayout;
