import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import StoryCard from "../shared/StoryCard";

const ManageStoriesGrid = () => {
	const { user } = useAuth();
	// Fetch stories data
	const { data: storiesData } = useQuery({
		queryKey: ["stories", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/stories?poster=${user?.email}`);
			return res.data;
		},
	});
	return (
		<div className="grid grid-cols-5 place-self-start gap-4">
			{storiesData?.map((story) => (
				<StoryCard
					key={story.story_id}
					storyData={story}
					isMyStory={true}
				/>
			))}
		</div>
	);
};

export default ManageStoriesGrid;
