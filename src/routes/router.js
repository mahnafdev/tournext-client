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
import DashboardLayout from "../layouts/DashboardLayout";
import MyBookings from "../pages/dashboard/MyBookings";
import TourGuideApplication from "../pages/dashboard/TourGuideApplication";
import PostStory from "../pages/dashboard/PostStory";
import Profile from "../pages/dashboard/Profile";
import ManageUsers from "../pages/dashboard/ManageUsers";
import ManageCandidates from "../pages/dashboard/ManageCandidates";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import ManageStories from "../pages/dashboard/ManageStories";
import MyAssignedTours from "../pages/dashboard/MyAssignedTours";
import Dashboard from "../pages/dashboard/Dashboard";
import TourGuideProfilePage from "../pages/TourGuideProfilePage";

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
				path: "/tours/details/:tour_id",
				Component: ViewTourDetailsPage,
			},
			{
				path: "/stories",
				Component: ViewStoriesPage,
			},
			{
				path: "/tour-guides/details/:guide_id",
				Component: TourGuideProfilePage,
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
			{
				path: "/auth/reset-password",
				Component: ResetPasswordPage,
			},
		],
	},
	{
		path: "/",
		Component: DashboardLayout,
		children: [
			{
				path: "/dashboard",
				Component: Dashboard,
			},
			{
				path: "/profile",
				Component: Profile,
			},
			{
				path: "/dashboard/users",
				Component: ManageUsers,
			},
			{
				path: "/dashboard/tours/post",
				Component: PostTourPage,
			},
			{
				path: "/dashboard/tours/assigned",
				Component: MyAssignedTours,
			},
			{
				path: "/dashboard/my-bookings",
				Component: MyBookings,
			},
			{
				path: "/dashboard/stories/post",
				Component: PostStory,
			},
			{
				path: "/dashboard/stories",
				Component: ManageStories,
			},
			{
				path: "/dashboard/candidates",
				Component: ManageCandidates,
			},
			{
				path: "/dashboard/tour-guide-application",
				Component: TourGuideApplication,
			},
		],
	},
]);

export default router;
