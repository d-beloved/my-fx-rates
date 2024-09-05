export interface DropdownProps {
	label: string;
	options: Option[];
	value: string;
	onChange: (value: string) => void;
	appendShortCode?: boolean;
}

export interface Option {
	label: string;
	value: string;
}

export interface CurrencyInputProps {
	currency: string;
	currencyOptions: Option[];
	currencyType: string;
	from?: boolean;
	currencyTypeChange: (value: string, from: boolean) => void;
	onCurrencyChange: (value: string, from: boolean) => void;
}

export interface exchangeRateProps {
	rate: string;
	bidPrice: string;
	askPrice: string;
}
