import GetApp from "../components/home/GetApp";
import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";
import TopStories from "../components/home/TopStories";
import TourInsights from "../components/home/TourInsights";
import TourismCountries from "../components/home/TourismCountries";
import TravelEssentials from "../components/home/TravelEssentials";

const HomePage = () => {
	return (
		<main
			id="home-page"
			className="m-4 md:m-12 space-y-24"
		>
			<Hero />
			<Overview />
			<TourismCountries />
			<TourInsights />
			<TopStories />
			<TravelEssentials />
			<GetApp />
		</main>
	);
};

export default HomePage;
