import IphoneMockup from "../../assets/mockup/brand-iphone-mockup.png";
import IpadMockup from "../../assets/mockup/brand-ipad-mockup.png";

const GetApp = () => {
	return (
		<section className="p-16 bg-primary/40 rounded-4xl flex items-center justify-between">
			{/* Mockup Images */}
			<div className="grid grid-cols-2 gap-1 bg-base-300/75 rounded-2xl">
				{/* Iphone Mockup */}
				<img
					src={IphoneMockup}
					alt="Iphone App Mockup"
					className="w-80 h-96 object-cover object-center contrast-110 rounded-l-2xl"
				/>
				{/* Ipad Mockup */}
				<img
					src={IpadMockup}
					alt="Ipad App Mockup"
					className="w-80 h-96 object-cover object-center contrast-110 rounded-r-2xl"
				/>
			</div>
			{/* Core Information */}
			<div className="space-y-6 max-w-1/2 text-right">
				{/* Title */}
				<h1 className="text-5xl font-semibold">Travel with our App</h1>
				{/* Sub-text */}
				<p className="text-balance text-zinc-200">
					Book your tours anywhere (while outside or sitting or lying on bed) and
					anytime with our comprehensive mobile app. We're improving it weekly.
					Download our app on both Android and iOS devices using the links below.
				</p>
				{/* App Download Buttons */}
				<div className="flex justify-end items-center gap-4">
					{/* Google Play Store Download */}
					<a
						href="https://surl.lu/jifalp"
						target="_blank"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
							alt="Get it on Google Play"
							className="w-40 hover:brightness-120"
						/>
					</a>
					{/* Apple App Store Download */}
					<a
						href="https://surl.li/ugbsri"
						target="_blank"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
							alt="Download on the App Store"
							className="w-40 hover:brightness-120"
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default GetApp;
