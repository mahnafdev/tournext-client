import PostTourForm from "../../components/forms/PostTourForm";

const PostTourPage = () => {
	return (
		<main
			id="post-tour-page"
			className="m-4 md:m-12"
		>
			<div className="p-12 bg-base-200 hover:bg-base-300 duration-200 transition-colors rounded-4xl space-y-12">
				{/* Page heading */}
				<h2 className="text-[2.5rem] text-primary font-semibold my-0">Post A Tour</h2>
				{/* A horizontal divider */}
				<div className="divider" />
				<h3 className="text-3xl font-medium">Enter your tour details</h3>
				{/* The form, Ctrl+Click on 'PostTourForm' to see the full component */}
				<PostTourForm />
			</div>
		</main>
	);
};

export default PostTourPage;
