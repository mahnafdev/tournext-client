import PostStoryForm from "../../components/dashboard/PostStoryForm";

const PostStory = () => {
	return (
		<main
			id="post-story-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Post A Story</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Enter your story details</h3>
			{/* The form, Ctrl+Click on 'PostStoryForm' to see the full component */}
			<PostStoryForm />
		</main>
	);
};

export default PostStory;
