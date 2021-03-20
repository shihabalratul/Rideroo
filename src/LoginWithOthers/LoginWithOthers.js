import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../App';
import { handleFbSignIn, handleGoogleSignIn, initLoginFramework } from '../Firebase/Firebase';
import facebook from '../images/facebook.png';
import google from '../images/google.png';

const LoginWithOthers = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };
	const [user, setUser] = useState({
		name: '',
		email: '',
		err: ''

	})
	initLoginFramework()
	const googleSignIn = () => {
		handleGoogleSignIn()
			.then(res => {
				setUser(res);
				setLoggedInUser(res);
				history.replace(from);

			})
	}
	const fbSignIn = () => {
		handleFbSignIn()
			.then(res => {
				setUser(res);
				setLoggedInUser(res);
				history.replace(from);
			})
	}
	console.log(user)
	return (

		<div className='p-5'>
			{user.err && <p className="text-danger mb-5">{user.err}</p>}
			<div onClick={fbSignIn} className="d-flex pt-3 ps-3 signInOthers">
				<img className='img' src={facebook} alt="" />
				<p className='mx-auto'>Continue With Facebook</p>
			</div>
			<div onClick={googleSignIn} className="d-flex mt-3 pt-3 ps-3 signInOthers">
				<img className='img' src={google} alt="" />
				<p className='mx-auto'>Continue With Google</p>
			</div>
		</div>

	);
};

export default LoginWithOthers;