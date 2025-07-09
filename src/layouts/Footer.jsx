import { Link } from "react-router";
import Logo from "../components/shared/Logo";
import {
	TbBrandFacebook,
	TbBrandGithub,
	TbBrandLinkedin,
	TbBrandX,
	TbBrandYoutube,
} from "react-icons/tb";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="mx-12 my-4 bg-neutral text-neutral-content px-24 py-20 rounded-2xl flex flex-col items-center gap-y-8"
		>
			{/* Footer Head part */}
			<div
				id="footer-head"
				className="flex flex-col items-center gap-y-4"
			>
				{/* Platform Logo */}
				<Logo />
				{/* Slogan */}
				<p className="text-center">
					Explore Smarter, Travel Nicer. Next-Level Tourism starts here.
				</p>
			</div>
			{/* A horizontal divider */}
			<div className="w-full border border-dashed border-accent"></div>
			{/* Useful links */}
			<div className="w-3/5 space-y-4">
				{/* Legal links */}
				<div className="flex items-center justify-between">
					<h6 className="text-lg font-semibold">Legal</h6>
					<ul className="flex gap-2">
						{/* 'Terms & Conditions' link */}
						<li>
							<Link
								to="/policy/terms"
								className="hover:text-accent hover:underline hover:underline-offset-2 transition-colors"
							>
								Terms & Conditions
							</Link>
						</li>
						<span className="font-medium">|</span>
						{/* 'Payment Policy' link */}
						<li>
							<Link
								to="/policy/payment"
								className="hover:text-accent hover:underline hover:underline-offset-2 transition-colors"
							>
								Payment Policy
							</Link>
						</li>
						<span className="font-medium">|</span>
						{/* 'Refund Policy' link */}
						<li>
							<Link
								to="/policy/refund"
								className="hover:text-accent hover:underline hover:underline-offset-2 transition-colors"
							>
								Refund Policy
							</Link>
						</li>
					</ul>
				</div>
				{/* Services links */}
				<div className="flex items-center justify-between">
					<h6 className="text-lg font-semibold">Services</h6>
					<ul className="flex gap-2">
						{/* 'Community' link */}
						<li>
							<Link
								to="/community"
								className="hover:text-accent hover:underline hover:underline-offset-2 transition-colors"
							>
								Community
							</Link>
						</li>
						<span className="font-medium">|</span>
						{/* 'All Tours' link */}
						<li>
							<Link
								to="/tours"
								className="hover:text-accent hover:underline hover:underline-offset-2 transition-colors"
							>
								All Tours
							</Link>
						</li>
						<span className="font-medium">|</span>
						{/* 'Usage Guide' link */}
						<li>
							<Link
								to="/guide"
								className="hover:text-accent hover:underline hover:underline-offset-2 transition-colors"
							>
								Usage Guide
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* A horizontal divider */}
			<div className="w-full border border-dashed border-accent"></div>
			{/* Developer Social links */}
			<div
				id="footer-socials"
				className="flex gap-x-4"
			>
				{/* LinkedIn Profile */}
				<a
					href="https://www.linkedin.com/in/riaurko"
					target="_blank"
					title="LinkedIn"
				>
					<TbBrandLinkedin
						size={36}
						className="hover:stroke-accent transition-colors duration-100"
					/>
				</a>
				{/* GitHub Profile */}
				<a
					href="https://github.com/ninjaquasar"
					target="_blank"
					title="GitHub"
				>
					<TbBrandGithub
						size={36}
						className="hover:stroke-accent transition-colors duration-100"
					/>
				</a>
				{/* X (Twitter) Profile */}
				<a
					href="https://x.com/riaurko"
					target="_blank"
					title="X (formerly Twitter)"
				>
					<TbBrandX
						size={36}
						className="hover:stroke-accent transition-colors duration-100"
					/>
				</a>
				{/* Facebook Profile */}
				<a
					href="https://www.facebook.com/riaurko"
					target="_blank"
					title="Facebook"
				>
					<TbBrandFacebook
						size={36}
						className="hover:stroke-accent transition-colors duration-100"
					/>
				</a>
				{/* YouTube Profile */}
				<a
					href="https://www.youtube.com/@ninjaquasar"
					target="_blank"
					title="YouTube"
				>
					<TbBrandYoutube
						size={36}
						className="hover:stroke-accent transition-colors duration-100"
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
