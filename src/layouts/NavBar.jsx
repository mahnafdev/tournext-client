import { Link, NavLink } from "react-router";
import Logo from "../components/shared/Logo";
import "./NavBar.css";
import { TbBrandGithub, TbMenu2 } from "react-icons/tb";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const { loading, user } = useAuth();
	return (
		<header className="sticky top-1 z-[99]">
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
					className="hidden md:flex items-center gap-x-1 lg:gap-x-3 text-lg font-semibold"
				>
					{/* 'Login' Button */}
					{!loading && !user && (
						<Link to="/auth/login">
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
						className="nav-button"
					>
						<button
							type="button"
							className="btn lg:btn-lg btn-primary rounded-lg"
						>
							Be A Sponsor
						</button>
					</Link>
					{user &&
						(user.photoURL ? (
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
						))}
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
		</header>
	);
};

export default NavBar;
