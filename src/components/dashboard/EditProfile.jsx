import { Fragment } from "react";
import { useForm } from "react-hook-form";

const EditProfile = ({ profileData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleEdit = (data) => {
		console.log(data);
	};
	return (
		<Fragment>
			<div className="text-end mb-4 mr-4">
				<button
					type="button"
					className="btn text-lg btn-accent rounded-md"
					onClick={() => document.getElementById("edit-profile-modal").showModal()}
				>
					Edit
				</button>
			</div>
			<dialog
				id="edit-profile-modal"
				className="modal"
			>
				<div className="modal-box !max-w-xl">
					<form method="dialog">
						<button className="btn btn-circle btn-ghost btn-accent text-[1rem] size-7 absolute right-2 top-2">
							✕
						</button>
					</form>
					<h2 className="font-semibold text-4xl text-primary text-center mb-6">
						Edit Profile
					</h2>
					<form
						id="edit-profile-form"
						className="space-y-3"
						onSubmit={handleSubmit(handleEdit)}
					>
						<div className="validated-input space-y-1">
							<label className="input w-full text-[1rem] rounded-lg">
								<span className="label text-neutral-300">Full Name</span>
								<input
									type="text"
									defaultValue={profileData?.full_name}
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
								<span className="label text-neutral-300">Profile Picture</span>
								<input
									type="url"
									defaultValue={profileData?.picture_url}
									{...register("picture_url", {
										required: "Picture URL is required",
									})}
								/>
							</label>
							{errors.picture_url && (
								<p className="text-error">{errors.picture_url.message}</p>
							)}
						</div>
						<div className="validated-input space-y-1">
							<label className="input w-full text-[1rem] rounded-lg">
								<span className="label text-neutral-300">Tagline</span>
								<input
									type="text"
									defaultValue={profileData?.tagline}
									{...register("tagline", {
										required: "Tagline is required",
										maxLength: {
											value: 100,
											message: "Maximum length is 100 characters",
										},
									})}
								/>
							</label>
							{errors.tagline && (
								<p className="text-error">{errors.tagline.message}</p>
							)}
						</div>
						<div className="text-center mt-6">
							<button
								type="submit"
								className="btn btn-lg btn-accent w-48 rounded-lg"
							>
								Proceed to Edit
							</button>
						</div>
					</form>
				</div>
			</dialog>
		</Fragment>
	);
};

export default EditProfile;
