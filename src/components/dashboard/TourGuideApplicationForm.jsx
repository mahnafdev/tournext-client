import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const TourGuideApplicationForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// Currently authenticated user
	const { user } = useAuth();
	// Hook to navigate to a route
	const navigate = useNavigate();
	const handleSubmitApplication = (data) => {
		const cleanedData = {
			...data,
			guide_id: `guide-${crypto.randomUUID().split("-")[0]}`,
			status: "pending",
			candidate_name: user?.displayName,
			candidate_email: user?.email,
		};
		apiClient
			.post("/tour-guides", cleanedData)
			.then((res) => {
				reset();
				toast.success("Your application is submitted successfully");
				setTimeout(() => {
					navigate("/profile");
				}, 2500);
			})
			.catch((error) => {
				console.log(`${error.response?.statusText}: ${error.message}`);
				toast.error("We couldn't submit the application. Please try once more.");
			});
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
						{...register("joining_reason", {
							required: "This information is required",
							maxLength: {
								value: 150,
								message: "Maximum length is 150 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.joining_reason && (
					<p className="text-error">{errors.joining_reason?.message}</p>
				)}
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
