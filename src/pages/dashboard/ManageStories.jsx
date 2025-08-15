import ManageStoriesGrid from "../../components/dashboard/ManageStoriesGrid";

const ManageStories = () => {
	return (
		<main
			id="manage-stories-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Manage Stories</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Manage your stories</h3>
			{/* The stories grid, Ctrl+Click on 'ManageStoriesGrid' to see the full component */}
			<ManageStoriesGrid />
		</main>
	);
};

export default ManageStories;
