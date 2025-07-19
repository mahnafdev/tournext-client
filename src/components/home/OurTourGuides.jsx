import TourGuideCard from "../shared/TourGuideCard";

const OurTourGuides = () => {
	// Static (JSON) tour-guides data
	// ToDo: Dynamize data by fetching data from Server
	const tourGuides = [
		{
			guideId: "tguide-d9cef62c",
			profilePicture: "https://randomuser.me/api/portraits/men/43.jpg",
			fullName: "Fahim Al Basit",
			email: "fahim.basit@gmail.com",
			gender: "male",
			languages: ["bangla", "english", "hindi"],
		},
		{
			guideId: "tguide-a9879e05",
			profilePicture: "https://randomuser.me/api/portraits/women/63.jpg",
			fullName: "Suborna Khatun",
			email: "suborna.khatun@gmail.com",
			gender: "female",
			languages: ["bangla", "english"],
		},
		{
			guideId: "tguide-94ad92cf",
			profilePicture: "https://randomuser.me/api/portraits/men/72.jpg",
			fullName: "Dustin Henderson",
			email: "dustin.henderson@gmail.com",
			gender: "male",
			languages: ["english", "spanish", "german"],
		},
		{
			guideId: "tguide-8a9dda6a",
			profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
			fullName: "Jane Ives",
			email: "jane.ives@gmail.com",
			gender: "female",
			languages: ["english", "italian"],
		},
		{
			guideId: "tguide-fbc7343b",
			profilePicture: "https://randomuser.me/api/portraits/men/52.jpg",
			fullName: "Steve Harrington",
			email: "steve.harrington@gmail.com",
			gender: "male",
			languages: ["english", "spanish", "russian"],
		},
		{
			guideId: "tguide-2b6bece7",
			profilePicture: "https://randomuser.me/api/portraits/women/76.jpg",
			fullName: "Joyce Byers",
			email: "joyce.byers@gmail.com",
			gender: "female",
			languages: ["english", "japanese"],
		},
		// purpose: "",
		// resume: "",
		// tourSpecialities: [""],
		// availableCountries: [""],
		// experience: 0,
		// availibilityDays: [""],
		// social: { key: "" },
	];
	return (
		<div className="flex flex-wrap justify-center gap-6">
			{tourGuides?.map((tourGuide) => (
				<TourGuideCard
					key={tourGuide.guideId}
					tourGuideData={tourGuide}
				/>
			))}
		</div>
	);
};

export default OurTourGuides;
