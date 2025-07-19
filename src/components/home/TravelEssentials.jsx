import TravelEssentialCard from "../shared/TravelEssentialCard";
import { motion } from "motion/react";

const TravelEssentials = () => {
	const essentials = [
		{
			id: "te-402955",
			image: "https://i.postimg.cc/MHfgLnhJ/xiaomi-power-bank.jpg",
			name: "Power Bank",
			brand: "Xiaomi",
			category: "Electronics",
			price: 75,
			sold: 35,
		},
		{
			id: "te-493686",
			image: "https://i.postimg.cc/CLH8WSkW/osprey-hiking-backpack.jpg",
			name: "Hiking Backpack",
			brand: "Osprey",
			category: "Gear & Bags",
			price: 120,
			sold: 18,
		},
		{
			id: "te-967395",
			image: "https://i.postimg.cc/mggPJMbH/columbia-waterproof-jacket.jpg",
			name: "Waterproof Jacket",
			brand: "Columbia",
			category: "Clothes",
			price: 95,
			sold: 22,
		},
		{
			id: "te-698425",
			image: "https://i.postimg.cc/cHwCwBcV/nike-hiking-sneakers.jpg",
			name: "Hiking Sneakers",
			brand: "Nike",
			category: "Clothes",
			price: 111,
			sold: 27,
		},
		{
			id: "te-582752",
			image: "https://i.postimg.cc/T1TdmM1D/hydroflask-travel-bottle.jpg",
			name: "Travel Bottle",
			brand: "Hydro Flask",
			category: "Gear & Bags",
			price: 45,
			sold: 40,
		},
		{
			id: "te-593757",
			image: "https://i.postimg.cc/g21Gs6rd/taupesatin-neck-pillow-eye-mask-set.jpg",
			name: "Neck Pillow & Eye Mask",
			brand: "Taupe Satin",
			category: "Gear & Bags",
			price: 35,
			sold: 14,
		},
		{
			id: "te-857285",
			image: "https://i.postimg.cc/Hx9HTZzs/gopro-action-camera.jpg",
			name: "Action Camera",
			brand: "GoPro",
			category: "Electronics",
			price: 250,
			sold: 29,
		},
		{
			id: "te-582770",
			image: "https://i.postimg.cc/gkJdPKZm/dji-mini-drone.jpg",
			name: "Mini Drone",
			brand: "DJI",
			category: "Electronics",
			price: 300,
			sold: 19,
		},
	];
	return (
		<motion.section
			id="travel-essentials-section"
			className="space-y-12"
			initial={{
				scale: 0,
				opacity: 0,
			}}
			whileInView={{
				scale: 1,
				opacity: 100,
			}}
			transition={{
				opacity: {
					duration: 0.7,
					type: "tween",
				},
				scale: {
					duration: 0.8,
					type: "spring",
				},
			}}
		>
			<div className="text-center space-y-3">
				<h2 className="text-secondary text-4xl font-semibold">Travel Essentials</h2>
				<p className="text-zinc-200">
					Gear up for your tours or adventures with the perfect essentials/kits.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{essentials.map((essential) => (
					<TravelEssentialCard
						key={essential.id}
						essentialData={essential}
					/>
				))}
			</div>
		</motion.section>
	);
};

export default TravelEssentials;
