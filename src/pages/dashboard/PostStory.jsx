import { TbMenu2 } from "react-icons/tb";
import PostStoryForm from "../../components/dashboard/PostStoryForm";

const PostStory = () => {
	return (
		<main
			id="post-story-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<div className="max-lg:flex justify-between items-center my-0">
				<label
					htmlFor="dashboard-sidebar"
					className="btn btn-ghost btn-accent drawer-button p-1 h-auto rounded-full lg:hidden"
				>
					<TbMenu2 size={32} />
				</label>
				<h2 className="text-3xl lg:text-4xl text-primary font-semibold">
					Post A Story
				</h2>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Enter your story details</h3>
			{/* The form, Ctrl+Click on 'PostStoryForm' to see the full component */}
			<PostStoryForm />
		</main>
	);
};

export default PostStory;
