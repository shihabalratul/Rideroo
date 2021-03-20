import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import fakeData from '../fakeData/fakeData.json'
import GMap from '../GMap/GMap';
import RideOption from '../RideOption/RideOption';

const Destination = () => {
	const [destination, setDestination] = useState({
		pickFrom: '',
		pickTo: ''
	})
	const { id } = useParams();
	console.log(fakeData)
	const vehicle = fakeData.find(vh => vh.id === id);
	console.log(vehicle)
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		setDestination({
			pickFrom: data.pickFrom,
			pickTo: data.pickTo
		})
	}
	console.log(destination)
	return (
		<div className='row m-4'>
			<div className='col-md-4'>
				{destination.pickFrom && destination.pickTo ?
					<div style={{ borderRadius: '10px' }} className="p-2 bg-light text-start">
						<div style={{ borderRadius: '10px', color: 'white' }} className="bg-danger m-2 p-3 ">
							<ul>
								<li><h5>{destination.pickFrom}</h5></li>
								<br />
								<li><h5>{destination.pickTo}</h5></li>
							</ul>
						</div>
						<RideOption key={vehicle.id} vehicle={vehicle} />
						<RideOption key={vehicle.id} vehicle={vehicle} />
						<RideOption key={vehicle.id} vehicle={vehicle} />
					</div>
					:
					<form style={{ borderRadius: '10px' }} className="p-4 me-2 bg-light" onSubmit={handleSubmit(onSubmit)}>
						<div className='text-start'>
							<label className='for-label' htmlFor="pickFrom">Pick From</label>
							<br />
							<input className="form-control mt-2" type="text" name="pickFrom" id="" ref={register({ required: true })} />
							{errors.pickFrom && <span style={{ color: 'red' }}>Please fill up the field.</span>}
						</div>
						<div className='text-start mt-3'>
							<label className='for-label' htmlFor="pickFrom">Pick to</label>
							<br />
							<input className="form-control mt-2" type="text" name="pickTo" id="" ref={register({ required: true })} />
							{errors.pickTo && <span style={{ color: 'red' }}>Please fill up the field.</span>}
						</div>

						<input className="form-control btn btn-danger mt-4 mb-2" type="submit" value="Search" />
					</form>

				}
			</div>
			<div className='col-md-8'>
				<div style={{ borderRadius: '10px' }}>
					<GMap destination={destination} />
				</div>

			</div>
		</div>
	);
};

export default Destination;