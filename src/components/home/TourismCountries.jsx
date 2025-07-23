const TourismCountries = () => {
	const countries = [
		{
			name: "Bangladesh",
			thumbnail:
				"https://cdn.pixabay.com/photo/2018/09/12/22/43/bangladesh-3673378_1280.jpg",
		},
		{
			name: "Switzerland",
			thumbnail: "https://travelophia.com/wp-content/uploads/2021/07/SWITZERLAND-1.png",
		},
		{
			name: "Turkey",
			thumbnail:
				"https://chasingthedonkey.b-cdn.net/wp-content/uploads/2023/03/Uzungol-lake-in-the-north-eastern-part-of-Turkey_Depositphotos_144064851_S.jpeg",
		},
		{
			name: "Afghanistan",
			thumbnail:
				"https://againstthecompass.com/wp-content/uploads/2021/08/DSC_6696-1024x684.jpg",
		},
		{
			name: "Japan",
			thumbnail:
				"https://assets.tripsmiths.com/images/listing/527440-shutterstock-1513825088.jpg",
		},
		{
			name: "Italy",
			thumbnail:
				"https://blog.italotreno.com/wp-content/uploads/2022/04/cinque-terre.jpg",
		},
		{
			name: "Greece",
			thumbnail:
				"https://www.travel.gr/wp-content/uploads/2024/03/shutterstock_654116671-scaled.jpg",
		},
		{
			name: "Spain",
			thumbnail:
				"https://conversaspain.com/wp-content/uploads/2023/08/RONDA-Photo-by-Dhara-2.jpg",
		},
	];
	return (
		<section className="space-y-10 bg-neutral/5 p-16 rounded-4xl">
			<div className="space-y-2">
				{/* Heading */}
				<h2 className="text-4xl font-semibold text-secondary text-center">
					Tourism Countries
				</h2>
				{/* Subtext */}
				<p className="text-zinc-200 text-center">
					Countries where we provide tourism services & guides
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-4">
				{countries.map((country) => (
					<div
						key={country.name}
						className="w-sm h-[28rem] hover:w-md transition-[width] duration-300 rounded-2xl bg-base-300 relative group"
					>
						<img
							src={country.thumbnail}
							alt="Country Image"
							className="w-full h-full object-cover object-center hover:opacity-50 rounded-2xl transition-opacity duration-300"
						/>
						<div className="absolute bottom-8 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<h3 className="text-3xl font-semibold">{country.name}</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TourismCountries;
