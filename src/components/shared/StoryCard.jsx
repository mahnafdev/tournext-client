const StoryCard = ({ storyData }) => {
	// Destructure values from data
	const {
		images: { thumbnail: Thumbnail, gallery },
		title,
		description,
	} = storyData;
	const storyBackgrounds = [
		"#dc143c",
		"#228b22",
		"#696969",
		"#6d22a4",
		"#667788",
		"#0045cd",
		"#ee4500",
		"#15a099",
	];
	const chosenStoryBackground =
		storyBackgrounds[Math.floor(Math.random() * storyBackgrounds.length)];
	return (
		<div
			className="w-68 h-[28rem] rounded-2xl hover:scale-103 transition-transform duration-200"
			style={{
				backgroundColor: chosenStoryBackground,
			}}
		>
			{/* Thumbnail Image */}
			<div>
				<img
					src={Thumbnail}
					alt="Thumbnail Image"
					className="w-full h-52 object-cover object-center rounded-t-2xl"
				/>
			</div>
			<div className="p-2 space-y-1 overflow-y-scroll h-58">
				{/* Title */}
				<h6 className="text-lg font-medium text-center">{title}</h6>
				{/* Description */}
				<p className="text-sm text-zinc-200 text-center text-balance">{description}</p>
				{/* Gallery */}
				<div className="flex flex-col gap-y-1 mt-4">
					{gallery.map((image) => (
						<img
							key={image}
							src={image}
							alt="Gallery Image"
							className="w-full h-24 hover:h-38 object-cover object-center rounded-md transition-[height] duration-300"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default StoryCard;
