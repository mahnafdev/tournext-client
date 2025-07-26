const CandidatesTable = () => {
	const applications = [
		{
			application_id: "application-3aebcdaf",
			title: "Application for Tour Guide Role",
			reason: "I have a deep love for exploring cultural landmarks and want to guide others through breathtaking experiences worldwide.",
			candidate_name: "Sasuke Uchiha",
			candidate_role: "Tourist",
			resume: "https://example.com/resume/sasuke-uchiha",
			country: "Japan",
		},
		{
			application_id: "application-da189a7c",
			title: "Passionate Traveler Seeking Tour Guide Position",
			reason: "After years of solo travel, I've developed rich knowledge about global destinations and enjoy helping others discover them safely.",
			candidate_name: "Itachi Uchiha",
			candidate_role: "Tourist",
			resume: "https://example.com/resume/itachi-uchiha",
			country: "Switzerland",
		},
		{
			application_id: "application-2712a382",
			title: "Tour Guide Application by an Experienced Explorer",
			reason: "Leading groups, sharing historical stories, and creating unforgettable tours is my passion and lifelong mission as a traveler.",
			candidate_name: "Obito Uchiha",
			candidate_role: "Tourist",
			resume: "https://example.com/resume/obito-uchiha",
			country: "Greece",
		},
	];
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
					</tr>
				</thead>
				{/* Table Body */}
				<tbody>
					{applications?.map((application) => {
						const {
							application_id,
							title,
							reason,
							candidate_name: candidateName,
							candidate_role: candidateRole,
							resume,
							country,
						} = application;
						return (
							<tr key={application_id}>
								<td className="w-36">
									#{application_id.split("-")[1].toUpperCase()}
								</td>
								<td className="w-sm">{title}</td>
								<td className="w-sm text-xs leading-tight">{reason}</td>
								<td>{candidateName}</td>
								<td className="w-40">{candidateRole}</td>
								<td className="w-44">
									<a
										href={resume}
										target="_blank"
										className="font-medium text-accent hover:underline hover:underline-offset-2"
									>
										{resume.split("/")[2]}
									</a>
								</td>
								<td className="w-36">{country}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CandidatesTable;
