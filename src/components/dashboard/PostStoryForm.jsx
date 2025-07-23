import { useForm } from "react-hook-form";

const PostStoryForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<form
			id="post-story-form"
			className="space-y-4 rounded-4xl p-6 -mt-4 bg-base-300"
		>
			{/* Story Title */}
			<div className="space-y-1">
				<label className="input w-full text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Title</span>
					<input
						type="text"
						placeholder="e.g: Switzerland Forest Adventure"
						{...register("title", {
							required: "This information is required",
							maxLength: {
								value: 100,
								message: "Maximum length is 100 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.title && <p className="text-error">{errors.title.message}</p>}
			</div>
			{/* Story Description */}
			<div className="space-y-1">
				<label>
					<span className="text-lg text-zinc-300 font-medium">Description</span>
					<textarea
						className="textarea mt-1 w-full resize-none text-[1rem] rounded-lg"
						rows={2}
						placeholder="Describe the story moment or main theme."
						{...register("description", {
							required: "This information is required",
							maxLength: {
								value: 175,
								message: "Maximum length is 175 characters",
							},
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.description && (
					<p className="text-error">{errors.description?.message}</p>
				)}
			</div>
			{/* Thumbnail Image */}
			<div className="space-y-1">
				<label className="input w-full text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Thumbnail Image</span>
					<input
						type="url"
						placeholder="Thumbnail Image URL"
						{...register("images.thumbnail", {
							required: "This information is required",
						})}
					/>
				</label>
				{/* Field-Error */}
				{errors?.images?.thumbnail && (
					<p className="text-error">{errors.images?.thumbnail?.message}</p>
				)}
			</div>
			{/* ToDo: Add gallery images uploading option */}
		</form>
	);
};

export default PostStoryForm;
