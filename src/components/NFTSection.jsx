import React from 'react';

const NFTSection = () => {
	return (
		<div className="hero min-h-screen md:pb-10 px-5 max-w-[1240px] mx-auto">
			<div className="hero-content px-0 lg:justify-between w-full gap-10 flex-col lg:flex-row-reverse">
				<img src="/3images.svg" className="max-w-[704px] w-full" alt="hero" />
				<div className="max-w-[415px]">
					<h1 className="text-[38px] md:text-[48px] font-normal mb-[48px] text-[#ffffff]">Metabnb NFTs</h1>
					<p className="text-[16px] md:text-[18px] font-normal mb-[48px] text-[#ffffff]">
						Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs.
						These NFTs gives our cutomer access to loads of our exclusive services.
					</p>

					<div className="w-full flex">
						<button
							style={{ background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }}
							className="btn px-[33px] py-[15px] outline-none normal-case border-none rounded-lg"
						>
							<span className="grad-text">Search</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NFTSection;
