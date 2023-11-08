import { Tab } from "@headlessui/react";
import { DrawPanel } from "../components/DrawPanel/DrawPanel";
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

export const Draw = (): JSX.Element => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			className="mb-16 md:mb-24"
		>
			<motion.div variants={blocksAnimation} custom={4} className="mx-auto max-w-[1152px] px-4">
				<div className="relative bg-black-200 p-4 text-white shadow-[0px_0px_40px_rgba(33,231,134,0.1)] before:absolute before:-left-[2px] before:-top-[2px] before:-z-[1] before:h-[56px] before:w-[70px] before:bg-[linear-gradient(140deg,#21E786,#0000,#0000)] before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:-z-[1] after:h-[56px] after:w-[70px] after:bg-[linear-gradient(320deg,#21E786,#0000,#0000)] after:content-[''] md:p-6">
					<Tab.Group>
						<Tab.List className="mb-8 flex gap-3 md:mb-12 md:grid md:grid-cols-2 md:gap-6">
							<Tab
								className={({ selected }) =>
									`flex-auto border-b-2 px-3 py-6 text-base focus:outline-none md:px-6 md:text-xl ${
										selected ? "border-green" : "border-black-100 text-gray"
									}`
								}
							>
								Iron Bank (Single Sided)
							</Tab>
							<Tab
								className={({ selected }) =>
									`flex-auto border-b-2 px-3 py-6 text-base focus:outline-none md:px-6 md:text-xl ${
										selected ? "border-green" : "border-black-100 text-gray"
									}`
								}
							>
								Cryptographic Bank (LP Staking)
							</Tab>
						</Tab.List>
						<Tab.Panels className="mb-8">
							<Tab.Panel className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
								<div className="flex flex-col justify-between gap-4 md:gap-6">
									<div className="h-full bg-black-100 p-4 md:p-6">
										<div className="mb-3 text-base text-gray">Protec amount</div>
										<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
											$
										</div>
									</div>
									<div className="h-full bg-black-100 p-4 md:p-6">
										<div className="mb-3 text-base text-gray">TVL</div>
										<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
											$
										</div>
									</div>
								</div>
								<DrawPanel />
							</Tab.Panel>
							<Tab.Panel className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
									<div className="h-full bg-black-100 p-4 md:p-6">
										<div className="mb-3 text-base text-gray">Protec amount</div>
										<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
											$
										</div>
									</div>
									<div className="h-full bg-black-100 p-4 md:p-6">
										<div className="mb-3 text-base text-gray">Accumulatooor</div>
										<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
											...
										</div>
									</div>
									<div className="h-full bg-black-100 p-4 md:p-6">
										<div className="mb-3 text-base text-gray">APR</div>
										<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
											%
										</div>
									</div>
									<div className="h-full bg-black-100 p-4 md:p-6">
										<div className="mb-3 text-base text-gray">TVL</div>
										<div className="font-digital text-2xl font-bold text-green md:text-[28px]">
											$
										</div>
									</div>
								</div>
								<DrawPanel />
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</motion.div>
		</motion.section>
	);
};
