import React from 'react';

const PartnersBar = () => {
	return (
		<div className="grad-bg py-[15px] px-3 w-full mt-20 md:mt-0">
			<div className="max-w-[1100px] w-full flex items-center justify-between gap-5 mx-auto carousel carousel-center">
				<img src="/mbtoken.svg" alt="mbtoken" className="w-[8rem] md:w-auto carousel-item" />
				<img src="/metamask.svg" alt="metamask" className="w-[8rem] md:w-auto carousel-item" />
				<img src="/opensea.svg" alt="opensea" className="w-[8rem] md:w-auto carousel-item" />
			</div>
		</div>
	);
};

export default PartnersBar;
