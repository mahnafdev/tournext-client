import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import SeaBeach from "../../assets/hero/sea-beach.jpg";
import Mountains from "../../assets/hero/mountains.jpg";
import River from "../../assets/hero/river.jpg";
import ForestRiver from "../../assets/hero/forest-river.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section
			id="hero"
			role="banner"
			className="space-y-4 lg:space-y-6"
		>
			{/* Slogan */}
			<motion.h1
				className="max-sm:h-16 text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center"
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
						duration: 1,
						type: "tween",
					},
					scale: {
						duration: 0.6,
						type: "tween",
					},
				}}
			>
				<Typewriter
					words={[
						"Next-Level Tourism Starts Here.",
						"Explore Smarter, Travel Nicer.",
					]}
					typeSpeed={90}
					delaySpeed={2000}
					loop={0}
					cursor
					cursorStyle=" <"
				/>
			</motion.h1>
			{/* Sub-text */}
			<p className="max-sm:text-sm max-w-6xl mx-auto text-center">
				Whether you're a traveler or a tour guide, TourNext provides a scalable system.
				Travelers can explore & book a tour, track his/her bookings. Tour Guides can
				publish & manage a tour, track & approve traveler's bookings. The automated and
				flexible journey – is provided by us.
			</p>
			{/* Call To Action */}
			<div className="text-center animate-bounce">
				<Link to="/tours">
					<button
						type="button"
						className="btn md:btn-lg btn-primary"
					>
						Start Exploring
					</button>
				</Link>
			</div>
			{/* Carousel images */}
			<motion.div
				initial={{
					y: 300,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 100,
				}}
				transition={{
					opacity: {
						duration: 0.8,
						type: "tween",
					},
					y: {
						duration: 0.5,
						type: "tween",
					},
				}}
			>
				<Carousel
					autoPlay
					infiniteLoop
					showStatus={false}
					transitionTime={500}
					useKeyboardArrows
				>
					<div className="hero-slide">
						<img
							src={Mountains}
							alt="Mountain"
							className="hero-slide-image max-h-[65vh] object-cover object-center rounded-2xl  md:rounded-4xl"
						/>
					</div>
					<div className="hero-slide">
						<img
							src={ForestRiver}
							alt="Forest River"
							className="hero-slide-image max-h-[65vh] object-cover object-center rounded-2xl md:rounded-4xl"
						/>
					</div>
					<div className="hero-slide">
						<img
							src={SeaBeach}
							alt="Sea Beach"
							className="hero-slide-image max-h-[65vh] object-cover object-center rounded-2xl md:rounded-4xl"
						/>
					</div>
					<div className="hero-slide">
						<img
							src={River}
							alt="River"
							className="hero-slide-image max-h-[65vh] object-cover object-center rounded-2xl md:rounded-4xl"
						/>
					</div>
				</Carousel>
			</motion.div>
		</section>
	);
};

export default Hero;
