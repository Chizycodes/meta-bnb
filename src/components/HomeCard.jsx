import React from 'react';

const HomeCard = ({ item }) => {
	const starArr = new Array(5).fill();
	return (
		<div
			style={{ background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }}
			className="p-4 rounded-[15px] border border-[#D7D7D7] w-[280px] cursor-pointer hover:shadow-md"
		>
			<div className="mb-4 w-full h-[265px]">
				<img src={item.image} alt="home" className="h-full w-full" />
			</div>

			<div className="text-[12px]">
				<div className="flex justify-between mb-2">
					<p>Desert king</p>
					<p className="font-bold text-right">1MBT per night</p>
				</div>
				<div className="flex justify-between mb-2">
					<p>2345km away</p>
					<p className="text-right">available for 2weeks stay</p>
				</div>
				<div>
					<div className="rating rating-xs gap-2">
						{starArr?.map((e, i) => {
							return <input key={i} type="radio" name="rating-5" className="mask mask-star-2 grad-bg" />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCard;
