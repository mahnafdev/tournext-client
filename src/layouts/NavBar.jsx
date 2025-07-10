import { Link, NavLink } from "react-router";
import Logo from "../components/shared/Logo";
import "./NavBar.css";
import { TbBrandGithub } from "react-icons/tb";

const NavBar = () => {
	return (
		<header className="sticky top-1 z-[99]">
			<nav
				id="navbar"
				className="mx-12 my-4 px-8 py-4 bg-base-100/95 rounded-full flex items-center justify-between shadow shadow-primary/50"
			>
				{/* Logo */}
				<Logo />
				{/* Navigation Links Bar */}
				<ul
					id="nav-links"
					className="flex items-center gap-x-2"
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
					className="flex items-center gap-x-3 text-lg font-semibold"
				>
					{/* 'Login' Button */}
					<Link
						to="/auth/login"
						className="nav-button"
					>
						<button
							type="button"
							className="btn btn-lg btn-outline btn-neutral rounded-lg"
						>
							Login
						</button>
					</Link>
					{/* 'Be A Sponsor' Button */}
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
