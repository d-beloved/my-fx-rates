export interface DropdownProps {
	label: string;
	options: Options[];
	value: string;
	onChange: (value: string) => void;
	appendShortCode?: boolean;
}

export interface Options {
	label: string;
	value: string;
}
