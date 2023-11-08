import { Button } from "../Button/Button";
import { ButtonAppearance } from "../Button/Button.props";
import arrowSvg from "../../assets/svg/arrow.svg";
import { Operation, OperationPanelProps } from "./OperationPanel.props";

export const OperationPanel = ({ operation }: OperationPanelProps): JSX.Element => {
	return (
		<div>
			<div className="flex items-center justify-between gap-2">
				<span className="text-gray md:text-base">
					{operation == Operation.Deposite ? "Protected amount" : "Token balance"}
				</span>
				{operation == Operation.Deposite && <span className="md:text-base">0</span>}
			</div>
			<div className="bg-black-200 my-4 flex py-2 pl-4 pr-2">
				<input
					type="text"
					className="bg-black-200 text-green flex-auto pr-3 font-digital text-base font-bold outline-none md:text-lg"
					placeholder="0.00"
				/>
				<Button appearance={ButtonAppearance.Black}>max</Button>
			</div>
			<div className={`${operation == Operation.Deposite && "opacity-0"} flex items-center gap-2`}>
				<span className="text-gray text-xs font-normal">get USD here</span>
				<img src={arrowSvg} width={9} height={9} alt="arrow" />
			</div>
			<Button appearance={ButtonAppearance.Green} className="mt-4 w-full md:mt-6">
				Approve
			</Button>
		</div>
	);
};
