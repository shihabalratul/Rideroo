import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './SignIn.css';

import LoginWithOthers from '../LoginWithOthers/LoginWithOthers';
import { initLoginFramework, signInWithEmailAndPassword } from '../Firebase/Firebase';
import { UserContext } from '../App';

const SignIn = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };

	const [user, setUser] = useState({
		name: '',
		email: '',
		err: ''

	})
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		signInWithEmailAndPassword(data.email, data.password)
			.then(res => {
				setUser(res);
				setLoggedInUser(res);
				history.replace(from);
			})
	};
	initLoginFramework();
	return (
		<div style={{ width: "450px" }} className=' mx-auto'>
			{user.err && <p className="text-danger mb-5">{user.err}</p>}
			<form className="card mt-5 p-4" onSubmit={handleSubmit(onSubmit)}>
				<h2 className='text-start m-2 pb-4'>Sign in</h2>

				<input className="inp my-3" name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Email' />
				{errors.email && <span style={{ color: 'red' }}>Please Enter a Valid Email</span>}

				<input className="inp my-4" name="password" type="password" ref={register({ required: true, min: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} placeholder='Password' />
				{errors.password && <span style={{ color: 'red' }}>Password must contain minimum 8 digit and at least 1 letter and number. </span>}
				<div className="text-start mb-4">
					<input type="checkbox" name="remember" id="remember" label='Remember me' />
					<label htmlFor="remember" className="ms-1">Remember me.</label>
				</div>
				<input className="my-4 btn btn-danger" type="submit" value="Sign in" />
				<p>Don't have an account? <Link to='/signUp' className="sign-up text-danger">Create new account</Link></p>
			</form>

			<p className="mt-4 fs-5">or</p>

			<LoginWithOthers />
		</div>
	);
};

export default SignIn;