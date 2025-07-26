import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { resetPassword } = useAuth();
	const handleReset = (data) => {
		const { email } = data;
		resetPassword(email)
			.then((credentials) => {
				reset();
				toast(
					"We've sent a password reset email to your email address.\nReset your password through the email.",
					{
						icon: "ℹ️",
						duration: 3800,
					},
				);
			})
			.catch((error) => {
				console.log(`${error.message} [${error.code}]`);
				console.error("Firebase Auth Error:", error);
				toast.error("Couldn't send password reset email. Please try once more.");
			});
	};
	return (
		<main
			id="reset-password-page"
			className="w-sm space-y-6"
		>
			<div className="space-y-1">
				<h2 className="text-4xl font-semibold text-primary">Forgot Password</h2>
				<p className="font-medium text-zinc-300">Reset Password with TourNext</p>
			</div>
			<div className="space-y-4">
				<form
					id="reset-password-form"
					className="space-y-4"
					onSubmit={handleSubmit(handleReset)}
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
					<button
						type="submit"
						className="btn btn-lg btn-accent btn-block rounded-lg"
					>
						Reset
					</button>
				</form>
				<p className="text-neutral-400">
					Remember Password?{" "}
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

export default ResetPasswordPage;
