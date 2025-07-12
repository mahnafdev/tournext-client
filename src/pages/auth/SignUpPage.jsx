import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { signUpWithEmailAndPassword } = useAuth();
	const navigate = useNavigate();
	const handleSignUp = (data) => {
		const { email, password } = data;
		signUpWithEmailAndPassword(email, password)
			.then((authCredentials) => {
				reset();
				toast.success("Account created successfully");
				setTimeout(() => {
					navigate("/");
				}, 2500);
			})
			.catch((error) => {
				console.log(`${error.message} [${error.code}]`);
				console.error("Firebase Auth Error:", error);
				toast.error("Couldn't create account. Please try once more.");
			});
	};
	return (
		<main
			id="signup-page"
			className="w-sm space-y-6"
		>
			<div
				id="signup-head"
				className="space-y-1"
			>
				<h2 className="text-4xl font-semibold text-primary">Greetings</h2>
				<p className="font-medium text-zinc-300">Create Account with TourNext</p>
			</div>
			<div
				id="signup-body"
				className="space-y-4"
			>
				<form
					id="signup-form"
					className="space-y-4"
					onSubmit={handleSubmit(handleSignUp)}
				>
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-neutral-300">Full Name</span>
							<input
								type="text"
								placeholder="Toor Next"
								{...register("full_name", {
									required: "Full Name is required",
								})}
							/>
						</label>
						{errors.full_name && (
							<p className="text-error">{errors.full_name.message}</p>
						)}
					</div>
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-neutral-300">Username</span>
							<input
								type="text"
								placeholder="you_unique"
								{...register("username", {
									required: "Username is required",
									pattern: {
										value: /^[a-zA-Z0-9]+$/,
										message: "Username can only contain letters and digits",
									},
								})}
							/>
						</label>
						{errors.username && (
							<p className="text-error">{errors.username.message}</p>
						)}
					</div>
					<div className="validated-input space-y-1">
						<label className="input w-full text-[1rem] rounded-lg">
							<span className="label text-neutral-300">Email</span>
							<input
								type="email"
								placeholder="you@example.com"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Invalid email address",
									},
								})}
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
								{...register("password", {
									required: "Password is required",
									validate: {
										minLength: (value) =>
											/^.{9,}$/.test(value) ||
											"Password must contain at least 8 characters",
										hasLowercase: (value) =>
											/[a-z]/.test(value) ||
											"Password must contain at least 1 lowercase letter",
										hasUppercase: (value) =>
											/[A-Z]/.test(value) ||
											"Password must contain at least 1 uppercase letter",
										hasDigit: (value) =>
											/[0-9]/.test(value) ||
											"Password must contain at least 1 digit",
										hasSymbol: (value) =>
											/[!@#$%^&*.;'"<>`~\\/]/.test(value) ||
											"Password must contain at least 1 symbol",
									},
								})}
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
						Sign Up
					</button>
				</form>
				<p className="text-neutral-600">
					Already have any account?{" "}
					<Link
						to="/auth/login"
						className="link link-hover font-medium text-secondary"
					>
						Login
					</Link>
				</p>
			</div>
		</main>
	);
};

export default SignUpPage;
