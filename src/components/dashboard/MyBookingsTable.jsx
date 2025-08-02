import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";

const MyBookingsTable = () => {
	const { user } = useAuth();
	// Fetch bookings data
	const { data: bookings } = useQuery({
		queryKey: ["bookings", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/bookings?tourist_email=${user?.email}`);
			return res.data;
		},
	});
	return (
		<div className="overflow-x-auto bg-base-300 border border-base-content/15 rounded-xl">
			<table className="table">
				{/* Table Head */}
				<thead className="text-zinc-400 text-[1rem]">
					<tr>
						<th>ID</th>
						<th>Tour Title</th>
						<th>Tour Guide</th>
						<th>Tour Date</th>
						<th>Price</th>
						<th>Status</th>
					</tr>
				</thead>
				{/* Table Body */}
				<tbody>
					{bookings?.map((booking) => (
						<tr key={booking.booking_id}>
							<td>#{booking.booking_id.split("-")[1].toUpperCase()}</td>
							<td>{booking.tour_name}</td>
							<td>{booking.tour_guide.name}</td>
							<td>
								{new Date(booking.tour_date)
									.toLocaleDateString()
									.replaceAll("/", " / ")}
							</td>
							<td>${booking.tour_price}</td>
							<td>{booking.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyBookingsTable;
