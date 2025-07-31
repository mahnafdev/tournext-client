import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import apiClient from "../../services/apiClient";

const GoogleLogin = () => {
	const { loginWithGoogle } = useAuth();
	const navigate = useNavigate();
	const handleLogin = () => {
		loginWithGoogle()
			.then((authCredentials) => {
				const { displayName, photoURL, email } = authCredentials.user;
				const cleanedData = {
					user_id: `user-${crypto.randomUUID().split("-")[0]}`,
					full_name: displayName,
					picture: photoURL,
					email,
					role: "Tourist",
					tagline: "",
				};
				apiClient.post("/users", cleanedData).then((res) => {
					if (res.data.insertedId) {
						toast.success("Account created successfully");
						setTimeout(() => {
							navigate("/profile");
						}, 2500);
					} else if (!res.data.inserted) {
						toast.success("Logged in successfully");
						setTimeout(() => {
							navigate("/profile");
						}, 2500);
					} else {
						toast.error(
							"Couldn't create or log in to account. Please try once more.",
						);
					}
				});
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
