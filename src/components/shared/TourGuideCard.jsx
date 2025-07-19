import { Link } from "react-router";

const TourGuideCard = ({ tourGuideData }) => {
	const { guideId, profilePicture, fullName, email, gender, languages } = tourGuideData;
	return (
		<div className="w-sm lg:w-md h-full p-5 bg-base-300 border border-accent/75 rounded-2xl space-y-5">
			{/* Profile Picture & Full Name */}
			<div className="flex items-center gap-4">
				<img
					src={profilePicture}
					alt="Tour Guide Image"
					className="size-18 rounded-full"
				/>
				<h4 className="text-2xl font-semibold">{fullName}</h4>
			</div>
			{/* Other Information */}
			<div className="flex flex-col gap-y-2">
				{/* Gender */}
				<p className="flex items-center gap-x-2 font-medium text-lg">
					Gender:{" "}
					<span className="badge badge-accent badge-outline text-[1rem] h-7">
						{gender[0].toUpperCase()}
						{gender.slice(1)}
					</span>
				</p>
				{/* Email */}
				<p className="flex items-center gap-x-2 font-medium text-lg">
					Email: <span className="badge badge-accent badge-outline h-7">{email}</span>
				</p>
				{/* Languages */}
				<p className="flex items-center gap-x-2 font-medium text-lg">
					Languages:{" "}
					<div className="flex flex-wrap gap-1">
						{languages.map((language) => (
							<span
								key={language}
								className="badge badge-accent badge-outline h-6"
							>
								{language[0].toUpperCase()}
								{language.slice(1)}
							</span>
						))}
					</div>
				</p>
				{/* View Details button-link */}
				<Link
					to={`/profile/${guideId}`}
					target="_blank"
					className="self-end mt-2"
				>
					<button
						type="button"
						className="btn btn-accent text-[1rem] rounded-md"
					>
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
};

export default TourGuideCard;
