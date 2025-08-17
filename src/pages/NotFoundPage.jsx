import { Link } from "react-router";
import NotFoundImage from "../assets/not-found.jpg";

const NotFoundPage = () => {
	return (
		<main className="relative">
			<img
				src={NotFoundImage}
				alt="404 Not Found Image"
				className="w-screen h-screen object-cover"
			/>
			<Link to="/">
				<button
					type="button"
					className="w-66 md:w-98 lg:w-74 2xl:w-md h-10 md:h-13 lg:h-12 2xl:h-16 bg-transparent absolute left-[50%] -translate-x-[51%] bottom-26 md:bottom-38 lg:bottom-18 2xl:bottom-0 cursor-pointer"
				></button>
			</Link>
		</main>
	);
};

export default NotFoundPage;
