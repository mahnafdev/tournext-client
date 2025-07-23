import { useForm } from "react-hook-form";

const TourGuideApplicationForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleSubmitApplication = (data) => {
		console.log(data);
	};
	return (
		<form
			id="tour-guide-application-form"
			className="space-y-4 rounded-4xl p-6 -mt-4 bg-base-300"
			onSubmit={handleSubmit(handleSubmitApplication)}
		>
			{/* Application Title */}
			<div className="space-y-1">
				<label className="input w-full text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Application Title</span>
					<input
						type="text"
						placeholder="What is the application for?"
						{...register("application_title", {
							required: "This information is required",
							maxLength: {
								value: 125,
								message: "Maximum length is 125 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.application_title && (
					<p className="text-error">{errors.application_title.message}</p>
				)}
			</div>
			{/* Joining Reason */}
			<div className="space-y-1">
				<label>
					<span className="text-lg text-zinc-300 font-medium">Joining Reason</span>
					<textarea
						className="textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
						rows={2}
						placeholder="Why do you want to be a Tour Guide?"
						{...register("reason", {
							required: "This information is required",
							maxLength: {
								value: 300,
								message: "Maximum length is 300 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.reason && <p className="text-error">{errors.reason?.message}</p>}
			</div>
			{/* Resume */}
			<div className="space-y-1">
				<label className="input w-full text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Resume</span>
					<input
						type="url"
						placeholder="Resume Link"
						{...register("resume", {
							required: "This information is required",
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.resume && <p className="text-error">{errors.resume?.message}</p>}
			</div>
			{/* Guiding Country */}
			<div className="space-y-1">
				<label className="select w-full text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Guiding Country</span>
					<select
						defaultValue="bangladesh"
						{...register("country", {
							required: "This information is required",
						})}
					>
						<option value="afghanistan">Afghanistan</option>
						<option value="bangladesh">Bangladesh</option>
						<option value="greece">Greece</option>
						<option value="italy">Italy</option>
						<option value="japan">Japan</option>
						<option value="spain">Spain</option>
						<option value="switzerland">Switzerland</option>
						<option value="turkey">Turkey</option>
					</select>
				</label>
				{/* Field-Error */}
				{errors?.country && <p className="text-error">{errors.country?.message}</p>}
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Submission button */}
			<button
				type="submit"
				className="btn btn-lg px-4 btn-accent rounded-lg"
			>
				Proceed to Submit Application
			</button>
		</form>
	);
};

export default TourGuideApplicationForm;
