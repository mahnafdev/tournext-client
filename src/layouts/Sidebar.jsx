import { NavLink, Outlet } from "react-router";
import Logo from "../components/shared/Logo";

const Sidebar = () => {
	return (
		<div className="drawer drawer-open">
			{/* Sidebar toggle */}
			<input
				id="dashboard-sidebar"
				type="checkbox"
				className="drawer-toggle"
			/>
			{/* Main page content */}
			<div className="drawer-content p-8">
				<Outlet />
			</div>
			{/* Visual Sidebar */}
			<div className="drawer-side">
				<label
					htmlFor="dashboard-sidebar"
					aria-label="Close Sidebar"
					className="drawer-overlay"
				></label>
				{/* Sidebar content */}
				<div className="bg-base-300 h-full w-72 px-6 py-8">
					{/* Logo */}
					<Logo />
					{/* Navigation links */}
					<ul className="menu w-60 mt-10 px-0 text-[1rem] space-y-1">
						<li>
							<NavLink
								to="/profile"
								className="rounded-md"
							>
								Profile
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/my-bookings"
								className="rounded-md"
							>
								My Bookings
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/stories"
								className="rounded-md"
							>
								Manage Stories
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/stories/post"
								className="rounded-md"
							>
								Post Story
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/tour-guide-application"
								className="rounded-md"
							>
								Join as Tour Guide
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/tours/post"
								className="rounded-md"
							>
								Post Tour
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/users"
								className="rounded-md"
							>
								Manage Users
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/candidates"
								className="rounded-md"
							>
								Manage Candidates
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
