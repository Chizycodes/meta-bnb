import React from 'react';

const ConnectModal = () => {
	const wallets = [
		{
			name: 'Metamask',
			logo: '/metamask-logo.svg',
		},
		{
			name: 'WalletConnect',
			logo: '/wallet-connect.svg',
		},
	];
	return (
		<>
			<input type="checkbox" id="connect-wallet" className="modal-toggle" />
			<label htmlFor="connect-wallet" className="modal  cursor-pointer">
				<label className="modal-box relative bg-[#ffffff] p-0">
					<div className="border-b border-[#CFD8DC] px-[32px] py-[20px] flex items-center justify-between">
						<h4 className="font-bold text-[24px] text-[#333333]">Connect Wallet</h4>
						<label htmlFor="connect-wallet" className="btn btn-sm border-none bg-[#ffffff] hover:bg-[#ffffff] p-0">
							<img src="/x.svg" alt="close" />
						</label>
					</div>

					<div className="p-[32px] text-[#333333]">
						<h5>Choose your preferred wallet:</h5>

						<div className="mt-4">
							{wallets.map((item, i) => {
								return (
									<div
										key={i}
										className="btn hover:bg-[#F8F9FA] hover:border-[#CFD8DC] bg-[#ffffff] border border-[#CFD8DC] px-5 py-3 h-[68px] normal-case flex items-center justify-between rounded-xl mb-[10px]"
									>
										<div className="flex items-center gap-3 font-semibold text-[18px] text-[#000000]">
											<img src={item.logo} alt="metamask logo" />
											<span>{item.name}</span>
										</div>
										<img src="/right-arrow.svg" alt="right arrow" />
									</div>
								);
							})}
						</div>
					</div>
				</label>
			</label>
		</>
	);
};

export default ConnectModal;
