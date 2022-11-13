import React from 'react';
import HomeCard from './HomeCard';
import { homeList } from '../data';

const HomeList = ({ page }) => {
	const list = page === 'home' ? homeList.filter((e, i) => e.home) : homeList;
	return (
		<div>
			<div className="flex flex-wrap justify-center gap-[24px]">
				{list.map((item, i) => {
					return (
						<div key={i}>
							<HomeCard item={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeList;
