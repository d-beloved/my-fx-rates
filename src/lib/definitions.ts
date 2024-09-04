export interface DropdownProps {
	label: string;
	options: Options[];
	value: string;
	onChange: (value: string) => void;
}

export interface Options {
	label: string;
	value: string;
}
