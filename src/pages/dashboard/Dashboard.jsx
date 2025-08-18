import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import useAuth from "../../hooks/useAuth";
import CustomLineChart from "../../components/charts/CustomLineChart";
import CustomBarChart from "../../components/charts/CustomBarChart";
import CustomDonutPieChart from "../../components/charts/CustomDonutPieChart";

const Dashboard = () => {
	const { user } = useAuth();
	// Fetch bookings
	const { data: bookings } = useQuery({
		queryKey: ["dashboard-bookings", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/bookings?tourist_email=${user?.email}`);
			return res.data;
		},
	});
	// Fetch users
	const { data: users } = useQuery({
		queryKey: ["dashboard-users"],
		queryFn: async () => {
			const res = await apiClient.get("/users");
			return res.data;
		},
	});
	// Fetch stories
	const { data: stories } = useQuery({
		queryKey: ["dashboard-stories", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/stories?poster=${user?.email}`);
			return res.data;
		},
	});
	// Fetch candidates
	const { data: candidates } = useQuery({
		queryKey: ["dashboard-candidates"],
		queryFn: async () => {
			const res = await apiClient.get("/tour-guides");
			return res.data;
		},
	});
	// Users-by-Role Chart data
	const usersByRoleChartData = [
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
	// Canidates-by-Status Chart data
	const candidatesByStatusChartData = [
		{
			name: "Pending",
			Candidates: candidates?.filter((v) => v.status === "pending").length,
		},
		{
			name: "Accepted",
			Candidates: candidates?.filter((v) => v.status === "accepted").length,
		},
		{
			name: "Rejected",
			Candidates: candidates?.filter((v) => v.status === "rejected").length,
		},
	];
	// Bookings-by-Price-Range Chart data`
	const bookingsByPriceRangeChartData = [
		{
			maxLength: 4,
			priceRange: "$5-100",
			Bookings: bookings?.filter((v) => v.tour_price >= 5 && v.tour_price <= 100).length,
		},
		{
			maxLength: 4,
			priceRange: "$105-200",
			Bookings: bookings?.filter((v) => v.tour_price >= 105 && v.tour_price <= 200)
				.length,
		},
		{
			maxLength: 4,
			priceRange: "$205-300",
			Bookings: bookings?.filter((v) => v.tour_price >= 205 && v.tour_price <= 300)
				.length,
		},
		{
			maxLength: 4,
			priceRange: "$305-400",
			Bookings: bookings?.filter((v) => v.tour_price >= 305 && v.tour_price <= 400)
				.length,
		},
		{
			maxLength: 4,
			priceRange: "$405-500",
			Bookings: bookings?.filter((v) => v.tour_price >= 405 && v.tour_price <= 500)
				.length,
		},
	];
	return (
		<main
			id="dashboard-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-3xl lg:text-4xl text-primary font-semibold my-0">Dashboard</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Bento Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
				{/* Card Stats */}
				<div className="col-span-4 grid md:grid-cols-2 xl:grid-cols-4 max-md:place-self-start gap-4">
					{/* Total Bookings */}
					<div className="max-w-96 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							My Bookings
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{bookings?.length || 0}
						</h2>
					</div>
					{/* Total Users */}
					<div className="max-w-96 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Users
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{users?.length || 0}
						</h2>
					</div>
					{/* Total Stories */}
					<div className="max-w-96 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							My Stories
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{stories?.length || 0}
						</h2>
					</div>
					{/* Total Candidates */}
					<div className="max-w-96 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Candidates
						</h4>
						<h2 className="text-4xl font-bold text-primary">
							{candidates?.length || 0}
						</h2>
					</div>
				</div>
				{/* Visuals & Analytics */}
				{/* Users by Role */}
				<div className="xl:col-span-2 p-6 bg-base-300 border border-primary/30 rounded-2xl flex flex-col gap-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
						Users by Role
					</h4>
					{/* Vertical Bar Chart */}
					<div className="self-center">
						<CustomBarChart
							height={400}
							data={usersByRoleChartData}
							xAxisDataKey="role"
							barDataKey="Users"
						/>
					</div>
				</div>
				{/* Candidates by Status */}
				<div className="xl:col-span-2 p-6 bg-base-300 border border-primary/30 rounded-2xl flex flex-col gap-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
						Candidates by Status
					</h4>
					{/* Donut Pie Chart */}
					<div className="self-center">
						<CustomDonutPieChart
							data={candidatesByStatusChartData}
							dataKey="Candidates"
							width={400}
							height={400}
							innerRadius={120}
							outerRadius={170}
						/>
					</div>
				</div>
				{/* Bookings by Price Range */}
				<div className="xl:col-span-2 p-6 bg-base-300 border border-primary/30 rounded-2xl flex flex-col gap-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
						Bookings by Price Range
					</h4>
					{/* Line Chart */}
					<div className="self-center">
						<CustomLineChart
							width={560}
							data={bookingsByPriceRangeChartData}
							xAxisDataKey="priceRange"
							lineDataKey="Bookings"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
