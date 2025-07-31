import { useForm } from "react-hook-form";
import apiClient from "../../services/apiClient";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const PostStoryForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [thumbnailImage, setThumbnailImage] = useState("");
	const [galleryImages, setGalleryImages] = useState([]);
	// Currently logged-in user
	const { user } = useAuth();
	const handlePost = (data) => {
		data.story_id = `story-${crypto.randomUUID().split("-")[0]}`;
		data.posted_at = new Date().toISOString();
		data.poster_email = user?.email;
		data.poster_name = user?.displayName;
		data.images = { thumbnail: thumbnailImage, gallery: galleryImages };
		console.log(data);
		apiClient
			.post("/stories", data)
			.then((res) => {
				if (res.data?.insertedId) {
					toast.success("Your story is posted successfully");
				} else {
					toast.error("We couldn't complete the posting. Please try once more.");
				}
			})
			.catch((error) => {
				console.log(`${error.response?.statusText}: ${error.message}`);
				toast.error("We couldn't post the story. Please try once more.");
			});
	};
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
	return (
		<form
			id="post-story-form"
			className="space-y-4 rounded-4xl p-6 -mt-4 bg-base-300"
			onSubmit={handleSubmit(handlePost)}
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
			<div className="flex flex-col gap-y-1">
				<span className="text-zinc-300 font-medium">Thumbnail Image</span>
				<input
					type="file"
					className="file-input w-96 text-[1rem] text-zinc-200 file:text-zinc-100 file:font-medium file:text-[1rem]"
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
				className="btn btn-lg w-60 px-2 btn-accent rounded-lg"
			>
				Proceed to Post Story
			</button>
		</form>
	);
};

export default PostStoryForm;
