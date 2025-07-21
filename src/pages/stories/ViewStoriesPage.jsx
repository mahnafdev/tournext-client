import StoryCard from "../../components/shared/StoryCard";

const ViewStoriesPage = () => {
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
					"https://www.shutterstock.com/image-photo/nice-couple-enjoying-coxs-bazar-600nw-2335654871.jpg",
				gallery: [
					"https://thumbs.dreamstime.com/b/couples-experiencing-sun-set-longest-sea-beach-world-sea-beach-cox-z-bazar-bangladesh-168924102.jpg",
					"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTO6xu-11EWevBQPFq4sZekfHkrOU6dCK_piPh-Hg6sQZ2U_FvsLJ9dbopep2brfPvV5llai__UoCgeH6ZOQh-hOKzeQmX-2j8RjtteC-t_-wX4vdfXOWYH-902kqau8GA9BBMQcqMo58k/s1600/Couples-30.jpg",
				],
			},
			title: "Guided a Swiss Couple at Cox's Bazar",
			description:
				"They were amazed by the sea, the food, and our local culture. Sharing my homeland with them was an experience I'll treasure forever. What a joyful tour!",
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
					"https://www.j-g-a.org/uploads/1/3/0/0/130059509/guide-training-square_5.jpg",
				gallery: [
					"https://arhiva.nacional.hr/img/cdbc5ef0acfb351d8a075892a8ba4b3e_700x550.jpg",
					"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/6a/4e/4a.jpg",
				],
			},
			title: "Guided a Japanese Group in Sylhet",
			description:
				"From tea garden strolls to singing by the stream, this group brought so much warmth and laughter. One of my most wholesome guiding experiences yet!",
		},
		{
			images: {
				thumbnail:
					"https://media.evendo.com/locations-resized/AttractionImages/360x263/5d0d1e5c-7e74-47ad-8515-ab2460647432",
				gallery: [
					"https://live.staticflickr.com/921/29804692438_fb1705e93c_b.jpg",
					"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/8b/9e/65.jpg",
				],
			},
			title: "Hiking in Sajek Valley",
			description:
				"A misty morning, a hot cup of coffee, and the world waking up in front of me. Sajek Valley is a dream that made me fall in love with nature all over again.",
		},
		{
			images: {
				thumbnail:
					"https://nijhoom.b-cdn.net/wp-content/uploads/2016/11/richard-family-walking-sundarbans-1000.jpg",
				gallery: [
					"https://www.smartvoyager.net/places-to-go/picts/articles/tn900x800-What-see-family-vacation-Canada.jpg",
					"https://cdn.tripspoint.com/uploads/photos/1783/day-long-sundarban-tour-from-khulna_u5ePn.jpeg",
				],
			},
			title: "Touring Sundarban With A Family from Canada",
			description:
				"They saw a deer and screamed 'Tiger!'. We laughed all the way back. Moments like these remind me why I love guiding. Pure fun and unforgettable joy!",
		},
		{
			images: {
				thumbnail:
					"https://ttg.com.bd/uploads/tours/plans/206_1878484_saint-martins-island-bangladeshjpg.jpg",
				gallery: [
					"https://enrichingpursuits.com/wp-content/uploads/2022/05/Sunset-over-the-Grand-Case-Beach-in-St-Martin.jpg",
					"https://img.freepik.com/free-photo/coconut-drink-palm-tree-beach_268835-1957.jpg",
				],
			},
			title: "My First Trip to Saint Martin's Island",
			description:
				"From snorkeling to coconut drinks by the beach, Saint Martin's blew my mind. The colors, calmness, and vibes were all beyond what I imagined. Take me back.",
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
		{
			images: {
				thumbnail:
					"https://images.unsplash.com/photo-1573728303123-6d984b991947?fm=jpg",
				gallery: [
					"https://images.pexels.com/photos/13082525/pexels-photo-13082525.jpeg",
					"https://absortech.com/wp-content/uploads/2022/06/umbrella_rain_monsoon-season.jpg",
				],
			},
			title: "Guided a Couple During Monsoon",
			description:
				"It rained nonstop but we danced through puddles and shared street food under one umbrella. Their happiness made that rainy day a sunshine memory!",
		},
	];
	return (
		<main className="mx-4 my-10 md:m-12 space-y-10">
			<div className="space-y-2">
				{/* Heading */}
				<h2 className="text-4xl font-semibold text-primary text-center">
					Community Stories
				</h2>
				{/* Subtext */}
				<p className="text-zinc-300 text-center">
					Share your stories and moments while touring or guiding with the community.
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-4">
				{stories.map((story, index) => (
					<StoryCard
						key={index}
						storyData={story}
					/>
				))}
			</div>
		</main>
	);
};

export default ViewStoriesPage;
