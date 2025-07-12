import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { loginWithEmailAndPassword } = useAuth();
	const navigate = useNavigate();
	const handleLogin = (data) => {
		const { email, password } = data;
		loginWithEmailAndPassword(email, password)
			.then((authCredentials) => {
				reset();
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
		<main
			id="login-page"
			className="w-sm space-y-6"
		>
			<div
				id="login-head"
				className="space-y-1"
			>
				<h2 className="text-4xl font-semibold text-primary">Welcome Back</h2>
				<p className="font-medium text-zinc-300">Login with TourNext</p>
			</div>
			<div
				id="login-body"
				className="space-y-4"
			>
				<form
					id="login-form"
					className="space-y-4"
					onSubmit={handleSubmit(handleLogin)}
				>
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-neutral-300">Email</span>
							<input
								type="email"
								placeholder="you@example.com"
								{...register("email", { required: "Email is required" })}
							/>
						</label>
						{errors.email && <p className="text-error">{errors.email.message}</p>}
					</div>
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-neutral-300">Password</span>
							<input
								type="password"
								placeholder="••••••••••••"
								{...register("password", { required: "Password is required" })}
							/>
						</label>
						{errors.password && (
							<p className="text-error">{errors.password.message}</p>
						)}
					</div>
					<button
						type="submit"
						className="btn btn-lg btn-accent btn-block rounded-lg"
					>
						Login
					</button>
				</form>
				<p className="text-neutral-600">
					Don't have any account?{" "}
					<Link
						to="/auth/signup"
						className="link link-hover font-medium text-secondary"
					>
						Sign Up
					</Link>
				</p>
			</div>
		</main>
	);
};

export default LoginPage;
