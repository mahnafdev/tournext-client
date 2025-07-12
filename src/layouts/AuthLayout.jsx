import AuthLottie from "../assets/lotties/auth.json";
import { Outlet } from "react-router";
import Logo from "../components/shared/Logo";
import { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";

const AuthLayout = () => {
	return (
		<>
			{/* Toast container from Hot Toast */}
			<Toaster />
			{/* The page in a 2-column layout */}
			<div className="grid grid-cols-2">
				{/* Logo and page in the left */}
				<div className="flex gap-4 px-12 py-8">
					{/* Logo */}
					<Logo />
					{/* Page content */}
					<div className="h-full flex items-center">
						<Outlet />
					</div>
				</div>
				{/* Image with a background color in the right */}
				<div className="min-h-screen h-full bg-primary/25 grid place-items-center">
					<Lottie
						animationData={AuthLottie}
						loop={false}
						className="min-w-sm max-w-xl"
					/>
				</div>
			</div>
		</>
	);
};

export default AuthLayout;
