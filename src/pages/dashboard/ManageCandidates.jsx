import CandidatesTable from "../../components/dashboard/CandidatesTable";

const ManageCandidates = () => {
	return (
		<main
			id="manage-candidates-page"
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
					Manage Candidates
				</h2>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-2xl lg:text-[1.75rem] font-medium">
				Manage tour guide candidates
			</h3>
			{/* The candidates table, Ctrl+Click on 'CandidatesTable' to see the full component */}
			<CandidatesTable />
		</main>
	);
};

export default ManageCandidates;
