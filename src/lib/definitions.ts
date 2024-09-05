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

// "Realtime Currency Exchange Rate": {
// 	"1. From_Currency Code": "USD";
// 	"2. From_Currency Name": "United States Dollar";
// 	"3. To_Currency Code": "JPY";
// 	"4. To_Currency Name": "Japanese Yen";
// 	"5. Exchange Rate": "143.56600000";
// 	"6. Last Refreshed": "2024-09-05 04:56:32";
// 	"7. Time Zone": "UTC";
// 	"8. Bid Price": "143.56100000";
// 	"9. Ask Price": "143.57160000";
// };

export interface errorProps {
	errorMessage: string;
}

// "Error Message": "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for CURRENCY_EXCHANGE_RATE."
