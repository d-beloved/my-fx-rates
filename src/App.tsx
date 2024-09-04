import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import {
	currencyTypes,
	digitalCurrencies,
	physicalCurrencies,
} from "./lib/currencyData";
import { Options } from "./lib/definitions";
import { getExchangeRate } from "./lib/api";

function App() {
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

	const onSubmit = () => {
		// const exchangeRate = getExchangeRate();
		console.log("exchangeRate");
	};

	return (
		<>
			<h1>Foreign Exchange Rate Calculator</h1>
			<div className="">
				<h3>From</h3>
				<div>
					<Dropdown
						label="Type"
						options={currencyTypes}
						value={convertFromType}
						onChange={(value) => {
							currencyTypeChange(value, true);
						}}
					/>
					<Dropdown
						label="Currency"
						options={convertFromOptions}
						onChange={(value) => {
							onCurrencyChange(value, true);
						}}
						value={convertFrom}
					/>
				</div>
			</div>
			<div className="">
				<h3>To</h3>
				<div>
					<Dropdown
						label="Type"
						options={currencyTypes}
						value={convertToType}
						onChange={(value) => {
							currencyTypeChange(value, false);
						}}
					/>
					<Dropdown
						label="Currency"
						options={convertToOptions}
						onChange={(value) => {
							onCurrencyChange(value, false);
						}}
						value={convertTo}
					/>
				</div>
			</div>
			<button className="" onClick={onSubmit}>
				Convert
			</button>
			<div className="">
				<h3>Result</h3>
				<p>Rate: </p>
				<p>Bid: </p>
				<p>Ask: </p>
			</div>
		</>
	);
}

export default App;
