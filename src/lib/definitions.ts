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

export interface CurrencyInputProps {
	inputHeader: string;
	currency: string;
	currencyOptions: Options[];
	currencyType: string;
	from?: boolean;
	currencyTypeChange: (value: string, from: boolean) => void;
	onCurrencyChange: (value: string, from: boolean) => void;
}
