import StoryCard from "../shared/StoryCard";

const TopStories = () => {
	const stories = [
		{
			images: {
				thumbnail:
					"https://img.truvvle.com/?src=aHR0cHM6Ly9pbWcudHJhdmVsZmVlZC5pby9tdXN0YXZpJTJGMjAyMDAyMDZUMjEzNTI1ODA4Wi0yMDE2MDQzMF8xNzE0MTIuanBn",
				gallery: [
					"https://live.staticflickr.com/1870/29431150777_842ab97dec_b.jpg",
					"https://i.pinimg.com/736x/94/58/29/945829850d3aeb3d96c22999b7c89692.jpg",
				],
			},
			title: "Sunset Trek to Bandarban",
			description:
				"That golden sunset over the hills took my breath away. The hike was exhausting, but the view made it all worthwhile. I'll never forget that moment!",
		},
		{
			images: {
				thumbnail:
					"https://www.exibartstreet.com/wp-content/uploads/formidable/8/inbound922723540126355764.jpg",
				gallery: [
					"https://www.travelandexplorebd.com/storage/app/public/tours/November2018/h1t7LpzEARhL4RnD7BK7.jpg",
					"https://thediplomat.com/wp-content/uploads/2015/10/sizes/td-story-s-2/thediplomat_2015-10-16_11-50-33.jpg",
				],
			},
			title: "Lost in the Streets of Old Dhaka",
			description:
				"I took a wrong turn and got lost, but that led me to the best food, smiles, and stories. Sometimes getting lost is the best way to discover a city!",
		},
		{
			images: {
				thumbnail:
					"https://cipdauk.org/wp-content/uploads/2013/09/the-distinguished-guests-including-from-left.jpg",
				gallery: [
					"https://upload.wikimedia.org/wikipedia/commons/c/c3/Hanging_Bridge%2C_Kaptai_Lake.jpg",
					"https://www.bedsbd.org/images/home-banner.jpg",
				],
			},
			title: "Guided an NGO Group Through Rangamati",
			description:
				"They came to learn, and left deeply touched. I was honored to show them the indigenous lifestyle. This tour was more than travel - it was connection.",
		},
		{
			images: {
				thumbnail:
					"https://mediaim.expedia.com/destination/1/2133c6f24c5fdec3367d56a507a1af22.jpg",
				gallery: [
					"https://images.stockcake.com/public/0/8/1/0810d409-a6a5-4aff-8ee2-00c2217fd92e_large/sunset-boat-ride-stockcake.jpg",
					"https://www.bproperty.com/blog/wp-content/uploads/Rajshahi-Feature-Image-1.jpg",
				],
			},
			title: "Evening Boat Ride in Barishal",
			description:
				"As the sun dipped, silence wrapped around us like poetry. That boat ride across the calm river gave me a peace I hadn't felt in months. Magical escape!",
		},
	];
	return (
		<section className="space-y-10">
			<div className="space-y-2">
				{/* Heading */}
				<h2 className="text-4xl font-semibold text-secondary text-center">
					Stories from Community
				</h2>
				{/* Subtext */}
				<p className="text-zinc-200 text-center">
					Stories from our collaborative community members
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-6">
				{stories.map((story, index) => (
					<StoryCard
						key={index}
						storyData={story}
					/>
				))}
			</div>
		</section>
	);
};

export default TopStories;
