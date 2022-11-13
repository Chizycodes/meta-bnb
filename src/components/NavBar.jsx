import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="navbar bg-white py-5 mx-auto w-full max-w-[1240px] px-3">
			<div className="navbar-start">
				<div className="dropdown flex items-center">
					<label tabIndex={0} className="btn btn-ghost md:hidden p-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-[30px] w-[30px]"
							fill="none"
							viewBox="0 0 30 30"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#ffffff] rounded-box w-52">
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
				<Link to="/" className="">
					<img src="/logo.svg" alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden md:flex">
				<ul className="menu menu-horizontal lg:gap-[30px] p-0">
					<li>
						<Link to="#">Home</Link>
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
			<div className="navbar-end">
				<label
					htmlFor="connect-wallet"
					className="btn sm:px-[25px] py-[15px] outline-none normal-case border-none text-[#ffffff] grad-bg"
				>
					Connect wallet
				</label>
			</div>
		</div>
	);
};

export default NavBar;
