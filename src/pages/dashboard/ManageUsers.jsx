import UsersTable from "../../components/dashboard/UsersTable";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import Select from "react-select";
import { useState } from "react";

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
	return (
		<main
			id="manage-users-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Manage Users</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Manage application users</h3>
			{/* Searching & Filtering */}
			<div className="flex justify-between items-center flex-wrap gap-3 -mt-2 mb-6">
				{/* Filtering */}
				<div className="space-y-1">
					<Select
						options={roleFilterOptions}
						value={roleFilterOptions.find((option) => option.value === roleFilter)}
						className="w-48"
						onChange={(e) => setRoleFilter(e.value)}
						// Dark theme
						theme={(theme) => ({
							...theme,
							borderRadius: 0,
							colors: {
								...theme.colors,
								primary: "#00A8E8",
								neutral80: "#f4f4f5",
							},
						})}
						styles={{
							control: (baseStyles) => ({
								...baseStyles,
								backgroundColor: "#091319",
								borderColor: "#27272a",
								borderRadius: "0.4rem",
								padding: "0.125rem 0",
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
								":hover": { backgroundColor: "#00A8E8" },
							}),
						}}
					/>
				</div>
				{/* Searching */}
				<div className="space-y-1">
					<label className="input w-88 bg-base-300 text-[1rem] rounded-md">
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
			{/* The users table, Ctrl+Click on 'UsersTable' to see the full component */}
			<UsersTable users={users} />
		</main>
	);
};

export default ManageUsers;
