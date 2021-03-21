import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import fakeData from '../fakeData/fakeData.json'
import background from '../images/background.jpg'
import './Home.css'
const Home = () => {

	const [vehicles, setVehicles] = useState([])


	useEffect(() => {
		setVehicles(fakeData)
	}, [])

	return (
		<div className="home">
			{/* <img className="w-100" src={background} alt="" /> */}
			<div className="d-flex row mt-5 g-4 w-75 mx-auto">
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