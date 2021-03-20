import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

export const initLoginFramework = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
}


export const handleGoogleSignIn = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	return firebase.auth().signInWithPopup(googleProvider)
		.then(res => {
			const { displayName, email } = res.user;
			return ({
				email: email,
				name: displayName
			})
			// console.log(displayName, email, photoURL);
		})
		.catch(err => {

			return ({
				err: err.message
			})
		})
}

export const handleFbSignIn = () => {
	const fbProvider = new firebase.auth.FacebookAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(fbProvider)
		.then(res => {
			const { displayName, email } = res.user;
			return ({
				email: email,
				name: displayName
			})

		})
		.catch((error) => {

			return ({
				err: error.message
			});

		});
}

export const signInWithEmailAndPassword = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password)
		.then(res => {
			const { displayName, email } = res.user;
			console.log(res)
			return ({
				email: email,
				name: displayName

			})


		})
		.catch((error) => {
			return ({
				err: error.message
			});

		});
}

export const signUpWithEmailAndPassword = (name, email, password) => {
	return firebase.auth().createUserWithEmailAndPassword(email, password)

		.then(res => {
			updateName(name);
			return ({
				success: true
			})


		})
		.catch((error) => {
			return ({
				err: error.message
			});
			// console.log(error)
		});
}

const updateName = name => {
	firebase.auth().currentUser.updateProfile({
		displayName: name,

	}).then(res => {
		console.log(res)

	}).catch(error => {

	});
};