import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
	const { id, vehicle, img } = props.vehicle;


	return (
		<Link className="col-md-3" style={{ textDecoration: 'none' }} to={'Destination/' + id}>
			<div >
				<div style={{ borderRadius: "10px" }} className="card">
					<img style={{ height: '200px' }} className="p-4" src={img} alt="" />
					<h2 className="text-align-center">{vehicle}</h2>
				</div>

			</div>
		</Link>

	);
};

export default Cards;