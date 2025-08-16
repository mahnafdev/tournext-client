import { useForm } from "react-hook-form";

const UpdateStoryForm = ({ storyData: story }) => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// Handle update
	const handleUpdate = (data) => {
		console.log(data);
	};
	// Handle uploading single image
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
	// Handle uploading multiple images
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
	return (
		<form
			id="update-story-form"
			className="space-y-4 rounded-4xl p-6 -mt-4 bg-base-300"
			onSubmit={handleSubmit(handleUpdate)}
		>
			{/* Story Title */}
			<div className="space-y-1">
				<label className="input w-full text-[1rem] rounded-lg">
					<span className="label text-zinc-300 font-medium">Title</span>
					<input
						type="text"
						placeholder="e.g: Switzerland Forest Adventure"
						defaultValue={story?.title}
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
						defaultValue={story?.description}
						{...register("description", {
							required: "This information is required",
							maxLength: {
								value: 200,
								message: "Maximum length is 200 characters",
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
			<div className="flex flex-col gap-y-1">
				<span className="text-zinc-300 font-medium">Thumbnail Image</span>
				<input
					type="file"
					className="file-input w-96 text-[1rem] text-zinc-200 file:text-zinc-100 file:font-medium file:text-[1rem]"
					defaultValue={story?.images.thumbnail}
					accept=".png,.jpg,.webp,.svg,.psd"
					onChange={handleSingleImageUpload}
					required
				/>
			</div>
			{/* Gallery Images */}
			<div className="flex flex-col gap-y-1">
				<span className="text-zinc-300 font-medium">Gallery Images</span>
				<input
					type="file"
					className="file-input w-96 text-[1rem] text-zinc-200 file:text-zinc-100 file:font-medium file:text-[1rem]"
					defaultValue={story?.images.gallery}
					accept=".png,.jpg,.webp,.svg,.psd"
					onChange={handleMultipleImageUpload}
					multiple={true}
					required
				/>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Submission button */}
			<button
				type="submit"
				className="btn btn-lg w-64 px-2 btn-accent rounded-lg"
			>
				Proceed to Update Story
			</button>
		</form>
	);
};

export default UpdateStoryForm;
