import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import TourCard from "../shared/TourCard";

const OurTours = () => {
	// Fetch random tours data
	const { data: tours } = useQuery({
		queryKey: ["random-tours"],
		queryFn: async () => {
			const res = await apiClient.get("/tours?random=4");
			return res.data;
		},
	});
	return (
		<div className="flex flex-wrap justify-center gap-6">
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
