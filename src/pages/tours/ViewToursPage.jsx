import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import TourCard from "../../components/shared/TourCard";

const ViewToursPage = () => {
	const [tours, setTours] = useState([]);
	useEffect(() => {
		apiClient
			.get("/tours")
			.then((res) => setTours(res.data))
			.catch((error) => {
				console.log(`Axios Error: ${error.message}`);
			});
	}, []);
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
				{tours.map((tour) => (
					<TourCard
						key={tour._id}
						tourData={tour}
					/>
				))}
			</div>
		</main>
	);
};

export default ViewToursPage;
