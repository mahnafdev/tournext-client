import { useState } from "react";
import { useForm } from "react-hook-form";

const PostTourForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		watch,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// Watch some field's values to conditionally modify something immediately based on the value
	const parcelType = watch("parcel_type");
	// Itineraries state
	const [itineraries, setItineraries] = useState([
		{
			title: "",
			description: "",
		},
	]);
	// Add Itinerary Day
	const addItineraryDay = () => {
		setItineraries((prev) => [...prev, { title: "", description: "" }]);
	};
	// Remove Itinerary Day
	const removeItineraryDay = () => {
		if (itineraries.length === 1) return;
		setItineraries(itineraries.filter((v, i) => i !== itineraries.length - 1));
	};
	// Handle Tour Posting
	const handlePost = (data) => {
		console.log(data);
	};
	return (
		<form
			id="post-tour-form"
			className="space-y-8"
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
							{...register("tour_title", {
								required: "This information is required",
								maxLength: {
									value: 100,
									message: "Maximum length is 100 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.tour_title && (
						<p className="text-error">{errors.tour_title.message}</p>
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
								{...register("tour_type", {
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
								{...register("tour_type", {
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
								{...register("tour_type", {
									required: "This information is required",
								})}
							/>
							<span className="font-medium cursor-default">Self-Guided</span>
						</div>
					</div>
					{errors?.tour_type && (
						<p className="text-error">{errors.tour_type.message}</p>
					)}
				</div>
			</div>
			{/* Images */}
			{/* Short Summary */}
			<div className="space-y-1">
				<label>
					<span className="text-lg text-zinc-300 font-medium">Tour Summary</span>
					<textarea
						className="textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
						rows={2}
						placeholder="A short description about the tour. Maybe, some notes or guidelines."
						{...register("tour_summary", {
							required: "This information is required",
							maxLength: {
								value: 200,
								message: "Maximum length is 200 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.tour_summary && (
					<p className="text-error">{errors.tour_summary.message}</p>
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
							{...register("departure_point", {
								required: "This information is required",
								maxLength: {
									value: 100,
									message: "Maximum length is 100 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.departure_point && (
						<p className="text-error">{errors.departure_point.message}</p>
					)}
				</div>
				{/* Destination */}
				<div className="space-y-1">
					<label className="input w-full text-[1rem] rounded-lg">
						<span className="label text-zinc-300 font-medium">Destination</span>
						<input
							type="text"
							placeholder="e.g: Blue Mosque, Istanbul, Turkiye"
							{...register("destination", {
								required: "This information is required",
								maxLength: {
									value: 100,
									message: "Maximum length is 100 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.departure_point && (
						<p className="text-error">{errors.departure_point.message}</p>
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
									className="checkbox checkbox-accent "
									{...register("meals", {
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
									{...register("meals", {
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
									{...register("meals", {
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
									{...register("meals", {
										required: "This information is required",
									})}
								/>
								<span className="font-medium cursor-default">Dinner</span>
							</div>
						</div>
					</label>
					{/* Field-Error */}
					{errors?.meals && <p className="mt-2 text-error">{errors.meals.message}</p>}
				</div>
				{/* Services */}
				<div className="space-y-1">
					<label>
						<span className="text-lg text-zinc-300 font-medium">Services</span>
						<textarea
							className="textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
							rows={3}
							placeholder="e.g: Free water bottles | Comfortable metro rail journey | Salat breaks in journey"
							{...register("services", {
								required: "This information is required",
								maxLength: {
									value: 350,
									message: "Maximum length is 350 characters",
								},
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.services && (
						<p className="text-error">{errors.services.message}</p>
					)}
				</div>
			</div>
			{/* Tour Price */}
			<div className="space-y-1">
				<label className="input w-1/4 text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Tour Price</span>
					<input
						type="number"
						placeholder="e.g: 200"
						{...register("tour_price", {
							required: "This information is required",
							max: {
								value: 10000,
								message: "Maximum price is $10000",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.tour_price && (
					<p className="text-error">{errors.tour_price.message}</p>
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
									{...register(`itinerary-${index + 1}`, {
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
									{...register("services", {
										required: "This information is required",
										maxLength: {
											value: 350,
											message: "Maximum length is 350 characters",
										},
									})}
								/>
							</label>
							{/* Field-Error */}
							{errors?.tour_price && (
								<p className="text-error">{errors.tour_price.message}</p>
							)}
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
					<button
						type="button"
						className="btn text-[1rem] btn-accent"
						onClick={removeItineraryDay}
					>
						Remove Day
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
