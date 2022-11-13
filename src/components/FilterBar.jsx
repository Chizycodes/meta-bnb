import React from 'react';

const FilterBar = () => {
	const list = ['Resturant', 'Cottage', 'Castle', 'fantast city', 'Beach', 'Carbins', 'Off-grid', 'Farm'];
	return (
		<div className="bg-[#ffffff] w-full max-w-[1240px] mt-[4rem] px-3 mx-auto">
			<div className="flex items-center justify-between px-5">
				<ul className="flex items-center gap-5 lg:gap-[48px] w-full text-[#434343] carousel carousel-center">
					{list.map((item, i) => {
						return (
							<li key={i} className="cursor-pointer carousel-item">
								{item}
							</li>
						);
					})}
				</ul>
				<div className="btn md:w-[161px] outline-none normal-case font-normal flex justify-between border border-[#B4B4B4] text-[#333333] bg-[#ffffff] hover:bg-[#ffffff] ml-5">
					<span className='hidden md:block'>Location</span>
					<img src="/filter-icon.svg" alt="filter" />
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
