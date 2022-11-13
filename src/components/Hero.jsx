import React from 'react';

const Hero = () => {
	return (
		<div className="hero min-h-screen md:pb-10 px-5 max-w-[1240px] mx-auto">
			<div className="hero-content px-0 lg:justify-between w-full gap-10 flex-col lg:flex-row-reverse">
				<img src="/hero-images.svg" className="max-w-[476px] w-full" alt="hero" />
				<div className="max-w-[646px]">
					<h1 className="text-[40px] md:text-[56px] font-normal mb-[48px]">
						Rent a <span className="grad-text font-bold">Place</span> away from{' '}
						<span className="grad-text font-bold">Home </span>
						in the <span className="grad-text font-bold">Metaverse</span>
					</h1>
					<p className="text-[20px] md:text-[24px] font-normal mb-[48px]">
						we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your
						imagination to reality at your comfort zone
					</p>

					<div className='w-full flex'>
						<input
							type="text"
							placeholder="Type here"
							className="input bg-[#ffffff] border border-[#A3A3A3] rounded-r-none w-full placeholder:text-[#B8B8B8]"
						/>
						<button className="btn px-[24px] md:px-[40px] py-[15px] outline-none normal-case border-none rounded-l-none text-[#ffffff] grad-bg">
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
