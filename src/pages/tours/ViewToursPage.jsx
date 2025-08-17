import apiClient from "../../services/apiClient";
import TourCard from "../../components/shared/TourCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ViewToursPage = () => {
	// States
	const [sortByPrice, setSortByPrice] = useState("0");
	// Fetch tours data
	const { data: tours } = useQuery({
		queryKey: ["all-tours", sortByPrice],
		queryFn: async () => {
			const res = await apiClient.get(`/tours?sort=${sortByPrice}`);
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
			{/* Sort */}
			<label className="w-fit flex flex-col gap-y-1 text-[1rem]">
				<span className="label text-zinc-300 font-medium">Sort by Price</span>
				<select
					name="sort_price"
					value={sortByPrice}
					onChange={(e) => setSortByPrice(e.target.value)}
					className="select select-accent w-36 bg-base-300 pl-2 border border-accent/60 focus:outline-none focus:border-accent"
					required
				>
					<option value="0">None</option>
					<option value="1">Ascending</option>
					<option value="-1">Descending</option>
				</select>
			</label>
			{/* Display Tours in Grid layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-self-center gap-6">
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
