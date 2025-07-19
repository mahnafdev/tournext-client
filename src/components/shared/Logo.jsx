import { Link } from "react-router";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
	return (
		<Link to="/">
			{/* Align Logo Image and Text horizontally (flex layout) */}
			<div className="flex items-center gap-x-2 group">
				{/* Logo Image */}
				<img
					src={LogoImage}
					alt="Logo Image"
					className="size-8 lg:size-10 grayscale group-hover:grayscale-0 transition-[filter]"
				/>
				{/* Logo Text */}
				<h4 className="font-delius text-2xl font-extrabold tracking-wider">TourNext</h4>
			</div>
		</Link>
	);
};

export default Logo;
