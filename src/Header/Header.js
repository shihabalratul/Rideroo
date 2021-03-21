import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext)
	return (
		<div className="d-block">
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
				<div className="container-fluid">
					<h2 className="fw-bolder">RideRoo</h2>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link fw-bold" to="#">Destination</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link fw-bold" to="#">Blog</Link>
							</li>


							{loggedInUser.name ? <li className="nav-item dropdown">
								<p className="nav-link dropdown-toggle fw-bold text-danger" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									{loggedInUser.name}
								</p>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><Link className="dropdown-item" to="#" onClick={() => setLoggedInUser({})}>Sign Out</Link></li>

								</ul>
							</li> :
								<li>
									<Link className="ms-2 btn btn-danger" to="/signIn">Sign In</Link>
								</li>
							}

						</ul>
					</div>
				</div>
			</nav>
		</div >
	);
};

export default Header;