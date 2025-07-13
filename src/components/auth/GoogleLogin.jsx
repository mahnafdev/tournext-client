import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const GoogleLogin = () => {
	const { loginWithGoogle } = useAuth();
	const navigate = useNavigate();
	const handleLogin = () => {
		loginWithGoogle()
			.then((authCredentials) => {
				toast.success("Logged in successfully");
				setTimeout(() => {
					navigate("/");
				}, 2500);
			})
			.catch((error) => {
				console.log(`${error.message} [${error.code}]`);
				console.error("Firebase Auth Error:", error);
				toast.error("Couldn't login to account. Please try once more.");
			});
	};
	return (
		<button
			type="button"
			className="btn btn-lg text-[1rem] font-medium bg-zinc-950 text-neutral border border-zinc-800 btn-block flex items-center gap-x-2"
			onClick={handleLogin}
		>
			<img
				src="https://cdn-icons-png.flaticon.com/128/2875/2875404.png"
				alt="Google Logo"
				className="size-5"
			/>
			Login with Google
		</button>
	);
};

export default GoogleLogin;
