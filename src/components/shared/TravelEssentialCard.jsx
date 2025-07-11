const TravelEssentialCard = ({ essentialData }) => {
	const { id, image, name, brand, category, price, sold } = essentialData;
	return (
		<div className="border border-accent bg-zinc-900 rounded-3xl drop-shadow-[0_7px_0px_var(--color-black)] hover:drop-shadow-none transition-[filter]">
			<div className="w-full h-64 md:h-80 lg:h-[26.5rem] rounded-t-3xl">
				<img
					src={image}
					alt="Product Image"
					className="w-full h-full object-cover object-center rounded-t-3xl"
				/>
			</div>
			<div className="m-4 space-y-3">
				<h6 className="mb-1 text-end text-lg font-medium text-zinc-400">
					<span className="text-accent">#</span>
					{id.split("-")[1]}
				</h6>
				<h4 className="mb-4 text-2xl font-semibold">{name}</h4>
				<p className="font-medium">
					Brand: <span className="badge badge-outline badge-accent">{brand}</span>
				</p>
				<p className="font-medium">
					Category:{" "}
					<span className="badge badge-outline badge-accent">{category}</span>
				</p>
				<p className="font-medium">
					Price: <span className="badge badge-outline badge-accent">${price}</span>
				</p>
				<p className="font-medium flex items-center gap-x-1.5">
					<span className="text-accent font-semibold">{sold}</span> Sold
				</p>
			</div>
		</div>
	);
};

export default TravelEssentialCard;
