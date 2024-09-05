import { useState } from "react";
import { digitalCurrencies, physicalCurrencies } from "../lib/currencyData";
import { errorProps, exchangeRateProps, Option } from "../lib/definitions";
import { getExchangeRate } from "../lib/api";
import CurrencyInput from "./CurrencyInput";
import exchangeArrow from "../assets/arrow.svg";
import info from "../assets/info.svg";

const CurrencyRateForm = () => {
	const [convertFrom, setConvertFrom] = useState("");
	const [convertTo, setConvertTo] = useState("");
	const [convertFromType, setConvertFromType] = useState("");
	const [convertToType, setConvertToType] = useState("");
	const [convertFromOptions, setConvertFromOptions] = useState<Option[]>([]);
	const [convertToOptions, setConvertToOptions] = useState<Option[]>([]);
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<exchangeRateProps | null>();
	const [error, setError] = useState<errorProps | null>();

	const currencyTypeChange = (type: string, from: boolean) => {
		setResult(null);
		setError(null);
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
		setResult(null);
		setError(null);
		from ? setConvertFrom(value) : setConvertTo(value);
	};

	const onSubmit = async () => {
		setLoading(true);
		console.log("submit", convertFrom, convertTo);
		// const exchangeRate = await getExchangeRate(convertFrom, convertTo);
		// setLoading(false);
		// console.log("exchangeRate", exchangeRate);
	};

	const onReset = () => {
		setConvertFrom("");
		setConvertTo("");
		setConvertFromType("");
		setConvertToType("");
		setConvertFromOptions([]);
		setConvertToOptions([]);
		setResult(null);
		setError(null);
	};

	return (
		<form className="flex flex-col items-center gap-4 rounded-xl border-2 border-themeDarkBlur p-8 pt-4 mt-4 drop-shadow-xl shadow-xl">
			<p className="flex items-center justify-center mb-2 italic">
				<span className="mr-2 w-7">
					<img src={info} alt="information" />
				</span>
				Select the currency type in order to pick the currency to
				convert.
			</p>
			<CurrencyInput
				currency={convertFrom}
				currencyOptions={convertFromOptions}
				currencyType={convertFromType}
				onCurrencyChange={onCurrencyChange}
				currencyTypeChange={currencyTypeChange}
				from
			/>
			<div className="my-3 w-14">
				<img src={exchangeArrow} alt="Exchange Arrow" />
			</div>
			<CurrencyInput
				currency={convertTo}
				currencyOptions={convertToOptions}
				currencyType={convertToType}
				onCurrencyChange={onCurrencyChange}
				currencyTypeChange={currencyTypeChange}
			/>
			<div className=" flex gap-7 mt-4">
				<button
					className="min-w-28 rounded-md bg-theme px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 disabled:bg-gray-400"
					onClick={onSubmit}
					disabled={
						convertFrom.length === 0 || convertTo.length === 0
					}
				>
					{loading ? "Loading..." : "Check Rate"}
				</button>
				<button
					className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-75 disabled:bg-gray-400"
					onClick={onReset}
					disabled={
						convertFrom.length === 0 || convertTo.length === 0
					}
				>
					Reset
				</button>
			</div>
			{/* {result && ( */}
			<div className="flex flex-row justify-between mt-4 w-full">
				<p className="text-xl text-theme font-bold">Rate: </p>
				<p className="text-xl text-green-600 font-bold">Bid: </p>
				<p className="text-xl text-red-600 font-bold">Ask: </p>
			</div>
			{/* )} */}
			{error && (
				<p className="text-red-600 font-bold">{error.errorMessage}</p>
			)}
		</form>
	);
};

export default CurrencyRateForm;
