import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import UpdateStoryForm from "../../components/dashboard/UpdateStoryForm";
import apiClient from "../../services/apiClient";

const UpdateStory = () => {
	// Get story_id from Params
	const { story_id } = useParams();
	// Fetch story data
	const { data: story } = useQuery({
		queryKey: ["update-story", story_id],
		queryFn: async () => {
			const res = await apiClient.get(`/stories?story_id=${story_id}`);
			return res.data[0];
		},
	});
	return (
		<main
			id="update-story-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Update Story</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Update "{story?.title}" Story</h3>
			{/* The update form, Ctrl+Click on 'UpdateStoryForm' to see the full component */}
			<UpdateStoryForm storyData={story} />
		</main>
	);
};

export default UpdateStory;
