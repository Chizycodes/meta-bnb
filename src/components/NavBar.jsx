import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ children }) => {
	const closeRef = useRef();
	const closeBar = () => {
		closeRef.current.click();
	};
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<div className="navbar bg-white py-[3rem] mx-auto flex w-full justify-between max-w-[1240px] px-3">
					<div>
						<div className="md:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<img src="/menu.svg" alt="menu" className="w-[34px]" />
							</label>
						</div>
						<div className="px-2 ">
							<img src="/logo.svg" alt="logo" className="w-[8rem] md:w-[10rem] lg:w-auto" />
						</div>
					</div>

					<div className="hidden md:block">
						<ul className="menu menu-horizontal lg:gap-[30px]">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/place-to-stay">Place to stay</Link>
							</li>

							<li>
								<Link to="#">NFTs</Link>
							</li>

							<li>
								<Link to="#">Community</Link>
							</li>
						</ul>
					</div>
					<div className="navbar-end w-auto">
						<label
							htmlFor="connect-wallet"
							className="btn sm:px-[25px] py-[15px] outline-none normal-case border-none text-[#ffffff] grad-bg"
						>
							Connect wallet
						</label>
					</div>
				</div>

				{children}
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 bg-[#ffffff]">
					<div className="flex items-center justify-between mx-3">
						<img src="/logo.svg" alt="logo" className="w-[8rem] my-4" />
						<label htmlFor="my-drawer-3" ref={closeRef} className="btn btn-square btn-ghost">
							<img src="/close.svg" alt="close" className="w-[34px]" />
						</label>
					</div>

					<li className="" onClick={closeBar}>
						<Link to="/" className="">
							Home
						</Link>
					</li>
					<li onClick={closeBar}>
						<Link to="/place-to-stay">Place to stay</Link>
					</li>

					<li onClick={closeBar}>
						<Link to="#">NFTs</Link>
					</li>

					<li onClick={closeBar}>
						<Link to="#">Community</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
