import { Fragment } from "react";
import { Button } from "../components/Button/Button";
import { ButtonAppearance } from "../components/Button/Button.props";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import { formatWalletAddress } from "../helpers/helpers";
import dropdownSvg from "../assets/svg/dropdown-arrow.svg";
import logoutSvg from "../assets/svg/logout.svg";
import { Popover, Transition } from "@headlessui/react";

export const Header = (): JSX.Element => {
	const { open: openConnectModal } = useWeb3Modal();
	const { isConnected, address } = useAccount();
	const { disconnect } = useDisconnect();

	const handleConnectModal = (): void => {
		openConnectModal();
	};

	const logoutHandle = (): void => {
		disconnect();
	};

	return (
		<header className="bg-black-300 py-6">
			<div className="mx-auto flex max-w-[1152px] flex-col items-center justify-between gap-6 px-4 sm:flex-row">
				<div className="whitespace-nowrap font-digital text-2xl font-bold text-green">
					Unstoppable Sybian Dollar
				</div>
				{isConnected ? (
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button type="button" className="flex h-[40px] items-center outline-none">
									<div className="h-9 w-9 rounded-full bg-green" />
									<span className="text-semibold ml-2 mr-3 text-white ">
										{isConnected ? address && formatWalletAddress(address) : ""}
									</span>
									<img
										src={dropdownSvg}
										className={`transition ${!open && "rotate-180"}`}
										width={20}
										height={20}
										alt="arrow"
									/>
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="transition"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute z-[90] mt-2 w-full">
										<button
											onClick={logoutHandle}
											className="flex w-full items-center justify-center gap-3 bg-black-100 py-2 transition hover:shadow-[0px_0px_10px_rgba(33,231,134,0.7)]"
										>
											<img src={logoutSvg} alt="logout" />
											<span className="">Sign Out</span>
										</button>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				) : (
					<Button
						appearance={ButtonAppearance.Green}
						onClick={handleConnectModal}
						className="w-full sm:w-auto"
					>
						Connect wallet
					</Button>
				)}
			</div>
		</header>
	);
};
