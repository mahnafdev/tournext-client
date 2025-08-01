import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { TbDots } from "react-icons/tb";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CandidatesTable = () => {
	// Fetch applications/candidates data from server
	const { data: candidates } = useQuery({
		queryKey: ["pending-candidates"],
		queryFn: async () => {
			const res = await apiClient.get("/tour-guides?status=pending");
			return res.data;
		},
	});
	// Handle Candidate Accept
	const handleAcceptCandidate = (userEmail, guideId) => {
		// Update candidate status & role
		apiClient
			.patch("/accept-tour-guide", {
				user_email: userEmail,
				guide_id: guideId,
			})
			.then((res) => {
				// Show toast message on success
				if (
					res.data.updateUser?.modifiedCount > 0 &&
					res.data.updateGuide?.modifiedCount > 0
				) {
					toast.success("Candidate accepted as Tour Guide successfully");
				}
			})
			.catch((error) => {
				console.log(`${error.response?.statusText}: ${error.message}`);
				toast.error("We couldn't accept the candidate. Please try once more.");
			});
	};
	// Handle Candidate Reject
	const handleRejectCandidate = (guideId) => {
		// Update candidate status & role
		apiClient
			.patch(`/reject-tour-guide/${guideId}`)
			.then((res) => {
				// Show toast message on success
				if (res.data?.modifiedCount > 0) {
					toast.success("Candidate rejected successfully");
				}
				setTimeout(() => {
					window.location.reload();
				}, 2500);
			})
			.catch((error) => {
				console.log(`${error.response?.statusText}: ${error.message}`);
				toast.error("We couldn't reject the candidate. Please try once more.");
			});
	};
	return (
		<div className="overflow-x-auto bg-base-300 border border-base-content/15 rounded-xl">
			<table className="table">
				{/* Table Head */}
				<thead className="text-zinc-400 text-[1rem]">
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Reason</th>
						<th>Candidate</th>
						<th>Candidate Role</th>
						<th>Resume</th>
						<th>Country</th>
						<th>Actions</th>
					</tr>
				</thead>
				{/* Table Body */}
				<tbody>
					{candidates?.map((candidate) => {
						const {
							guide_id,
							application_title: applicationTitle,
							joining_reason: joiningReason,
							guide_name: candidateName,
							guide_email: candidateEmail,
							resume,
							country,
						} = candidate;
						return (
							<tr key={guide_id}>
								<td className="w-36">
									#{guide_id?.split("-")[1].toUpperCase()}
								</td>
								<td className="w-sm">{applicationTitle}</td>
								<td className="w-sm text-xs leading-tight">{joiningReason}</td>
								<td>{candidateName}</td>
								<td className="w-40">Tourist</td>
								<td className="w-44">
									<a
										href={resume}
										target="_blank"
										className="font-medium text-accent hover:underline hover:underline-offset-2"
									>
										{resume.split("/")[2]}
									</a>
								</td>
								<td className="w-36">
									{country[0].toUpperCase()}
									{country.slice(1)}
								</td>
								<td>
									<Menu>
										<MenuButton className="rounded bg-base-100 px-2 py-1 shadow-inner shadow-neutral/10 focus:not-data-focus:outline-none data-hover:bg-zinc-900/75 data-open:bg-zinc-900">
											<TbDots size={24} />
										</MenuButton>
										<MenuItems
											transition
											anchor="bottom end"
											className="w-40 mt-1 rounded-xl border border-neutral/10 bg-base-200 px-1 py-1.5 transition duration-100 ease-out data-closed:scale-90 data-closed:opacity-0"
										>
											<MenuItem>
												<button
													className="text-start w-full rounded px-2 py-1.5 data-focus:bg-base-300"
													onClick={() =>
														handleAcceptCandidate(
															candidateEmail,
															guide_id,
														)
													}
												>
													Accept
												</button>
											</MenuItem>
											<MenuItem>
												<button
													className="text-start w-full rounded px-2 py-1.5 data-focus:bg-base-300"
													onClick={() =>
														handleRejectCandidate(guide_id)
													}
												>
													Reject
												</button>
											</MenuItem>
										</MenuItems>
									</Menu>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CandidatesTable;
