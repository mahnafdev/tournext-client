import { TbMenu2 } from "react-icons/tb";
import TourGuideApplicationForm from "../../components/dashboard/TourGuideApplicationForm";

const TourGuideApplication = () => {
	return (
		<main
			id="tour-guide-application-page"
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
					Join as Tour Guide
				</h2>
			</div>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-2xl lg:text-[1.75rem] font-medium">
				Enter your application details
			</h3>
			{/* The form, Ctrl+Click on 'TourGuideApplicationForm' to see the full component */}
			<TourGuideApplicationForm />
		</main>
	);
};

export default TourGuideApplication;
