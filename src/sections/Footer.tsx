import telegramSvg from "../assets/svg/telegram.svg";
import xSvg from "../assets/svg/x.svg";
import dextoolsSvg from "../assets/svg/dextools.svg";
import { motion } from "framer-motion";

const blocksAnimation = {
	hidden: {
		y: 30,
		opacity: 0,
	},

	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const Footer = (): JSX.Element => {
	return (
		<motion.footer
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className="h-[123px] bg-black-300 py-6 sm:h-[72px]"
		>
			<div className="mx-auto flex max-w-[1152px] flex-col items-center justify-between gap-3 px-4 sm:flex-row">
				<motion.div variants={blocksAnimation} custom={2} className="text-center text-gray">
					Unstoppable Sybian Dollar 2023 © All rights reserved
				</motion.div>
				<motion.div variants={blocksAnimation} custom={2} className="flex items-center gap-6">
					<a href="#!">
						<img src={telegramSvg} width={24} height={24} alt="Telegram" />
					</a>
					<a href="#!">
						<img src={xSvg} width={24} height={24} alt="Telegram" />
					</a>
					<a href="#!">
						<img src={dextoolsSvg} width={24} height={24} alt="Telegram" />
					</a>
				</motion.div>
			</div>
		</motion.footer>
	);
};
