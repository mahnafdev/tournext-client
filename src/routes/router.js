import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
		],
	},
	{
		path: "/",
		Component: AuthLayout,
	},
]);

export default router;
