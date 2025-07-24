import { useEffect, useState } from "react";
import { auth } from "../../config/firebase.config";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const signUpWithEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const loginWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const updateUserProfile = (displayName, photoURL) => {
		return updateProfile(auth.currentUser, { displayName, photoURL });
	};
	const logout = () => {
		return signOut(auth);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	return {
		user,
		loading,
		signUpWithEmailAndPassword,
		loginWithEmailAndPassword,
		loginWithGoogle,
		updateUserProfile,
		logout,
	};
};

export default useAuth;
