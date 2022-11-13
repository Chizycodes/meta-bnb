import React from 'react';
import Hero from '../components/Hero';
import HomeList from '../components/HomeList';
import NFTSection from '../components/NFTSection';
import PartnersBar from '../components/PartnersBar';

const Home = () => {
	return (
		<div>
			<Hero />
			<PartnersBar />
			<section className="max-w-[1240px] px-3 mx-auto py-[58px]">
				<h2 className="text-[#000000] font-bold text-[38px] md:text-[48px] text-center mb-[43px]">
					Inspiration for your next adventure
				</h2>
				<HomeList page="home" />
			</section>
			<section className="grad-bg">
				<NFTSection />
			</section>
		</div>
	);
};

export default Home;
