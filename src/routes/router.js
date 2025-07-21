import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import PostTourPage from "../pages/tours/PostTourPage";
import AboutUsPage from "../pages/AboutUsPage";
import ViewToursPage from "../pages/tours/ViewToursPage";
import ViewTourDetailsPage from "../pages/tours/ViewTourDetailsPage";
import ViewStoriesPage from "../pages/stories/ViewStoriesPage";

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
				path: "/about",
				Component: AboutUsPage,
			},
			{
				path: "/tours",
				Component: ViewToursPage,
			},
			{
				path: "/tours/post",
				Component: PostTourPage,
			},
			{
				path: "/tours/details/:tour_id",
				Component: ViewTourDetailsPage,
			},
			{
				path: "/stories",
				Component: ViewStoriesPage,
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
