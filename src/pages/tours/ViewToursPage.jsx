import apiClient from "../../services/apiClient";
import TourCard from "../../components/shared/TourCard";
import { useQuery } from "@tanstack/react-query";

const ViewToursPage = () => {
	// Fetch tours data
	const { data: tours } = useQuery({
		queryKey: ["all-tours"],
		queryFn: async () => {
			const res = await apiClient.get("/tours");
			return res.data;
		},
	});
	return (
		<main className="mx-4 my-10 md:m-12 space-y-10">
			{/* Page heading and subtext */}
			<div className="space-y-2">
				{/* Heading */}
				<h2 className="text-4xl font-semibold text-primary text-center">
					View All Tours
				</h2>
				{/* Subtext */}
				<p className="text-zinc-300 text-center">
					View and book our next-level tours with smart guide and nice services.
				</p>
			</div>
			{/* Display Tours in Masonry Grid layout */}
			<div className="flex flex-wrap justify-center gap-6">
				{tours?.map((tour) => (
					<TourCard
						key={tour.tour_id}
						tourData={tour}
					/>
				))}
			</div>
		</main>
	);
};

export default ViewToursPage;
