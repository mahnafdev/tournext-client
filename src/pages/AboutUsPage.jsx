import {
	TbBrandGithub,
	TbBrandLinkedin,
	TbBrandFacebook,
	TbBrandYoutube,
} from "react-icons/tb";
import ProjectTimelineIcon from "../assets/projects-timeline-icon-pattern.png";

const AboutUsPage = () => {
	// Dev Other Projects Data
	const projects = [
		{
			name: "ZapShift",
			date: "July 2025",
			link: "https://zapshift-55872.web.app",
			description:
				"A B2C parcel management system built for speed and reliability. Includes tracking and commission logic.",
		},
		{
			name: "Gardeneon",
			date: "June 2025",
			link: "https://a10-gardeneon.netlify.app",
			description:
				"An e-commerce platform for modern gardening products. Built with interactive UI and cart system.",
		},
		{
			name: "FledgeJobs",
			date: "June 2025",
			link: "https://fledge-jobs-portal-beryl.vercel.app",
			description:
				"A job board designed for freshers and growing talents. It simplifies job browsing and posting.",
		},
		{
			name: "English Janala",
			date: "March 2025",
			link: "https://riahmad-english-janala.netlify.app",
			description:
				"A beginner-friendly platform to learn English interactively. Built for learners in local communities.",
		},
	];
	return (
		<section className="max-w-sm md:max-w-4xl mx-auto mt-8">
			{/* Section heading */}
			<div className="text-center space-y-2 mb-16">
				<h2 className="text-4xl font-semibold text-primary">About Developer</h2>
				<p className="md:text-lg text-zinc-300">
					Behind every great project, there is a next-level mind. Meet the builder of
					TourNext.
				</p>
			</div>
			{/* Core information */}
			<div className="flex flex-col lg:flex-row justify-center items-center max-lg:text-center gap-4 lg:gap-10 mb-8">
				{/* Dev Image */}
				<img
					src="https://i.ibb.co/cc2cdrBF/me1.jpg"
					alt="Developer"
					className="size-40 rounded-full object-cover object-center border-2 border-accent"
				/>
				{/* Dev Info */}
				<div className="space-y-4">
					<h3 className="text-3xl font-semibold text-white mb-2">Muhammad Ahnaf</h3>
					<p className="text-zinc-300">
						Professionally passionate in Web Development. Loves Reverse Engineering
						(a technique where Analyzation plays the core game) and building
						next-level services like TourNext.
					</p>
				</div>
			</div>
			{/* Social & Tech Stack information */}
			<div className="space-y-5 mb-5">
				{/* Social Links */}
				<div className="flex gap-3">
					<a
						href="https://github.com/mahnafdev"
						target="_blank"
						title="GitHub"
					>
						<TbBrandGithub
							size={32}
							className="hover:stroke-accent transition-colors duration-100"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/mahnafdev"
						target="_blank"
						title="LinkedIn"
					>
						<TbBrandLinkedin
							size={32}
							className="hover:stroke-accent transition-colors duration-100"
						/>
					</a>
					<a
						href="https://www.facebook.com/mahnafdev"
						target="_blank"
						title="Facebook"
					>
						<TbBrandFacebook
							size={32}
							className="hover:stroke-accent transition-colors duration-100"
						/>
					</a>
					<a
						href="https://www.youtube.com/@ninjaquasar"
						target="_blank"
						title="YouTube"
					>
						<TbBrandYoutube
							size={32}
							className="hover:stroke-accent transition-colors duration-100"
						/>
					</a>
				</div>
				{/* Tech Stack */}
				<div className="space-y-3">
					<h4 className="text-2xl font-semibold text-secondary">Tech Stack</h4>
					<div className="flex flex-wrap gap-2">
						<span className="badge badge-outline badge-accent">Tailwind CSS</span>
						<span className="badge badge-outline badge-accent">React.js</span>
						<span className="badge badge-outline badge-accent">Node.js</span>
						<span className="badge badge-outline badge-accent">Express</span>
						<span className="badge badge-outline badge-accent">MongoDB</span>
						<span className="badge badge-outline badge-accent">Firebase Auth</span>
						<span className="badge badge-outline badge-accent">Next.js</span>
						<span className="badge badge-outline badge-accent">C++</span>
						<span className="badge badge-outline badge-accent">Python</span>
						<span className="badge badge-outline badge-accent">Django REST</span>
						<span className="badge badge-outline badge-accent">PostgreSQL</span>
						<span className="badge badge-outline badge-accent">JSON Web Token</span>
						<span className="badge badge-outline badge-accent">Swagger</span>
						<span className="badge badge-outline badge-accent">Git</span>
						<span className="badge badge-outline badge-accent">Netlify</span>
						<span className="badge badge-outline badge-accent">Vercel</span>
						<span className="badge badge-outline badge-accent">
							Firebase Hosting
						</span>
					</div>
				</div>
			</div>
			{/* Other Projects Timeline */}
			<div className="space-y-4">
				<h4 className="text-2xl font-semibold text-primary">Other Projects</h4>
				<ul className="timeline max-md:timeline-compact timeline-vertical gap-y-3">
					{projects.map((project) => (
						<li
							key={project.name}
							className="gap-x-4 lg:gap-x-6"
						>
							<img
								src={ProjectTimelineIcon}
								className="timeline-middle size-20 object-cover rounded-full border-2 border-accent"
							/>
							<div className="timeline-end w-full">
								<p className="text-lg font-light">{project.date}</p>
								<h6 className="text-xl font-medium">{project.name}</h6>
								<p className="mt-2 text-sm text-zinc-300 text-balance">
									{project.description}
								</p>
								<a
									href={project.link}
									target="_blank"
									className="mt-3 btn btn-accent h-9 px-3 text-[1rem] rounded-md"
								>
									Visit Site
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default AboutUsPage;
