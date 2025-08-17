import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import TourCard from "../shared/TourCard";

const OurTours = () => {
	// Fetch random tours data
	const { data: tours } = useQuery({
		queryKey: ["random-tours"],
		queryFn: async () => {
			const res = await apiClient.get("/tours?random=3");
			return res.data;
		},
	});
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-self-center gap-4 md:gap-6">
			{tours?.map((tour) => (
				<TourCard
					key={tour.tour_id}
					tourData={tour}
				/>
			))}
		</div>
	);
};

export default OurTours;
