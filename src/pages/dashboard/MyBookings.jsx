import MyBookingsTable from "../../components/dashboard/MyBookingsTable";

const MyBookings = () => {
	// ToDo: Fetch bookings count from server
	return (
		<main
			id="my-bookings-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">My Bookings</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Manage your bookings</h3>
			{/* The bookings table, Ctrl+Click on 'MyBookingsTable' to see the full component */}
			<div className="-mt-2 space-y-2">
				<p className="text-zinc-300">
					You have total <span className="font-medium">3</span> bookings
				</p>
				<MyBookingsTable />
			</div>
		</main>
	);
};

export default MyBookings;
