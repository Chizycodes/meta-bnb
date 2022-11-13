import React from 'react';
import HomeList from '../components/HomeList';
import FilterBar from '../components/FilterBar';

const PlaceToStay = () => {
	return (
		<div>
			<section>
				<FilterBar />
			</section>
			<section className="max-w-[1240px] mx-auto mt-[50px] pb-[92px]">
				<HomeList page="place" />
			</section>
		</div>
	);
};

export default PlaceToStay;
