import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
	const { user } = useAuth();
	// Fetch bookings count
	const { data: bookingsCount = 0 } = useQuery({
		queryKey: ["count", "bookings", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/bookings?tourist_email=${user?.email}`);
			return res.data.length;
		},
	});
	// Fetch users count
	const { data: usersCount = 0 } = useQuery({
		queryKey: ["count", "users"],
		queryFn: async () => {
			const res = await apiClient.get("/users");
			return res.data.length;
		},
	});
	// Fetch stories count
	const { data: storiesCount = 0 } = useQuery({
		queryKey: ["count", "stories", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/stories?poster=${user?.email}`);
			return res.data.length;
		},
	});
	// Fetch candidates count
	const { data: candidatesCount = 0 } = useQuery({
		queryKey: ["count", "candidates"],
		queryFn: async () => {
			const res = await apiClient.get("/tour-guides?status=Pending");
			return res.data.length;
		},
	});
	return (
		<main
			id="dashboard-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Dashboard</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Bento Grid */}
			<div className="grid grid-cols-4 gap-4">
				{/* Card Stats */}
				<div className="col-span-4 grid grid-cols-4 gap-4">
					{/* Total Bookings */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Bookings
						</h4>
						<h2 className="text-4xl font-bold text-primary">{bookingsCount}</h2>
					</div>
					{/* Total Users */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Users
						</h4>
						<h2 className="text-4xl font-bold text-primary">{usersCount}</h2>
					</div>
					{/* Total Stories */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Stories
						</h4>
						<h2 className="text-4xl font-bold text-primary">{storiesCount}</h2>
					</div>
					{/* Total Candidates */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Candidates
						</h4>
						<h2 className="text-4xl font-bold text-primary">{candidatesCount}</h2>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
