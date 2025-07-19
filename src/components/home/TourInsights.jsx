import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import TourCard from "../shared/TourCard";

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
			className="space-y-12"
		>
			<div className="text-center space-y-3">
				{/* Section Title */}
				<h2 className="text-secondary text-4xl font-semibold">
					Tourism & Travel Guide
				</h2>
				{/* Section Subtext */}
				<p className="text-zinc-200">
					Meet with some of our next-level tours and professional tour guides –
					totally travel insights.
				</p>
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
					<div className="tab-content bg-base-100 py-12 text-start">
						<div className="flex flex-wrap justify-center gap-6">
							{tours?.map((tour) => (
								<TourCard
									key={tour.tour_id}
									tourData={tour}
								/>
							))}
						</div>
					</div>
					<input
						type="radio"
						name="tour_insights_tabs"
						className="tab text-[1rem] font-medium !text-zinc-300"
						aria-label="Our Tour Guides"
					/>
				</div>
			</div>
		</section>
	);
};

export default TourInsights;
