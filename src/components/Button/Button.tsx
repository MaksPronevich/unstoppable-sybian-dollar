import { ButtonProps, ButtonAppearance } from "./Button.props";
import cn from "classnames";

export const Button = ({ children, className, appearance, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(
				`inline-flex justify-center px-6 py-[14px] font-semibold leading-3 outline-none transition hover:shadow-[0px_0px_10px_rgba(33,231,134,1)] focus:shadow-[0px_0px_10px_rgba(33,231,134,1)] ${className}`,
				{
					"bg-green text-black-300": appearance == ButtonAppearance.Green,
					"bg-black-100 text-green": appearance == ButtonAppearance.Black,
				},
			)}
			{...props}
		>
			{children}
		</button>
	);
};
