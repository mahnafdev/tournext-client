import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import Confetti from "react-confetti";
import { motion } from "motion/react";
import EditProfile from "../../components/dashboard/EditProfile";

const Profile = () => {
	// Welcome Message state
	const [showWelcome, setShowWelcome] = useState(true);
	// User credentials from Firebase
	const { user } = useAuth();
	// Fetch user data from server
	const { data: userData } = useQuery({
		queryKey: ["user-profile", user?.email],
		queryFn: async () => {
			const res = await apiClient.get(`/users?email=${user?.email}`);
			return res.data[0];
		},
	});
	// Hide Welcome message after 3 seconds
	useEffect(() => {
		setTimeout(() => {
			setShowWelcome(false);
		}, 3000);
	}, []);
	return (
		<main
			id="profile-page"
			className="h-full grid place-items-center"
		>
			{/* Welcome message container */}
			<div
				className={`absolute top-0 left-0 z-50 w-screen h-screen bg-base-300/80 ${
					showWelcome ? "grid" : "hidden"
				} place-items-center`}
			>
				{/* Confetti animation */}
				<Confetti
					gravity={0.5}
					numberOfPieces={240}
					run
					wind={0.1}
				/>
				{/* Animated welcome message */}
				<motion.h1
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						opacity: {
							duration: 1.25,
							type: "tween",
						},
					}}
					className="text-5xl font-semibold text-primary"
				>
					Welcome, {userData?.full_name.split(" ")[0]}!
				</motion.h1>
			</div>
			{/* Profile card */}
			<div className="lg:w-xl md:w-md w-sm rounded-3xl bg-base-300">
				<div className="relative flex flex-col items-center">
					{/* Banner image */}
					<img
						src="https://cdn.vectorstock.com/i/500p/12/61/teal-navy-grunge-texture-vector-53931261.jpg"
						alt="Profile Banner"
						className="w-full h-48 object-cover object-center rounded-t-3xl"
					/>
					{/* Profile picture */}
					<img
						src={userData?.picture}
						alt="Picture"
						className="size-36 object-cover object-center rounded-full -mt-18"
					/>
				</div>
				{/* Name & Tagline */}
				<div className="mt-4 text-center space-y-2">
					{/* Full Name */}
					<h2 className="text-4xl font-semibold">{userData?.full_name}</h2>
					{/* Tagline */}
					<p className="mx-auto text-balance text-zinc-300">{userData?.tagline}</p>
				</div>
				{/* Other info */}
				<div className="m-6 mt-8 space-y-2 text-lg">
					{/* Role */}
					<div className="grid grid-cols-5">
						<span className="col-span-2 font-medium text-zinc-300">Role</span>
						<span className="col-span-3">{userData?.role}</span>
					</div>
					{/* Email */}
					<div className="grid grid-cols-5">
						<span className="col-span-2 font-medium text-zinc-300">Email</span>
						<span className="col-span-3">{userData?.email}</span>
					</div>
				</div>
				{/* Edit Profile modal */}
				{/* <EditProfile profileData={userData} /> */}
			</div>
		</main>
	);
};

export default Profile;
