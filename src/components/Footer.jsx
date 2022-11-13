import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="bg-[#1D1D1E]">
			<footer className="footer p-10 max-w-[1240px] mx-auto text-[#ffffff]">
				<div>
					<img src="logo-white.svg" alt="logo" className="md:mb-[70px]" />
					<div className="hidden md:block">
						<div className="flex items-center gap-[36px] mb-[50px]">
							<img src="/facebook.svg" alt="facebook" />
							<img src="/instagram.svg" alt="instagram" />
							<img src="/twitter.svg" alt="twitter" />
						</div>
						<p className="text-[#F7F7F7]">&copy; 2022 Metabnb</p>
					</div>
				</div>
				<div className="text-[#F1F3F9]">
					<span className="footer-title text-[#ffffff] text-opacity-1 opacity-100 text-[18px] capitalize">
						Community
					</span>
					<Link to="#" className="link link-hover">
						NFTs
					</Link>
					<Link to="#" className="link link-hover">
						Tokens
					</Link>
					<Link to="#" className="link link-hover">
						Landlords
					</Link>
					<Link to="#" className="link link-hover">
						Discord
					</Link>
				</div>
				<div className="text-[#F1F3F9]">
					<span className="footer-title text-opacity-1 opacity-100 text-[#ffffff] text-[18px] capitalize">Places</span>
					<Link to="#" className="link link-hover">
						Castle
					</Link>
					<Link to="#" className="link link-hover">
						Farms
					</Link>
					<Link to="#" className="link link-hover">
						Beach
					</Link>
					<Link to="#" className="link link-hover">
						Learn more
					</Link>
				</div>
				<div className="text-[#F1F3F9]">
					<span className="footer-title text-opacity-1 opacity-100 text-[#ffffff] text-[18px] capitalize">
						About us
					</span>
					<Link to="#" className="link link-hover">
						Road map
					</Link>
					<Link to="#" className="link link-hover">
						Creators
					</Link>
					<Link to="#" className="link link-hover">
						Career
					</Link>
					<Link to="#" className="link link-hover">
						Contact us
					</Link>
				</div>
				<div className="block md:hidden">
					<div className="flex items-center gap-[36px] mb-[50px]">
						<img src="/facebook.svg" alt="facebook" />
						<img src="/instagram.svg" alt="instagram" />
						<img src="/twitter.svg" alt="twitter" />
					</div>
					<p className="text-[#F7F7F7]">&copy; 2022 Metabnb</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
