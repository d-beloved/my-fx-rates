import { useState } from "react";
import { digitalCurrencies, physicalCurrencies } from "../lib/currencyData";
import { Options } from "../lib/definitions";
import { getExchangeRate } from "../lib/api";
import CurrencyInput from "./CurrencyInput";

const CurrencyRateForm = () => {
	const [convertFrom, setConvertFrom] = useState("");
	const [convertTo, setConvertTo] = useState("");
	const [convertFromType, setConvertFromType] = useState("");
	const [convertToType, setConvertToType] = useState("");
	const [convertFromOptions, setConvertFromOptions] = useState<Options[]>([]);
	const [convertToOptions, setConvertToOptions] = useState<Options[]>([]);

	const currencyTypeChange = (type: string, from: boolean) => {
		if (type === "fiat") {
			from
				? (setConvertFromType(type),
					setConvertFromOptions(physicalCurrencies))
				: (setConvertToType(type),
					setConvertToOptions(physicalCurrencies));
		} else {
			from
				? (setConvertFromType(type),
					setConvertFromOptions(digitalCurrencies))
				: (setConvertToType(type),
					setConvertToOptions(digitalCurrencies));
		}
	};

	const onCurrencyChange = (value: string, from: boolean) => {
		from ? setConvertFrom(value) : setConvertTo(value);
	};

	const onSubmit = async () => {
		const exchangeRate = await getExchangeRate(convertFrom, convertTo);
		console.log("exchangeRate", exchangeRate);
	};

	return (
		<form className="flex flex-col gap-4">
			<CurrencyInput
				inputHeader="From"
				currency={convertFrom}
				currencyOptions={convertFromOptions}
				currencyType={convertFromType}
				onCurrencyChange={onCurrencyChange}
				currencyTypeChange={currencyTypeChange}
				from
			/>
			<CurrencyInput
				inputHeader="To"
				currency={convertTo}
				currencyOptions={convertToOptions}
				currencyType={convertToType}
				onCurrencyChange={onCurrencyChange}
				currencyTypeChange={currencyTypeChange}
			/>
			<button className="" onClick={onSubmit}>
				Convert
			</button>
			<div className="flex flex-col">
				<h3 className="">Result</h3>
				<p>Rate: </p>
				<p>Bid: </p>
				<p>Ask: </p>
			</div>
		</form>
	);
};

export default CurrencyRateForm;
