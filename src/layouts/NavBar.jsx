import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../components/shared/Logo";
import "./NavBar.css";
import { TbBrandGithub, TbMenu2 } from "react-icons/tb";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const NavBar = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const { loading, user, logout } = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		logout()
			.then((authCredentials) => {
				toast.success("Logged out successfully");
				setTimeout(() => {
					navigate("/auth/login");
				}, 2500);
			})
			.catch((error) => {
				console.log(`${error?.message} [${error?.code}]`);
				toast.error("Couldn't logout from account. Please try once more?");
			});
	};
	return (
		<motion.header
			className="sticky top-1 z-[99]"
			initial={{
				y: -150,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 100,
			}}
			transition={{
				opacity: {
					duration: 0.5,
					type: "tween",
				},
				y: {
					duration: 0.8,
					type: "spring",
				},
			}}
		>
			<nav
				id="navbar"
				className="mx-2 lg:mx-12 my-4 px-6 lg:px-8 py-3 lg:py-4 bg-base-100/75 backdrop-blur-md rounded-full flex items-center justify-between shadow shadow-primary/50"
			>
				{/* Mobile Menu */}
				<div className="lg:hidden relative">
					{/* Menu Toggle */}
					<button
						type="button"
						className="btn btn-circle btn-ghost"
						onClick={() => setIsShowMenu(!isShowMenu)}
					>
						<TbMenu2 size={28} />
					</button>
					{/* Menu Bar */}
					<div
						className={`bg-base-300/96 w-64 h-[40rem] md:h-[20rem] rounded-r-2xl space-y-2 border border-primary ${
							isShowMenu ? "absolute top-14 -left-8" : "hidden"
						}`}
					>
						{/* Menu Links */}
						<ul className="menu w-full text-[1rem]">
							<li>
								<NavLink
									to="/"
									className="rounded-lg py-2"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className="rounded-lg py-2"
								>
									About Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/tours"
									className="rounded-lg py-2"
								>
									Tours
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/community"
									className="rounded-lg py-2"
								>
									Community
								</NavLink>
							</li>
						</ul>
						{/* Menu Buttons */}
						<div className="md:hidden flex flex-col gap-y-2 ml-4">
							<Link to="/auth/login">
								<button
									type="button"
									className="btn btn-lg btn-outline btn-neutral rounded-lg"
								>
									Login
								</button>
							</Link>
							<Link
								to="/sponsorship"
								className="nav-button"
							>
								<button
									type="button"
									className="btn btn-lg btn-primary rounded-lg"
								>
									Be A Sponsor
								</button>
							</Link>
							<a
								href="https://github.com/ninjaquasar/tournext-client?ref=tournext"
								target="_blank"
								className="nav-button"
							>
								<button
									type="button"
									className="btn px-2 bg-neutral rounded-lg"
									title="GitHub Repository"
								>
									<TbBrandGithub
										size={24}
										className="text-neutral-content"
									/>
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* Logo */}
				<Logo />
				{/* Navigation Links Bar */}
				<ul
					id="nav-links"
					className="hidden lg:flex items-center gap-x-2"
				>
					{/* 'Home' Link */}
					<li className="nav-link">
						<NavLink
							to="/"
							className="px-4 py-2.5 rounded-full hover:bg-primary/20 active:bg-primary/30"
						>
							Home
						</NavLink>
					</li>
					{/* 'About Us' Link */}
					<li className="nav-link">
						<NavLink
							to="/about"
							className="px-4 py-2.5 rounded-full hover:bg-primary/20 active:bg-primary/30"
						>
							About Us
						</NavLink>
					</li>
					{/* 'Tours' Link */}
					<li className="nav-link">
						<NavLink
							to="/tours"
							className="px-4 py-2.5 rounded-full hover:bg-primary/20 active:bg-primary/30"
						>
							Tours
						</NavLink>
					</li>
					{/* 'Community' Link */}
					<li className="nav-link">
						<NavLink
							to="/community"
							className="px-4 py-2.5 rounded-full hover:bg-primary/20 active:bg-primary/30"
						>
							Community
						</NavLink>
					</li>
				</ul>
				{/* Call-To-Action Buttons */}
				<div
					id="nav-buttons"
					className="flex items-center gap-x-1 lg:gap-x-3 text-lg font-semibold"
				>
					{/* 'Login' Button */}
					{!loading && !user && (
						<Link
							to="/auth/login"
							className="max-md:hidden"
						>
							<button
								type="button"
								className="btn btn-lg btn-outline btn-neutral rounded-lg"
							>
								Login
							</button>
						</Link>
					)}
					{/* 'Be A Sponsor' Button */}
					<Link
						to="/sponsorship"
						className="nav-button max-sm:hidden"
					>
						<button
							type="button"
							className="btn lg:btn-lg btn-primary rounded-lg"
						>
							Be A Sponsor
						</button>
					</Link>
					{user && (
						<div className="dropdown dropdown-end">
							<button
								type="button"
								className="grid place-items-center cursor-pointer"
							>
								{user.photoURL ? (
									<img
										src={user.photoURL}
										alt="User Image"
										className="size-10 border border-accent rounded-full"
										referrerPolicy="no-referrer"
									/>
								) : (
									<div className="size-10 text-2xl bg-neutral  text-neutral-content border border-accent rounded-full grid place-items-center cursor-pointer">
										{user?.displayName?.charAt(0).toUpperCase() || "?"}
									</div>
								)}
							</button>
							<ul className="dropdown-content menu bg-base-300 rounded-2xl w-48 mt-2 p-2 drop-shadow-[0_8px_4px_#111718]">
								<li>
									<h5
										className="text-[1rem] font-bold text-secondary leading-7 line-clamp-1"
										title={user.displayName}
									>
										{user.displayName}
									</h5>
									<p className="text-zinc-300 font-medium text-xs -mt-2">
										{user.email}
									</p>
								</li>
								<li>
									<Link to="/dashboard/profile">Profile</Link>
								</li>
								<li>
									<Link to="/dashboard">Dashboard</Link>
								</li>
								<button
									type="button"
									className="m-2 btn btn-accent btn-outline w-fit text-[1rem] rounded-md"
									onClick={handleLogout}
								>
									Logout
								</button>
							</ul>
						</div>
					)}
					{/* 'GitHub Repository' Button */}
					<a
						href="https://github.com/ninjaquasar/tournext-client?ref=tournext"
						target="_blank"
						className="nav-button"
					>
						<button
							type="button"
							className="btn px-2 bg-neutral rounded-lg"
							title="GitHub Repository"
						>
							<TbBrandGithub
								size={24}
								className="text-neutral-content"
							/>
						</button>
					</a>
				</div>
			</nav>
		</motion.header>
	);
};

export default NavBar;
