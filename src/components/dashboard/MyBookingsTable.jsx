const MyBookingsTable = () => {
	// Bookings data
	// ToDo: Fetch bookings data from server
	const bookings = [
		{
			booking_id: "booking-958238d3",
			tour_title: "Cox's Bazar Beach Escape",
			tour_price: 350,
			tour_date: "2025-07-11T16:07:49.000Z",
			booking_status: "In-Review",
		},
		{
			booking_id: "booking-d5b2cb86",
			tour_title: "Bandarban Hill Trek",
			tour_price: 190,
			tour_date: "2025-06-21T16:10:25.000Z",
			booking_status: "In-Review",
		},
		{
			booking_id: "booking-66b890de",
			tour_title: "Malaysia Langkawi Island Discovery",
			tour_price: 460,
			tour_date: "2025-07-23T16:12:43.000Z",
			booking_status: "In-Review",
		},
	];
	return (
		<div className="overflow-x-auto bg-base-300 border border-base-content/15 rounded-xl">
			<table className="table">
				{/* Table Head */}
				<thead className="text-zinc-400 text-[1rem]">
					<tr>
						<th>ID</th>
						<th>Tour Name</th>
						<th>Tour Date</th>
						<th>Price</th>
						<th>Status</th>
					</tr>
				</thead>
				{/* Table Body */}
				<tbody>
					{bookings.map((booking) => (
						<tr key={booking.booking_id}>
							<td>#{booking.booking_id.split("-")[1].toUpperCase()}</td>
							<td>{booking.tour_title}</td>
							<td>
								{new Date(booking.tour_date)
									.toLocaleDateString()
									.replaceAll("/", " / ")}
							</td>
							<td>${booking.tour_price}</td>
							<td>{booking.booking_status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyBookingsTable;
