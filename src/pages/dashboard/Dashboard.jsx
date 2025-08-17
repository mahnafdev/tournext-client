import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import useAuth from "../../hooks/useAuth";
import CustomLineChart from "../../components/charts/CustomLineChart";
import CustomBarChart from "../../components/charts/CustomBarChart";

const Dashboard = () => {
	const { user } = useAuth();
	// Fetch bookings
	const { data: bookings } = useQuery({
		queryKey: ["count", "bookings", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/bookings?tourist_email=${user?.email}`);
			return res.data;
		},
	});
	// Fetch users
	const { data: users } = useQuery({
		queryKey: ["count", "users"],
		queryFn: async () => {
			const res = await apiClient.get("/users");
			return res.data;
		},
	});
	// Fetch stories
	const { data: stories } = useQuery({
		queryKey: ["count", "stories", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/stories?poster=${user?.email}`);
			return res.data;
		},
	});
	// Fetch candidates
	const { data: candidates } = useQuery({
		queryKey: ["count", "candidates"],
		queryFn: async () => {
			const res = await apiClient.get("/tour-guides?status=Pending");
			return res.data;
		},
	});
	const verticalBarChartData = [
		{
			role: "Admin",
			Users: users?.filter((v) => v.role === "Admin").length,
		},
		{
			role: "Tourist",
			Users: users?.filter((v) => v.role === "Tourist").length,
		},
		{
			role: "Tour Guide",
			Users: users?.filter((v) => v.role === "Tour Guide").length,
		},
	];
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
						<h2 className="text-4xl font-bold text-primary">
							{bookings?.length || 0}
						</h2>
					</div>
					{/* Total Users */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Users
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{users?.length || 0}
						</h2>
					</div>
					{/* Total Stories */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Stories
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{stories?.length || 0}
						</h2>
					</div>
					{/* Total Candidates */}
					<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Candidates
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{candidates?.length || 0}
						</h2>
					</div>
				</div>
				{/* Visuals & Analytics */}
				{/* Users by Role - Vertical Bar Chart */}
				<div className="col-span-2 p-6 bg-base-300 border border-primary/30 rounded-2xl flex flex-col gap-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
						Users by Role
					</h4>
					<div className="self-center">
						<CustomBarChart
							height={400}
							data={verticalBarChartData}
							xAxisDataKey="role"
							barDataKey="Users"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
