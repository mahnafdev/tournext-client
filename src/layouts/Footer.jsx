import { Link } from "react-router";
import Logo from "../components/shared/Logo";
import {
	TbBrandFacebook,
	TbBrandGithub,
	TbBrandLinkedin,
	TbBrandX,
	TbBrandYoutube,
} from "react-icons/tb";
import { motion } from "motion/react";

const Footer = () => {
	return (
		<motion.footer
			id="footer"
			className="mx-4 md:mx-12 mt-24 mb-4 bg-base-300 text-neutral p-6 lg:px-24 lg:py-20 rounded-4xl flex flex-col items-center gap-y-8"
			initial={{
				y: 150,
				opacity: 0,
			}}
			whileInView={{
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
			{/* Footer Head part */}
			<div
				id="footer-head"
				className="flex flex-col items-center gap-y-4"
			>
				{/* Platform Logo */}
				<Logo />
				{/* Slogan */}
				<p className="text-center text-balance">
					Explore Smarter, Travel Nicer. Next-Level Tourism starts here.
				</p>
			</div>
			{/* A horizontal divider */}
			<div className="w-full border border-dashed border-accent/70"></div>
			{/* Useful links */}
			<div className="lg:w-3/5 space-y-4">
				{/* Legal links */}
				<div className="flex flex-col md:flex-row md:items-center justify-between max-md:gap-y-3 md:gap-x-8 lg:gap-x-0">
					<h6 className="text-lg font-semibold">Legal</h6>
					<ul className="flex gap-2 flex-wrap">
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
				<div className="flex flex-col md:flex-row md:items-center justify-between max-md:gap-y-3 md:gap-x-8 lg:gap-x-0">
					<h6 className="text-lg font-semibold">Services</h6>
					<ul className="flex gap-2 flex-wrap">
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
			<div className="w-full border border-dashed border-accent/70"></div>
			{/* Developer Social links */}
			<div
				id="footer-socials"
				className="flex gap-x-2 md:gap-x-4"
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
		</motion.footer>
	);
};

export default Footer;
