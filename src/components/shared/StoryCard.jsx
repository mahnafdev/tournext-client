import { Link } from "react-router";
import apiClient from "../../services/apiClient";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const StoryCard = ({ storyData, isMyStory = false, isGuideStory = false }) => {
	// Destructure values from data
	const {
		_id,
		story_id,
		poster_name,
		posted_at,
		images: { thumbnail, gallery },
		title,
		description,
	} = storyData;
	// List of backgrounds of story card
	const storyBackgrounds = [
		"#dc143c",
		"#228b22",
		"#696969",
		"#6d22a4",
		"#667788",
		"#0045cd",
		"#ee4500",
		"#15a099",
	];
	// This story card's background
	const chosenStoryBackground =
		storyBackgrounds[Math.floor(Math.random() * storyBackgrounds.length)];
	// Handle story delete
	const handleDelete = () => {
		Swal.fire({
			theme: "dark",
			title: "Confirm Deletion",
			text: "Are you sure you want to delete the story? It's irreversible.",
			confirmButtonText: "Yes, Delete",
			confirmButtonColor: "var(--color-success)",
			showCancelButton: true,
			cancelButtonText: "No, Cancel",
			cancelButtonColor: "var(--color-error)",
		}).then((result) => {
			if (result.isConfirmed) {
				apiClient
					.delete(`/stories/${_id}`)
					.then((res) => {
						toast.success("Story deleted successfully");
					})
					.catch((error) => {
						console.log(`${error.response?.statusText}: ${error.message}`);
						toast.error("We couldn't delete the story. Please try once more.");
					});
			}
		});
	};
	return (
		<div className="space-y-1.5 hover:scale-103 transition-transform duration-200">
			{/* Poster Name & Post Date */}
			{isMyStory || isGuideStory ? (
				<p className="text-sm text-zinc-300">{new Date(posted_at).toLocaleString()}</p>
			) : (
				<div className="pl-1">
					<h6 className="text-lg font-medium leading-tight">{poster_name}</h6>
					<p className="text-sm text-zinc-300">
						{new Date(posted_at).toLocaleString()}
					</p>
				</div>
			)}
			<div
				className="w-72 h-[32rem] rounded-2xl"
				style={{
					backgroundColor: chosenStoryBackground,
				}}
			>
				{/* Thumbnail Image */}
				<div>
					<img
						src={thumbnail}
						alt="Thumbnail Image"
						className="w-full h-52 object-cover object-center rounded-t-2xl"
					/>
				</div>
				<div className="p-2 space-y-1 overflow-y-scroll h-74">
					{/* Title */}
					<h6 className="text-lg font-medium text-center">{title}</h6>
					{/* Description */}
					<p className="text-sm text-zinc-200 text-center text-balance">
						{description}
					</p>
					{/* Gallery */}
					<div className="flex flex-col gap-y-1 mt-4">
						{gallery.map((image) => (
							<img
								key={image}
								src={image}
								alt="Gallery Image"
								className="w-full h-24 hover:h-38 object-cover object-center rounded-md transition-[height] duration-300"
							/>
						))}
					</div>
				</div>
			</div>
			{/* Actions */}
			{isMyStory && (
				<div>
					<button
						type="button"
						className="btn btn-accent btn-outline text-[1rem] px-3 h-8 rounded-md"
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
			)}
		</div>
	);
};

export default StoryCard;
