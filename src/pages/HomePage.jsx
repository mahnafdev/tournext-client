import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";
import TravelEssentials from "../components/home/TravelEssentials";

const HomePage = () => {
	return (
		<main className="m-4 md:m-12 space-y-24">
			<Hero />
			<Overview />
			<TravelEssentials />
		</main>
	);
};

export default HomePage;
