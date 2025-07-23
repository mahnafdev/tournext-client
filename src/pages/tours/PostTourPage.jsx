import PostTourForm from "../../components/forms/PostTourForm";

const PostTourPage = () => {
	return (
		<main
			id="post-tour-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Post A Tour</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Enter your tour details</h3>
			{/* The form, Ctrl+Click on 'PostTourForm' to see the full component */}
			<PostTourForm />
		</main>
	);
};

export default PostTourPage;
