import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';
import { initLoginFramework, signInWithEmailAndPassword, signUpWithEmailAndPassword } from '../Firebase/Firebase';
import LoginWithOthers from '../LoginWithOthers/LoginWithOthers';

const SignUp = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };
	const [user, setUser] = useState({
		name: '',
		email: '',
		err: '',
		success: false

	})
	initLoginFramework()

	const { register, handleSubmit, errors, watch } = useForm();
	const password = useRef({});
	password.current = watch("password", "");
	const onSubmit = data => {

		signUpWithEmailAndPassword(data.name, data.email, data.password)
			.then(res => {
				setUser(res);
				if (user.success === true) {
					signInWithEmailAndPassword(data.email, data.password)
						.then(res => {
							setUser(res);
							setLoggedInUser(res)
							history.replace(from);
						})
				}
			})

	};

	return (
		<div style={{ width: "450px" }} className=' mx-auto'>
			{user.err && <p className="text-danger mb-5">{user.err}</p>}
			<form className="card mt-5 p-4" onSubmit={handleSubmit(onSubmit)}>
				<h2 className='text-start m-2 pb-4'>Sign up</h2>
				<input className="inp my-3" name="name" ref={register({ required: true })} placeholder='Your Name' />
				{errors.name && <span style={{ color: 'red' }}>Please Enter Name</span>}

				<input className="inp my-3" name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Email' />
				{errors.email && <span style={{ color: 'red' }}>Please Enter a Valid Email</span>}

				<input className="inp my-4" name="password" type="password" ref={register({ required: true, min: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} placeholder='Password' />
				{errors.password && <span style={{ color: 'red' }}>Password must contain minimum 8 digit and at least 1 letter and number. </span>}

				<input className="inp my-4" name="repeatPassword" type="password" ref={register({
					required: true, validate: value =>
						value === password.current
				})} placeholder='Confirm Password' />
				{errors.repeatPassword && <span style={{ color: 'red' }}>Must match with password.</span>}

				<div className="text-start mb-4">
					<input type="checkbox" name="remember" id="remember" label='Remember me' />
					<label htmlFor="remember" className="ms-1">Remember me.</label>
				</div>
				<input className="my-4 btn btn-danger" type="submit" value="Sign Up" />
				<p>Already have an account? <Link to='signIn' className="sign-up text-danger">Sign in</Link></p>
			</form>

			<p className="mt-4 fs-5">or</p>

			<LoginWithOthers />
		</div>
	);
};

export default SignUp;