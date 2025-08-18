import UsersTable from "../../components/dashboard/UsersTable";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import Select from "react-select";
import { useState } from "react";
import CustomBarChart from "../../components/charts/CustomBarChart";
import CustomPieChart from "../../components/charts/CustomPieChart";
import { TbMenu2 } from "react-icons/tb";

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
			<div className="max-lg:flex justify-between items-center my-0">
				<label
					htmlFor="dashboard-sidebar"
					className="btn btn-ghost btn-accent drawer-button p-1 h-auto rounded-full lg:hidden"
				>
					<TbMenu2 size={32} />
				</label>
				<h2 className="text-3xl lg:text-4xl text-primary font-semibold">
					Manage Users
				</h2>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			{/* Bento Grid like Grid layout with analytics and data */}
			<div className="grid md:grid-cols-2 gap-4">
				{/* Users based-on Role */}
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
							outerRadius={150}
						/>
					</div>
				</div>
				{/* Card Stats */}
				<div>
					{/* Total Users */}
					<div className="w-80 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
						<h4 className="text-2xl font-semibold text-zinc-300 capitalize">
							Total Users
						</h4>
						<h2 className="text-4xl font-bold text-primary">{usersCount}</h2>
					</div>
				</div>
				{/* Users */}
				<div className="md:col-span-2 p-6 bg-base-300 border border-primary/30 rounded-2xl space-y-4">
					<h4 className="text-2xl font-semibold text-zinc-300 capitalize">Users</h4>
					{/* Searching & Filtering */}
					<div className="flex justify-between items-center flex-wrap gap-3 -mt-2 mb-6">
						{/* Filtering */}
						<div className="space-y-1">
							<Select
								options={roleFilterOptions}
								value={roleFilterOptions.find(
									(option) => option.value === roleFilter,
								)}
								className="w-48"
								onChange={(e) => setRoleFilter(e.value)}
								// Dark theme
								theme={(theme) => ({
									...theme,
									borderRadius: 0,
									colors: {
										...theme.colors,
										primary: "#33bfbf99",
										neutral80: "#f4f4f5",
									},
								})}
								styles={{
									control: (baseStyles) => ({
										...baseStyles,
										backgroundColor: "#091319",
										borderColor: "#008f5f80",
										borderRadius: "0.4rem",
										padding: "0.125rem 0",
										":hover": { borderColor: "#008f5f" },
									}),
									menu: (baseStyles) => ({
										...baseStyles,
										zIndex: 20,
										backgroundColor: "#091319",
										borderRadius: "0.7rem",
									}),
									option: (baseStyles) => ({
										...baseStyles,
										marginBlock: "0.7rem",
										paddingBlock: "0.3rem",
										":hover": { backgroundColor: "#008f5f80" },
									}),
								}}
							/>
						</div>
						{/* Searching */}
						<div className="space-y-1">
							<label className="input w-88 bg-base-300 border-accent/50 text-[1rem] rounded-md">
								<span className="label text-zinc-300 font-medium">Search</span>
								<input
									type="text"
									placeholder="User Name or Email"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</label>
						</div>
					</div>
					{/* Table */}
					<UsersTable users={users} />
				</div>
			</div>
		</main>
	);
};

export default ManageUsers;
