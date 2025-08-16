import UsersTable from "../../components/dashboard/UsersTable";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import Select from "react-select";
import { useState } from "react";
import CustomBarChart from "../../components/charts/CustomBarChart";
import CustomPieChart from "../../components/charts/CustomPieChart";

const ManageUsers = () => {
	// Filtering & Searching states
	const [roleFilter, setRoleFilter] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	// Fetch users data from server
	const { data: users } = useQuery({
		queryKey: ["users", roleFilter, searchQuery],
		queryFn: async () => {
			const queryParams = new URLSearchParams();
			if (roleFilter) queryParams.append("role", roleFilter);
			if (searchQuery) queryParams.append("search", searchQuery);
			const res = await apiClient.get(`/users?${queryParams.toString()}`);
			return res.data;
		},
	});
	// Filtering-by-Role options
	const roleFilterOptions = [
		{ value: "", label: "All Roles" },
		{ value: "Tourist", label: "Tourist" },
		{ value: "Tour Guide", label: "Tour Guide" },
		{ value: "Admin", label: "Admin" },
	];
	// Count of users
	const { data: usersCount = 0 } = useQuery({
		queryKey: ["users", "all"],
		queryFn: async () => {
			const res = await apiClient.get("/users");
			return res.data.length;
		},
	});
	const { data: adminCount = 0 } = useQuery({
		queryKey: ["users", "admin"],
		queryFn: async () => {
			const res = await apiClient.get("/users?role=Admin");
			return res.data.length;
		},
	});
	const { data: tourGuideCount = 0 } = useQuery({
		queryKey: ["users", "tour-guide"],
		queryFn: async () => {
			const res = await apiClient.get("/users?role=Tour+Guide");
			return res.data.length;
		},
	});
	const { data: touristCount = 0 } = useQuery({
		queryKey: ["users", "tourist"],
		queryFn: async () => {
			const res = await apiClient.get("/users?role=Tourist");
			return res.data.length;
		},
	});
	// Pie Chart data
	const pieChartData = [
		{
			name: "Admin",
			Users: adminCount,
		},
		{
			name: "Tourist",
			Users: touristCount,
		},
		{
			name: "Tour Guide",
			Users: tourGuideCount,
		},
	];
	return (
		<main
			id="manage-users-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Manage Users</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Bento Grid like Grid layout with analytics and data */}
			<div className="grid grid-cols-2 gap-4">
				{/* Chart */}
				<div className="p-6 bg-base-300 border border-primary/30 rounded-2xl flex flex-col gap-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
						Users based-on Role
					</h4>
					<div className="self-center">
						<CustomPieChart
							width={350}
							height={350}
							data={pieChartData}
							dataKey="Users"
							circleX="50%"
							circleY="50%"
							outerRadius={150}
						/>
					</div>
				</div>
				{/* Card Stats */}
				<div>
					<div className="w-80 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Users
						</h4>
						<h2 className="text-4xl font-bold text-primary">{usersCount}</h2>
					</div>
				</div>
				{/* Table */}
				<div className="col-span-2 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">Users</h4>
					<UsersTable users={users} />
				</div>
			</div>
		</main>
	);
};

export default ManageUsers;
