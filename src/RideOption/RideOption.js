import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
const RideOption = props => {
	const { vehicle, img, price, passenger } = props.vehicle;
	return (
		<div style={{ borderRadius: '5px', backgroundColor: 'white' }} className="d-flex p-3 m-2">
			<img className="me-3" style={{ width: '50px' }} src={img} alt="" />
			<h4 className="me-3">{vehicle}</h4>
			<h4><FontAwesomeIcon icon={faUsers} /> {passenger}</h4>
			<h4 className="ms-5 ps-5">${price}</h4>

		</div>
	);
};

export default RideOption;