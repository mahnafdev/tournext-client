import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import apiClient from "../services/apiClient";
import { TbLink, TbMail, TbStar, TbWorldCheck } from "react-icons/tb";
import StoryCard from "../components/shared/StoryCard";

const TourGuideProfilePage = () => {
	// Get guide_id from route parameters
	const { guide_id } = useParams();
	// Fetch guide data
	const { data: guideData } = useQuery({
		queryKey: ["tour-guide-profile", guide_id],
		queryFn: async () => {
			const res = await apiClient.get(`/tour-guides?guide_id=${guide_id}`);
			return res.data[0];
		},
	});
	// Fetch guide's stories data
	const { data: storiesData } = useQuery({
		queryKey: ["tour-guide-stories", guideData?.guide_email],
		queryFn: async () => {
			const res = await apiClient.get(`/stories?poster=${guideData?.guide_email}`);
			return res.data;
		},
	});
	return (
		<main className="m-12 space-y-6">
			{/* Profile Card */}
			<div className="max-w-lg mx-auto bg-base-200 border border-zinc-950 rounded-3xl">
				<div className="flex flex-col">
					{/* Banner image */}
					<img
						src="https://ps.w.org/user-tour-guide/assets/banner-772x250.png"
						alt="Profile Banner"
						className="w-full h-48 object-cover object-center rounded-t-3xl"
					/>
					{/* Profile picture */}
					<img
						src={guideData?.guide_picture}
						alt="Picture"
						className="size-36 ml-4 object-cover object-center rounded-full -mt-18"
					/>
				</div>
				{/* Guide Name */}
				<h2 className="mr-4 -mt-4 text-2xl font-semibold text-primary text-end">
					{guideData?.guide_name}
				</h2>
				{/* Other info */}
				<div className="mx-4 my-6 space-y-2">
					{/* Email */}
					<p className="flex items-center gap-x-2 mx-auto text-zinc-200">
						<TbMail
							size={22}
							className="stroke-accent"
						/>
						{guideData?.guide_email}
					</p>
					{/* Country */}
					<p className="flex items-center gap-x-2 mx-auto text-zinc-200">
						<TbWorldCheck
							size={22}
							className="stroke-accent"
						/>
						{guideData?.country[0].toUpperCase()}
						{guideData?.country.slice(1)}
					</p>
					{/* Resume */}
					<p className="flex items-center gap-x-2 mx-auto text-zinc-200">
						<TbLink
							size={22}
							className="stroke-accent"
						/>
						<a
							href={guideData?.resume}
							target="_blank"
							className="link link-hover link-neutral"
						>
							Resume
						</a>
					</p>
					{/* Goal */}
					<p className="flex gap-x-2 mx-auto text-zinc-200">
						<span className="font-medium">Goal:</span> {guideData?.joining_reason}
					</p>
				</div>
			</div>
			{/* Stories */}
			<div className="space-y-6">
				{/* Section Header */}
				<h2 className="text-4xl font-semibold text-secondary text-center">Stories</h2>
				{/* Stories Container */}
				<div className="flex flex-wrap justify-center gap-4">
					{storiesData?.map((story) => (
						<StoryCard
							key={story.story_id}
							storyData={story}
							isGuideStory={true}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default TourGuideProfilePage;
