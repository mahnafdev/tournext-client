import { Link, useParams } from "react-router";
import apiClient from "../../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { TbArrowBigRightLineFilled, TbCalendarDue } from "react-icons/tb";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import { useState } from "react";
import toast from "react-hot-toast";

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
	// Fetch tour guides
	const { data: tourGuides } = useQuery({
		queryKey: ["tour-guides"],
		queryFn: async () => {
			const res = await apiClient.get("/tour-guides?status=accepted");
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
	const [tourDate, setTourDate] = useState(new Date());
	// Handle tour booking
	const handleBooking = (data) => {
		// Add extra necessary data and correcting existing (user-given) data
		data.tourist_picture = user?.photoURL;
		data.tourist_name = user?.displayName;
		data.tourist_email = user?.email;
		data.tour_name = tour?.title;
		data.tour_guide.email = tourGuides.find(
			(guide) => guide.guide_name === data.tour_guide.name,
		).guide_email;
		data.tour_date = tourDate.toISOString();
		if (!data.tour_price) data.tour_price = tour?.price;
		data.status = "Pending";
		data.booking_id = `booking-${crypto.randomUUID().split("-")[0]}`;
		// Save booking to database
		apiClient
			.post("/bookings", data)
			.then((res) => {
				reset();
				toast.success("You booked this tour successfully");
				toast("View your booking in My-Bookings page of Dashboard", {
					icon: "ℹ️",
					duration: 4000,
				});
			})
			.catch((error) => {
				console.log(`${error.response?.statusText}: ${error.message}`);
				toast.error("We couldn't book the tour. Please try once more.");
			});
	};
	return (
		<main className="mx-4 lg:mx-12 my-6 space-y-12">
			{/* Tour ID */}
			<h6
				className="mb-4 text-xl text-center font-medium text-zinc-300"
				title="Tour ID"
			>
				#{tour_tracking_id?.split("-")[1].toUpperCase()}
			</h6>
			{/* Image Gallery */}
			<div className="flex flex-wrap justify-center gap-2">
				{images?.gallery?.map((image, index) => (
					<div
						key={index}
						className="w-sm aspect-[4/3] rounded-2xl lg:rounded-lg"
					>
						<img
							src={image}
							alt={`Gallery Image ${index}`}
							className="w-full h-full object-cover object-center rounded-2xl lg:rounded-lg hover:scale-103 transition-transform duration-200"
						/>
					</div>
				))}
			</div>
			{/* Other Information */}
			<div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-12">
				{/* Tour ID */}
				{/* Thumbnail Image */}
				<div className="md:w-xl aspect-[3/2] rounded-2xl">
					<img
						src={images?.thumbnail}
						alt="Thumbnail Image"
						className="w-full h-full object-cover object-center rounded-2xl hover:translate-x-2 transition-transform duration-200"
					/>
				</div>
				{/* Core Information */}
				<div className="space-y-4">
					{/* Title */}
					<h2 className="text-3xl lg:text-4xl font-semibold text-primary max-lg:text-center">
						{tour?.title}
					</h2>
					{/* Summary */}
					<p className="text-lg text-zinc-200 max-w-5xl">{tour?.summary}</p>
					{/* Key Information Points */}
					<div className="lg:max-w-5/6 flex flex-wrap items-center gap-x-6 lg:gap-x-8 gap-y-2 font-medium">
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
					<div className="flex flex-col lg:flex-row flex-wrap lg:items-center gap-2 font-medium">
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
							className="fill-neutral max-md:rotate-90"
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
									<span
										key={service}
										className="badge badge-neutral h-7 text-[1rem]"
									>
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
									<span
										key={meal}
										className="badge badge-neutral h-7 text-[1rem]"
									>
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
			<div className="lg:w-6xl lg:mx-12">
				<div className="join join-vertical bg-base-200 w-full">
					{itinerary?.map((dayInfo, dayNumber) => (
						<div
							key={dayNumber}
							className="collapse collapse-arrow join-item border border-accent/20"
						>
							{/* Toggle Open-Close state */}
							<input
								type="radio"
								name="itinerary-accordion"
							/>
							<div className="collapse-title flex items-center gap-x-3 text-lg font-medium">
								<span className="badge badge-outline badge-accent h-7 text-[1rem]">
									<span>Day </span>
									{dayNumber + 1}
								</span>
								<h6 className="line-clamp-1 w-fit">{dayInfo.title}</h6>
							</div>
							<div className="collapse-content">{dayInfo.description}</div>
						</div>
					))}
				</div>
			</div>
			{/* Tour Guides */}
			<div className="lg:w-4xl lg:mx-12 flex flex-col gap-y-2">
				{tourGuides?.map((guide) => {
					const { guide_id, guide_name, country } = guide;
					return (
						<div
							key={guide_id}
							className="flex items-center max-lg:justify-between gap-1 bg-base-300 border border-accent/50 rounded-lg p-3 md:p-4"
						>
							<h6 className="w-fit md:text-lg font-medium line-clamp-1">
								{guide_name}
							</h6>
							<div className="max-lg:hidden border border-dashed border-neutral w-12 rotate-90"></div>
							<span className="max-lg:hidden">
								Guides in{" "}
								<span className="badge badge-accent badge-outline px-2 ml-1 font-medium">
									{country[0].toUpperCase()}
									{country.slice(1)}
								</span>
							</span>
							<div className="border border-dashed border-neutral w-12 rotate-90"></div>
							<Link
								to={`/tour-guides/details/${guide_id}`}
								target="_blank"
							>
								<button
									type="button"
									className="btn btn-accent text-[1rem] rounded-md"
								>
									View Profile
								</button>
							</Link>
						</div>
					);
				})}
			</div>
			{/* Book Tour */}
			<div className="space-y-6">
				<h2 className="text-4xl font-semibold text-center text-primary">Book Tour</h2>
				{/* Booking Form */}
				<form
					className="lg:w-xl mx-auto space-y-3"
					onSubmit={handleSubmit(handleBooking)}
				>
					{/* Tour Price */}
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-zinc-300">Tour Price</span>
							<input
								type="number"
								value={tour?.price}
								readOnly={true}
								{...register("tour_price")}
							/>
						</label>
					</div>
					{/* Tour Date */}
					<div className="validated-input space-y-1">
						<label className="input relative w-full text-[1rem] rounded-lg">
							<DatePicker
								showIcon
								icon={
									<TbCalendarDue className="text-[22px] absolute -top-2 -left-3 cursor-default" />
								}
								className="!pr-0 !py-0 !pl-6 !scheme-dark"
								selected={tourDate}
								onChange={(date) => setTourDate(date)}
								name="tour_date"
								required={true}
							/>
						</label>
					</div>
					{/* Tour Guide */}
					<div className="validated-input space-y-1">
						<label className="select w-full text-[1rem] rounded-lg">
							<span className="label text-zinc-300">Tour Guide</span>
							<select
								defaultValue=""
								{...register("tour_guide.name", {
									required: "This information is required",
								})}
							>
								<option value="">Select Tour Guide</option>
								{tourGuides?.map((guide) => (
									<option
										key={guide.guide_id}
										value={guide.guide_name}
									>
										{guide.guide_name}
									</option>
								))}
							</select>
						</label>
						{/* Field-Error */}
						{errors?.tour_guide?.name && (
							<p className="text-error">{errors.tour_guide?.name.message}</p>
						)}
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
