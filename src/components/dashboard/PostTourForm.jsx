import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { TbCalendarDue } from "react-icons/tb";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";

const PostTourForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [startDate, setStartDate] = useState(new Date());
	// Itineraries state
	const [itineraries, setItineraries] = useState([{ title: "", description: "" }]);
	// Images state
	const [thumbnailImage, setThumbnailImage] = useState("");
	const [galleryImages, setGalleryImages] = useState([]);
	// Add Itinerary Day
	const addItineraryDay = () => {
		setItineraries((prev) => [...prev, { title: "", description: "" }]);
	};
	// Currently authenticated user
	const { user } = useAuth();
	// Hook to navigate to a route
	const navigate = useNavigate();
	const handleSingleImageUpload = async (e) => {
		const image = e.target.files[0];
		const formData = new FormData();
		formData.append("image", image);
		const uploadURL = `https://api.imgbb.com/1/upload?key=${
			import.meta.env.VITE_IMGBB_API_KEY
		}`;
		const res = await axios.post(uploadURL, formData);
		setThumbnailImage(res.data.data.url);
	};
	const handleMultipleImageUpload = async (e) => {
		const images = Array.from(e.target.files);
		if (images.length > 3) {
			toast.error("You can upload only up to 3 images");
			e.target.value = "";
			return;
		}
		const uploadURL = `https://api.imgbb.com/1/upload?key=${
			import.meta.env.VITE_IMGBB_API_KEY
		}`;
		const formDataArray = images.map((image) => {
			const formData = new FormData();
			formData.append("image", image);
			return axios.post(uploadURL, formData);
		});
		const responses = await Promise.all(formDataArray);
		const imageUrls = responses.map((res) => res.data.data.url);
		setGalleryImages(imageUrls);
	};
	// Handle Tour Posting
	const handlePost = (data) => {
		// Convert data.services.general to Array
		data.services.general = data.services?.general.split("|");
		// Add start_date in data.timing
		data.timing.start_date = startDate.toISOString();
		// Convert data.tour.price to Number
		data.tour.price = parseInt(data.tour?.price);
		// Add extra necessary data
		data.tour_id = `tour-${crypto.randomUUID().split("-")[0]}`;
		data.posted_at = new Date().toISOString();
		data.posted_by = user.email;
		data.images = { thumbnail: thumbnailImage, gallery: galleryImages };
		if (data.timing.start_date > data.posted_at) data.tour.status = "upcoming";
		else if (data.timing.start_date < data.posted_at) data.tour.status = "completed";
		else data.tour.status = "ongoing";
		apiClient
			.post("/tours", data)
			.then((response) => {
				if (response.data?.insertedId) {
					reset();
					toast.success("Your tour is posted successfully");
					setTimeout(() => {
						navigate(`/tours/details/${data.tour_id}`);
					}, 2500);
				} else toast.error("We couldn't complete the posting. Please try once more.");
			})
			.catch((error) => {
				console.log(`${error.response?.statusText}: ${error.message}`);
				toast.error("We couldn't post the tour. Please try once more.");
			});
	};
	return (
		<form
			id="post-tour-form"
			className="space-y-8 rounded-4xl p-6 -mt-4 bg-base-300"
			onSubmit={handleSubmit(handlePost)}
		>
			{/* Tour-related Information */}
			<div className="grid grid-cols-5 items-center gap-8">
				{/* Tour Title */}
				<div className="col-span-3 space-y-1">
					<label className="input w-full text-[1rem] rounded-lg">
						<span className="label text-zinc-300 font-medium">Tour Title</span>
						<input
							type="text"
							placeholder="e.g: Istanbul Blue Mosque Tour"
							{...register("tour.title", {
								required: "This information is required",
								maxLength: {
									value: 100,
									message: "Maximum length is 100 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.tour?.title && (
						<p className="text-error">{errors.tour?.title?.message}</p>
					)}
				</div>
				{/* Tour Type */}
				<div className="col-span-2 space-y-2">
					<div className="flex items-center gap-x-6">
						<div className="flex items-center gap-x-2">
							<input
								type="radio"
								value="group"
								className="radio radio-accent"
								{...register("tour.type", {
									required: "This information is required",
								})}
							/>
							<span className="font-medium cursor-default">Group</span>
						</div>
						<div className="flex items-center gap-x-2">
							<input
								type="radio"
								value="private"
								className="radio radio-accent"
								{...register("tour.type", {
									required: "This information is required",
								})}
							/>
							<span className="font-medium cursor-default">Private</span>
						</div>
						<div className="flex items-center gap-x-2">
							<input
								type="radio"
								value="self guided"
								className="radio radio-accent"
								{...register("tour.type", {
									required: "This information is required",
								})}
							/>
							<span className="font-medium cursor-default">Self-Guided</span>
						</div>
					</div>
					{errors?.tour?.type && (
						<p className="text-error">{errors.tour?.type?.message}</p>
					)}
				</div>
			</div>
			{/* Images */}
			<div className="grid grid-cols-3 gap-8">
				{/* Thumbnail */}
				<div className="flex flex-col gap-y-1">
					<span className="text-lg text-zinc-300 font-medium">Thumbnail</span>
					<input
						type="file"
						className="file-input w-sm text-[1rem] text-zinc-200 file:text-zinc-100 file:font-medium file:text-[1rem]"
						accept=".png,.jpg,.webp,.svg,.psd"
						onChange={handleSingleImageUpload}
						required
					/>
				</div>
				{/* Gallery */}
				<div className="flex flex-col gap-y-1">
					<span className="text-lg text-zinc-300 font-medium">Gallery</span>
					<input
						type="file"
						className="file-input w-sm text-[1rem] text-zinc-200 file:text-zinc-100 file:font-medium file:text-[1rem]"
						accept=".png,.jpg,.webp,.svg,.psd"
						onChange={handleMultipleImageUpload}
						multiple={true}
						required
					/>
				</div>
			</div>
			{/* Short Summary */}
			<div className="space-y-1">
				<label>
					<span className="text-lg text-zinc-300 font-medium">Tour Summary</span>
					<textarea
						className="textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
						rows={2}
						placeholder="A short description about the tour. Maybe, some notes or guidelines."
						{...register("tour.summary", {
							required: "This information is required",
							maxLength: {
								value: 200,
								message: "Maximum length is 200 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.tour?.summary && (
					<p className="text-error">{errors.tour?.summary?.message}</p>
				)}
			</div>
			{/* Location-related Information */}
			<div className="grid grid-cols-2 gap-8">
				{/* Departure Point */}
				<div className="space-y-1">
					<label className="input w-full text-[1rem] rounded-lg">
						<span className="label text-zinc-300 font-medium">Departure Point</span>
						<input
							type="text"
							placeholder="e.g: Karatay, Konya, Turkiye"
							{...register("location.departure", {
								required: "This information is required",
								maxLength: {
									value: 100,
									message: "Maximum length is 100 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.location?.departure && (
						<p className="text-error">{errors.location?.departure?.message}</p>
					)}
				</div>
				{/* Destination */}
				<div className="space-y-1">
					<label className="input w-full text-[1rem] rounded-lg">
						<span className="label text-zinc-300 font-medium">Destination</span>
						<input
							type="text"
							placeholder="e.g: Blue Mosque, Istanbul, Turkiye"
							{...register("location.destination", {
								required: "This information is required",
								maxLength: {
									value: 100,
									message: "Maximum length is 100 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.location?.destination && (
						<p className="text-error">{errors.location?.destination?.message}</p>
					)}
				</div>
			</div>
			{/* Time-related information */}
			<div className="grid grid-cols-2 gap-8">
				{/* Start Date */}
				<label className="input relative w-full text-[1rem] rounded-lg">
					<DatePicker
						showIcon
						icon={
							<TbCalendarDue className="text-[22px] absolute -top-2 -left-3 cursor-default" />
						}
						className="!pr-0 !py-0 !pl-6 !scheme-dark"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						name="start_date"
						required={true}
					/>
				</label>
				{/* Duration */}
				<div className="space-y-1">
					<label className="input w-full text-[1rem] rounded-lg">
						<span className="label text-zinc-300 font-medium">Duration</span>
						<input
							type="text"
							placeholder="e.g: 2 days"
							{...register("timing.duration", {
								required: "This information is required",
								maxLength: {
									value: 8,
									message: "Maximum length is 8 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.timing?.duration && (
						<p className="text-error">{errors.timing?.duration?.message}</p>
					)}
				</div>
			</div>
			{/* Services-related Information */}
			<div className="grid grid-cols-2 gap-8">
				{/* Meals */}
				<div>
					<label className="w-full text-[1rem] space-y-2">
						<span className="label text-zinc-300 font-medium text-lg">Meals</span>
						<div className="flex items-center gap-x-4">
							<div className="flex items-center gap-x-2">
								<input
									type="checkbox"
									value="snacks"
									className="checkbox checkbox-accent"
									{...register("services.meals", {
										required: "This information is required",
									})}
								/>
								<span className="font-medium cursor-default">Snacks</span>
							</div>
							<div className="flex items-center gap-x-2">
								<input
									type="checkbox"
									value="breakfast"
									className="checkbox checkbox-accent "
									{...register("services.meals", {
										required: "This information is required",
									})}
								/>
								<span className="font-medium cursor-default">Breakfast</span>
							</div>
							<div className="flex items-center gap-x-2">
								<input
									type="checkbox"
									value="lunch"
									className="checkbox checkbox-accent "
									{...register("services.meals", {
										required: "This information is required",
									})}
								/>
								<span className="font-medium cursor-default">Lunch</span>
							</div>
							<div className="flex items-center gap-x-2">
								<input
									type="checkbox"
									value="dinner"
									className="checkbox checkbox-accent "
									{...register("services.meals", {
										required: "This information is required",
									})}
								/>
								<span className="font-medium cursor-default">Dinner</span>
							</div>
						</div>
					</label>
					{/* Field-Error */}
					{errors?.services?.meals && (
						<p className="mt-2 text-error">{errors.services?.meals?.message}</p>
					)}
				</div>
				{/* Services */}
				<div className="space-y-1">
					<label>
						<span className="text-lg text-zinc-300 font-medium">Services</span>
						<textarea
							className="textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
							rows={3}
							placeholder="e.g: Free water bottles | Comfortable metro rail journey | Salat breaks in journey"
							{...register("services.general", {
								required: "This information is required",
								maxLength: {
									value: 350,
									message: "Maximum length is 350 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.services?.general && (
						<p className="text-error">{errors.services?.general?.message}</p>
					)}
				</div>
			</div>
			{/* Tour Price */}
			<div className="space-y-1">
				<label className="input w-1/4 text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Tour Price</span>
					<input
						type="number"
						step={5}
						placeholder="e.g: 200"
						{...register("tour.price", {
							required: "This information is required",
							min: {
								value: 5,
								message: "Minimum price is $5",
							},
							max: {
								value: 5000,
								message: "Maximum price is $5000",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.tour?.price && (
					<p className="text-error">{errors.tour?.price?.message}</p>
				)}
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Itinerary Days */}
			<div className="grid grid-cols-4 gap-8">
				{/* Itinerary */}
				<div className="col-span-3 space-y-4">
					<h6 className="text-lg font-medium text-zinc-300">Tour Itinerary</h6>
					{itineraries.map((itinerary, index) => (
						<div
							key={index}
							className="space-y-1"
						>
							{/* Itinerary Title */}
							<label className="input w-full text-[1rem] rounded-lg">
								<span className="label text-zinc-300 font-medium">
									Day {index + 1} Title
								</span>
								<input
									type="text"
									placeholder="e.g: Go to Ankara and visit Ankara Castle"
									{...register(`itinerary.${index}.title`, {
										required: "This information is required",
										maxLength: {
											value: 150,
											message: "Maximum length is 150 characters",
										},
									})}
								/>
							</label>
							{/* Itinerary Description */}
							<label className="grid grid-cols-7 gap-4">
								<span className="ml-2 text-zinc-300 font-medium">
									Day {index + 1} Description
								</span>
								<textarea
									className="col-span-6 textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
									rows={3}
									placeholder="e.g: We'll go to Ankara. And we'll rest till evening. Then we'll visit Ankara Castle in evening. After wandering around there, we'll go to sleep at night."
									{...register(`itinerary.${index}.description`, {
										required: "This information is required",
										maxLength: {
											value: 350,
											message: "Maximum length is 350 characters",
										},
									})}
								/>
							</label>
						</div>
					))}
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						className="btn text-[1rem] btn-accent"
						onClick={addItineraryDay}
					>
						Add Day
					</button>
				</div>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Submission button */}
			<button
				type="submit"
				className="btn btn-lg w-64 px-2 btn-accent rounded-lg"
			>
				Proceed to Publish Tour
			</button>
		</form>
	);
};

export default PostTourForm;
