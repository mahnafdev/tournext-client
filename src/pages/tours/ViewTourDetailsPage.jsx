import { useParams } from "react-router";
import apiClient from "../../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const ViewTourDetailsPage = () => {
	// Get tour_id from route parameters
	const { tour_id } = useParams();
	// Fetch tour data
	const { data: tourData } = useQuery({
		queryKey: ["tour-details", tour_id],
		queryFn: async () => {
			const res = await apiClient.get(`/tours/${tour_id}`);
			return res.data;
		},
	});
	// Import necessary states & functions from React-Hook-Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	// Currently logged-in user info
	const { user } = useAuth();
	// Destructure tour data
	const {
		tour_id: tour_tracking_id,
		images,
		tour,
		location,
		timing,
		services,
		itinerary,
	} = tourData || {};
	// Handle tour booking
	const handleBooking = (data) => {
		console.log(data);
	};
	return (
		<main className="mx-12 my-6 space-y-12">
			{/* Tour ID */}
			<h6
				className="mb-4 text-xl text-center font-medium text-zinc-300"
				title="Tour ID"
			>
				#{tour_tracking_id?.toUpperCase()}
			</h6>
			{/* Image Gallery */}
			<div className="flex flex-wrap justify-center gap-2">
				{images?.gallery?.map((image, index) => (
					<div className="w-sm aspect-[4/3] rounded-lg">
						<img
							src={image}
							alt={`Gallery Image ${index}`}
							className="w-full h-full object-cover object-center rounded-lg hover:scale-103 transition-transform duration-200"
						/>
					</div>
				))}
			</div>
			{/* Other Information */}
			<div className="flex items-center justify-center gap-12">
				{/* Tour ID */}
				{/* Thumbnail Image */}
				<div className="w-xl aspect-[3/2] rounded-2xl">
					<img
						src={images?.thumbnail}
						alt="Thumbnail Image"
						className="w-full h-full object-cover object-center rounded-2xl hover:translate-x-2 transition-transform duration-200"
					/>
				</div>
				{/* Core Information */}
				<div className="space-y-4">
					{/* Title */}
					<h2 className="text-4xl font-semibold text-primary">{tour?.title}</h2>
					{/* Summary */}
					<p className="text-lg text-zinc-200 max-w-5xl">{tour?.summary}</p>
					{/* Key Information Points */}
					<div className="max-w-5/6 flex flex-wrap items-center gap-x-8 gap-y-2 font-medium">
						{/* Tour Type */}
						<div className="flex flex-col gap-y-1">
							<span>Tour Type</span>
							<span className="badge badge-neutral h-7 text-[1rem]">
								{tour?.type[0].toUpperCase()}
								{tour?.type.slice(1)}
							</span>
						</div>
						{/* Tour Status */}
						<div className="flex flex-col gap-y-1">
							<span>Tour Status</span>
							<span className="badge badge-neutral h-7 text-[1rem]">
								{tour?.status[0].toUpperCase()}
								{tour?.status.slice(1)}
							</span>
						</div>
						{/* Tour Price */}
						<div className="flex flex-col gap-y-1">
							<span>
								Tour Price <small>(per person)</small>
							</span>
							<span className="badge badge-neutral h-7 text-[1rem]">
								${tour?.price}
							</span>
						</div>
						{/* Start Date */}
						<div className="flex flex-col gap-y-1">
							<span>
								Start Date <small>(MM/DD/YYYY)</small>
							</span>
							<span className="badge badge-neutral h-7 text-[1rem]">
								{new Date(timing?.start_date)
									.toLocaleDateString()
									.replaceAll("/", " / ")}
							</span>
						</div>
						{/* Tour Duration */}
						<div className="flex flex-col gap-y-1">
							<span>Tour Duration</span>
							<span className="badge badge-neutral h-7 text-[1rem]">
								{timing?.duration}
							</span>
						</div>
					</div>
					{/* Departure & Destination */}
					<div className="flex flex-wrap items-center gap-2 font-medium">
						{/* Departure */}
						<span className="flex flex-col gap-y-1">
							<span className="text-sm">Departure</span>
							<span className="badge badge-outline badge-neutral h-7 text-[1rem] text-zinc-50">
								{location?.departure}
							</span>
						</span>
						{/* Divider */}
						<TbArrowBigRightLineFilled
							size={24}
							className="fill-neutral"
						/>
						{/* Destination */}
						<span className="flex flex-col gap-y-1">
							<span className="text-sm">Destination</span>
							<span className="badge badge-outline badge-neutral h-7 text-[1rem] text-zinc-50">
								{location?.destination}
							</span>
						</span>
					</div>
					{/* Services & Meals */}
					<div className="flex flex-wrap gap-8">
						{/* Services */}
						<div className="space-y-1">
							<p className="font-medium">Services</p>
							<div className="flex flex-wrap gap-1 font-medium">
								{services?.general?.map((service) => (
									<span className="badge badge-neutral h-7 text-[1rem]">
										{service.trim()}
									</span>
								))}
							</div>
						</div>
						{/* Meals */}
						<div className="space-y-1">
							<p className="font-medium">Meals</p>
							<div className="flex flex-wrap gap-1 font-medium">
								{services?.meals?.map((meal) => (
									<span className="badge badge-neutral h-7 text-[1rem]">
										{meal[0].toUpperCase()}
										{meal.slice(1)}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Itinerary */}
			<div className="lg:w-6xl mx-12">
				<div className="join join-vertical bg-base-200 w-full">
					{itinerary?.map((dayInfo, dayNumber) => (
						<div className="collapse collapse-arrow join-item border border-accent/20">
							{/* Toggle Open-Close state */}
							<input
								type="radio"
								name="itinerary-accordion"
							/>
							<div className="collapse-title flex items-center gap-x-3 text-lg font-medium">
								<span className="badge badge-outline badge-accent h-7 text-[1rem]">
									Day {dayNumber + 1}
								</span>
								<h6>{dayInfo.title}</h6>
							</div>
							<div className="collapse-content">{dayInfo.description}</div>
						</div>
					))}
				</div>
			</div>
			{/* Book Tour */}
			<div className="space-y-6">
				<h2 className="text-4xl font-semibold text-center text-primary">Book Tour</h2>
				{/* Booking Form */}
				<form
					className="w-xl mx-auto space-y-3"
					onSubmit={handleSubmit(handleBooking)}
				>
					{/* Tourist Image */}
					<div className="flex items-center gap-2">
						<p className="text-lg text-zinc-300">Tourist Image:</p>
						<img
							src={user?.photoURL}
							alt="Tourist Image"
							className="size-12 rounded-full"
						/>
					</div>
					{/* Tourist Name */}
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-zinc-300">Tourist Name</span>
							<input
								type="text"
								value={user?.displayName}
								readOnly={true}
								{...register("tourist_name")}
							/>
						</label>
					</div>
					{/* Tourist Email */}
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-zinc-300">Tourist Email</span>
							<input
								type="email"
								value={user?.email}
								readOnly={true}
								{...register("tourist_email")}
							/>
						</label>
					</div>
					{/* Submit Form */}
					<div className="text-center">
						<button
							type="submit"
							className="btn text-lg btn-accent w-xs mt-3 rounded-md"
						>
							Proceed to Confirm Booking
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ViewTourDetailsPage;
