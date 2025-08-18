import { TbMenu2 } from "react-icons/tb";
import MyBookingsTable from "../../components/dashboard/MyBookingsTable";

const MyBookings = () => {
	return (
		<main
			id="my-bookings-page"
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
				<h2 className="text-3xl lg:text-4xl text-primary font-semibold">My Bookings</h2>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Manage your bookings</h3>
			{/* The bookings table, Ctrl+Click on 'MyBookingsTable' to see the full component */}
			<div className="-mt-2 space-y-2">
				<MyBookingsTable />
			</div>
		</main>
	);
};

export default MyBookings;
