import { Tab } from "@headlessui/react";
import { OperationPanel } from "../OperationPanel/OperationPanel";
import { Operation } from "../OperationPanel/OperationPanel.props";

export const DrawPanel = (): JSX.Element => {
	return (
		<div className="bg-black-100 p-4 md:p-6">
			<Tab.Group>
				<Tab.List className="mb-4 flex justify-center gap-2 md:mb-6">
					<Tab
						className={({ selected }) =>
							`md:text-medium text-semibold w-[118px] border-b-2 pb-3 pt-1 focus:outline-none md:text-base ${
								selected ? "border-green" : "text-gray border-[rgba(255,255,255,0.1)]"
							}`
						}
					>
						Withdraw
					</Tab>
					<Tab
						className={({ selected }) =>
							`md:text-medium text-semibold w-[118px] border-b-2 pb-3 pt-1 focus:outline-none md:text-base ${
								selected ? "border-green" : "text-gray border-[rgba(255,255,255,0.1)]"
							}`
						}
					>
						Deposit
					</Tab>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>
						<OperationPanel operation={Operation.Withdraw} />
					</Tab.Panel>
					<Tab.Panel>
						<OperationPanel operation={Operation.Deposite} />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};
