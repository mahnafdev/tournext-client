import TourGuideApplicationForm from "../../components/dashboard/TourGuideApplicationForm";

const TourGuideApplication = () => {
	return (
		<main
			id="tour-guide-application-page"
			className="space-y-12"
		>
			{/* Page heading */}
			<h2 className="text-4xl text-primary font-semibold my-0">Join as Tour Guide</h2>
			{/* A horizontal divider */}
			<div className="divider" />
			<h3 className="text-[1.75rem] font-medium">Enter your application details</h3>
			{/* The form, Ctrl+Click on 'TourGuideApplicationForm' to see the full component */}
			<TourGuideApplicationForm />
		</main>
	);
};

export default TourGuideApplication;
