import { Link } from "react-router";
import ShortVideo from "../../assets/overview/overview-short-video.mp4";
import { motion } from "motion/react";

const Overview = () => {
	return (
		<motion.section
			id="overview-section"
			className="relative w-full h-[28.125rem] md:h-[31.25rem] lg:h-[37.5rem] overflow-hidden rounded-3xl md:rounded-4xl"
			initial={{
				scale: 0,
				opacity: 0,
			}}
			whileInView={{
				scale: 1,
				opacity: 100,
			}}
			transition={{
				opacity: {
					duration: 0.7,
					type: "tween",
				},
				scale: {
					duration: 0.8,
					type: "spring",
				},
			}}
		>
			{/* Background Video */}
			<video
				src={ShortVideo}
				autoPlay
				muted
				loop
				className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl md:rounded-4xl"
			/>
			{/* Dark Overlay Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/55 rounded-3xl z-10" />
			{/* Section Text Content */}
			<div className="relative z-20 flex flex-col items-center justify-center h-full space-y-5 text-center mx-4">
				<h2 className="text-2xl md:text-4xl font-semibold">
					Next-Level Abilities for Travelers & Tour Guides
				</h2>
				<p className="max-w-4xl">
					TourNext connects travelers and tour guides through a automated & scalable
					system. From booking to tracking tours, every step is flexible and
					automated.
				</p>
				<Link
					to="/src/assets/overview/overview-full-video.mp4"
					target="_blank"
				>
					<button
						type="button"
						className="btn btn-lg btn-secondary"
					>
						Watch the Full Experience
					</button>
				</Link>
			</div>
		</motion.section>
	);
};

export default Overview;
