import React from 'react';



const GMap = (props) => {
	const { pickFrom, pickTo } = props.destination;
	return (
		<div>
			{ pickFrom && pickTo ?
				<iframe
					title="map"
					width='100%'
					height="500px"
					frameBorder="0" style={{ border: 0, borderRadius: '10px' }}
					src={`https://www.google.com/maps/embed/v1/directions
				?key=AIzaSyDS2oE05wMz7Hn_cTT0BC9lBM8P1j6nKjs
				&origin=${pickFrom}
				&destination=${pickTo}
				&avoid=tolls|highways`} allowFullScreen>
				</iframe>
				:
				<iframe
					title="map"
					width='100%'
					height="500px"

					frameBorder="0" style={{ border: 0, borderRadius: '10px' }}
					src={`https://www.google.com/maps/embed/v1/view
					?key=AIzaSyDS2oE05wMz7Hn_cTT0BC9lBM8P1j6nKjs
					&center=23.8103%2C90.4125
					&zoom=10
					&maptype=roadmap`} allowFullScreen>
				</iframe>
			}
		</div>
	);
};

export default GMap;
