import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	appearance: ButtonAppearance;
}

export enum ButtonAppearance {
	Green,
	Black,
}
