import StoryCard from "../shared/StoryCard";

const ManageStoriesGrid = ({ storiesData }) => {
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
