import { useQuery } from "@tanstack/react-query";
import ManageStoriesGrid from "../../components/dashboard/ManageStoriesGrid";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import { TbMenu2 } from "react-icons/tb";

const ManageStories = () => {
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
		<main
			id="manage-stories-page"
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
					Manage Stories
				</h2>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Card Stats */}
			<div>
				{/* Total Stories */}
				<div className="w-80 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
						Total Stories
					</h4>
					<h2 className="text-4xl font-bold text-primary">
						{storiesData?.length || 0}
					</h2>
				</div>
			</div>
			{/* The stories grid */}
			<ManageStoriesGrid storiesData={storiesData} />
		</main>
	);
};

export default ManageStories;
