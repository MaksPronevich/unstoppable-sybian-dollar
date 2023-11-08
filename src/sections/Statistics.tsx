import { motion } from "framer-motion";

const blocksAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},

	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const Statistics = (): JSX.Element => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.3, once: true }}
			className="mb-12 mt-8 md:my-24 md:mt-12"
		>
			<div className="mx-auto max-w-[1152px] px-4">
				<div className="relative bg-black-200 p-4 text-white shadow-[0px_0px_40px_rgba(33,231,134,0.1)] before:absolute before:-left-[2px] before:-top-[2px] before:-z-[1] before:h-[56px] before:w-[70px] before:bg-[linear-gradient(140deg,#21E786,#0000,#0000)] before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:-z-[1] after:h-[56px] after:w-[70px] after:bg-[linear-gradient(320deg,#21E786,#0000,#0000)] after:content-[''] md:p-6">
					<motion.h2
						variants={blocksAnimation}
						custom={2}
						className="mb-5 text-center text-2xl text-white md:mb-6 md:text-4xl"
					>
						Statistic
					</motion.h2>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
						<motion.div variants={blocksAnimation} custom={3} className="bg-black-100 p-4 md:p-6">
							<div className="mb-3 text-base text-gray">Total TVL</div>
							<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
								$ 20.92
							</div>
						</motion.div>
						<motion.div variants={blocksAnimation} custom={4} className="bg-black-100 p-4 md:p-6">
							<div className="mb-3 text-base text-gray">Marketcap (Fully Diluted)</div>
							<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
								$ 21,098
							</div>
						</motion.div>
						<motion.div variants={blocksAnimation} custom={5} className="bg-black-100 p-4 md:p-6">
							<div className="mb-3 text-base text-gray">Total Liquidity</div>
							<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
								$ 38,418.13
							</div>
						</motion.div>
						<motion.div variants={blocksAnimation} custom={6} className="bg-black-100 p-4 md:p-6">
							<div className="mb-3 text-base text-gray">Total Supply</div>
							<div className="flex items-center justify-between gap-2">
								<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
									2,050,383,762,605
								</div>
								<div className="text-gray">$USD</div>
							</div>
						</motion.div>
						<motion.div variants={blocksAnimation} custom={7} className="bg-black-100 p-4 md:p-6">
							<div className="mb-3 text-base text-gray">Supply in Vaults</div>
							<div className="flex items-center justify-between gap-2">
								<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
									2,046,528,871,618
								</div>
								<div className="text-gray">$USD</div>
							</div>
						</motion.div>
						<motion.div variants={blocksAnimation} custom={8} className="bg-black-100 p-4 md:p-6">
							<div className="mb-3 text-base text-gray">Circulating supply</div>
							<div className="flex items-center justify-between gap-2">
								<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
									3,854,890,987
								</div>
								<div className="text-gray">$USD</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};
