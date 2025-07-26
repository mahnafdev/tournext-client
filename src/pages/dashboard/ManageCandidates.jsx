import CandidatesTable from "../../components/dashboard/CandidatesTable";

const ManageCandidates = () => {
	return (
		<main
			id="manage-candidates-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Manage Candidates</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Manage tour guide applications</h3>
			{/* The candidates table, Ctrl+Click on 'CandidatesTable' to see the full component */}
			<CandidatesTable />
		</main>
	);
};

export default ManageCandidates;
