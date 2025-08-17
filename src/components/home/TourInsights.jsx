import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import TourCard from "../shared/TourCard";
import OurTours from "./OurTours";
import OurTourGuides from "./OurTourGuides";

const TourInsights = () => {
	// Fetch random tours data
	const { data: tours } = useQuery({
		queryKey: ["random-tours"],
		queryFn: async () => {
			const res = await apiClient.get("/tours?random=4");
			return res.data;
		},
	});
	return (
		<section
			id="tour-insights-section"
			className="space-y-10"
		>
			<div className="text-center space-y-3">
				{/* Section Title */}
				<h2 className="text-secondary text-4xl font-semibold">
					Tourism & Travel Guide
				</h2>
				{/* Section Subtext */}
				<p className="text-zinc-200 text-balance">
					Meet with some of our next-level tours and professional tour guides –
					totally travel insights.
				</p>
			</div>
			{/* Tabs */}
			<div className="tabs tabs-box justify-center mx-auto bg-neutral-content">
				{/* 'Our Tours' Tab */}
				<input
					type="radio"
					name="tour_insights_tabs"
					className="tab text-[1rem] font-medium !text-zinc-300"
					aria-label="Our Tours"
					defaultChecked
				/>
				<div className="tab-content bg-base-100 max-md:px-4 py-12 text-start">
					<OurTours />
				</div>
				{/* 'Our Tour Guides' Tab */}
				<input
					type="radio"
					name="tour_insights_tabs"
					className="tab text-[1rem] font-medium !text-zinc-300"
					aria-label="Our Tour Guides"
				/>
				<div className="tab-content bg-base-100 max-md:px-4 py-12 text-start">
					<OurTourGuides />
				</div>
			</div>
		</section>
	);
};

export default TourInsights;
