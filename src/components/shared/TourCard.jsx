import { TbArrowBigDownLine, TbArrowBigDownLineFilled } from "react-icons/tb";
import { Link } from "react-router";

const TourCard = ({ tourData }) => {
	const { tour_id: tourId, images, tour, location } = tourData;
	const tourTypeSplitted = tour?.type?.split(" ");
	const tourType = tourTypeSplitted
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join("-");
	return (
		<div className="w-sm h-full bg-base-300 border border-accent/75 rounded-3xl">
			{/* Thumbnail Image */}
			<img
				src={images?.thumbnail}
				alt="Thumbnail Image"
				className="rounded-t-3xl w-full h-64 object-cover object-center hover:grayscale-75 transition-[filter]"
			/>
			{/* Tour Content */}
			<div className="m-4 flex flex-col gap-y-3">
				{/* Tour Title */}
				<h4 className="text-2xl font-semibold">{tour?.title}</h4>
				{/* Tour Type & Status */}
				<div className="flex gap-2">
					{/* Tour Type */}
					<span
						className="badge badge-neutral"
						title="Tour Type"
					>
						{tourType}
					</span>
					{/* Tour Status */}
					<span
						className="badge badge-neutral"
						title="Tour Status"
					>
						{tour?.status[0].toUpperCase()}
						{tour?.status.slice(1)}
					</span>
				</div>
				{/* Tour Summary */}
				<p className="text-sm line-clamp-2">{tour?.summary}</p>
				{/* Trip Departure & Destination */}
				<p className="flex flex-col">
					{/* Departure */}
					<span
						className="badge badge-outline badge-neutral text-zinc-100"
						title="Departure"
					>
						{location?.departure}
					</span>
					{/* Divider */}
					<span className="m-1">
						<TbArrowBigDownLine size={20} />
					</span>
					{/* Departure */}
					<span
						className="badge badge-outline badge-neutral text-zinc-100"
						title="Destination"
					>
						{location?.destination}
					</span>
				</p>
				{/* Trip Price */}
				<p>
					<span className="badge badge-outline badge-neutral">${tour?.price}</span>{" "}
					per person
				</p>
				{/* View Details button-link */}
				<Link
					to={`/tours/details/${tourId}`}
					target="_blank"
					className="self-end"
				>
					<button
						type="button"
						className="btn btn-accent text-[1rem] rounded-md"
					>
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
};

export default TourCard;
