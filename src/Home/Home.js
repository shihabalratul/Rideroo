import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import fakeData from '../fakeData/fakeData.json'
import background from '../images/background.jpg'
const Home = () => {

	const [vehicles, setVehicles] = useState([])


	useEffect(() => {
		setVehicles(fakeData)
	}, [])

	return (
		<div>
			<img className="w-100 position-relative" src={background} alt="" />
			<div className="row row-cols-1 row-cols-md-4 mt-5 g-4 w-75 position-absolute top-50 start-50 translate-middle">
				{
					vehicles.map(vehicle =>
						<Cards key={vehicle.id} vehicle={vehicle}></Cards>
					)
				}

			</div >
		</div>
	);
};


export default Home;