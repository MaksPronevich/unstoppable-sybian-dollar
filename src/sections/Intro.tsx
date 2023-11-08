import warnSvg from "../assets/svg/warn.svg";
import image from "../assets/img/intro-image.png";
import { Button } from "../components/Button/Button";
import { ButtonAppearance } from "../components/Button/Button.props";
import { motion } from "framer-motion";

const blocksAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},

	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const Intro = (): JSX.Element => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className="bg-[url('./assets/img/intro-bg.png')] bg-no-repeat pb-8 md:pb-12 lg:pt-16"
		>
			<div className="relative mx-auto flex max-w-[1152px] justify-center px-4 lg:justify-end">
				<img
					src={image}
					className="absolute left-1/2 top-0 -translate-x-1/2 lg:-left-[85px] lg:top-[100px] lg:translate-x-0"
					alt="Image"
				/>
				<div className="relative mt-[120%] max-w-[572px] bg-black-200 p-4 text-white shadow-[0px_0px_40px_rgba(33,231,134,0.1)] before:absolute before:-left-[2px] before:-top-[2px] before:-z-[1] before:h-[56px] before:w-[70px] before:bg-[linear-gradient(140deg,#21E786,#0000,#0000)] before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:-z-[1] after:h-[56px] after:w-[70px] after:bg-[linear-gradient(320deg,#21E786,#0000,#0000)] after:content-[''] sm:mt-[800px] md:p-6 lg:mt-0">
					<motion.h2
						variants={blocksAnimation}
						custom={3}
						className="mb-5 text-center text-2xl md:mb-6 md:text-left md:text-4xl"
					>
						USD
					</motion.h2>
					<motion.div custom={4} variants={blocksAnimation} className="font-normal md:text-base">
						<p>
							A new type of world, a new type of wealth... The Sybian Dollar ($USD) is the
							culmination of the financial experiment of the 21st century to create a perpetual
							dominant global currency. $USD is the true mechanics of the US DOLLAR, but programmed
							on-chain to meet the following tenets:
						</p>
						<br />
						<p>
							1 - Perpetual. $USD is designed to go on and on without dev. Once keys are burned, the
							monster is fully decentralized and unstoppable.
						</p>
						<br />
						<p>
							2 - Consistently reducing supply. All USD not protected in the BANK will slowly erode
							away block by block. Every block %xx.00 of USD will magically disappear from all
							wallets, so if you do nothing, then before long your USD will go to nothing.
						</p>
						<br />
						<p>
							3 - Constantly inflating supply. To match the erosion, the USD also inflates and
							prints supply, giving more USD block by block to those protected in the BANK.
						</p>
						<br />
						<p>There are two types of banks:</p>
						<br />
						<p>The $USD supply decreases by XXX% per block...</p>
						<br />
						<p>
							Iron Bank will accept single-sided staking. It will fully protect your $USD from any
							debase. The Iron bank locks your $USD for 7 days.
						</p>
						<br />
						<p>
							The other bank only protects your $USD by rewarding you newly printed $USD faster than
							the debase mechanism.
						</p>
						<br />
						<p>
							10 million $USD is printed per block. The Cryptographic Bank earns you 9/10 of the
							rewards by staking USD/ETH LP on Uniswap V2.
						</p>
					</motion.div>
					<motion.div
						variants={blocksAnimation}
						custom={5}
						className="my-6 flex items-start gap-3 border-l border-green bg-black-100 p-3"
					>
						<img src={warnSvg} width={24} height={24} alt="NOTE" />
						<p className="font-normal">
							<span className="font-semibold">NOTE</span>: If no actions taken on your vault, locks
							expire at day 3. You get a 24 hour grace period to 1) re-lock 2) withdraw if no actons
							taken, MEV can KICK you out of the vault for a 10% tax.
						</p>
					</motion.div>
					<motion.div custom={6} variants={blocksAnimation}>
						<Button appearance={ButtonAppearance.Green} className="w-full">
							Get USD
						</Button>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};
