const UsersTable = ({ users }) => {
	return (
		<div className="overflow-x-auto bg-base-300 border border-base-content/15 rounded-xl">
			<table className="table">
				{/* Table Head */}
				<thead className="text-zinc-400 text-[1rem]">
					<tr>
						<th>User ID</th>
						<th>Picture</th>
						<th>Full Name</th>
						<th>Role</th>
						<th>Email</th>
						<th>Tagline</th>
					</tr>
				</thead>
				{/* Table Body */}
				<tbody>
					{users?.map((user) => {
						const {
							userId,
							picture_url: picture,
							full_name: fullName,
							role,
							email,
							tagline,
						} = user;
						return (
							<tr key={userId}>
								<td>#{userId.split("-")[1].toUpperCase()}</td>
								<td>
									<img
										src={picture}
										alt="Picture"
										className="size-10 object-cover object-center rounded-full hover:scale-150 transition-transform duration-300"
									/>
								</td>
								<td>{fullName}</td>
								<td>{role}</td>
								<td>{email}</td>
								<td
									className="w-md line-clamp-1 leading-10"
									title={tagline}
								>
									{tagline}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
