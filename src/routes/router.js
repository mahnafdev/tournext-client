import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import PostTourPage from "../pages/tours/PostTourPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/tours/post",
				Component: PostTourPage,
			},
		],
	},
	{
		path: "/",
		Component: AuthLayout,
		children: [
			{
				path: "/auth/login",
				Component: LoginPage,
			},
			{
				path: "/auth/signup",
				Component: SignUpPage,
			},
		],
	},
]);

export default router;
