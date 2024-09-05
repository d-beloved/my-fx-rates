import { useState } from "react";
import { digitalCurrencies, physicalCurrencies } from "../lib/currencyData";
import { exchangeRateProps, Option } from "../lib/definitions";
import { getExchangeRate } from "../lib/api";
import CurrencyInput from "./CurrencyInput";
import exchangeArrow from "../assets/arrow.svg";
import info from "../assets/info.svg";
import loader from "../assets/loader.svg";

const CurrencyRateForm = () => {
	const [convertFrom, setConvertFrom] = useState("");
	const [convertTo, setConvertTo] = useState("");
	const [convertFromType, setConvertFromType] = useState("");
	const [convertToType, setConvertToType] = useState("");
	const [convertFromOptions, setConvertFromOptions] = useState<Option[]>([]);
	const [convertToOptions, setConvertToOptions] = useState<Option[]>([]);
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<exchangeRateProps | null>();
	const [error, setError] = useState<string | null>();

	const currencyTypeChange = (type: string, from: boolean) => {
		setResult(null);
		setError(null);
		if (type === "fiat") {
			from
				? (setConvertFromType(type),
					setConvertFromOptions(physicalCurrencies),
					setConvertFrom(physicalCurrencies[0].value))
				: (setConvertToType(type),
					setConvertToOptions(physicalCurrencies),
					setConvertTo(physicalCurrencies[0].value));
		} else {
			from
				? (setConvertFromType(type),
					setConvertFromOptions(digitalCurrencies),
					setConvertFrom(digitalCurrencies[0].value))
				: (setConvertToType(type),
					setConvertToOptions(digitalCurrencies),
					setConvertTo(digitalCurrencies[0].value));
		}
	};

	const onCurrencyChange = (value: string, from: boolean) => {
		setResult(null);
		setError(null);
		from ? setConvertFrom(value) : setConvertTo(value);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		console.log("submit", convertFrom, convertTo);
		const rates = await getExchangeRate(convertFrom, convertTo);
		if (rates) {
			console.log("rates", rates);
			rates.error ? setError(rates.error) : setResult(rates.data);
			setLoading(false);
		}
	};

	const onReset = (e: React.FormEvent) => {
		e.preventDefault();
		setConvertFrom("");
		setConvertTo("");
		setConvertFromType("");
		setConvertToType("");
		setConvertFromOptions([]);
		setConvertToOptions([]);
		setResult(null);
		setError(null);
	};

	console.log("ce", [result, error]);

	return (
		<form className="w-full flex flex-col items-center gap-2 sm:gap-4 rounded-xl border-2 border-themeDarkBlur p-8 pt-4 mt-4 mb-8 ml-4 sm:ml-0 drop-shadow-xl shadow-xl">
			<p className="flex items-center justify-center mb-2 italic text-xs sm:text-base w-full">
				<span className="mr-0 sm:mr-2 w-5 sm:w-7">
					<img src={info} alt="information" />
				</span>
				Select the currency type then pick the currency to convert.
			</p>
			<CurrencyInput
				currency={convertFrom}
				currencyOptions={convertFromOptions}
				currencyType={convertFromType}
				onCurrencyChange={onCurrencyChange}
				currencyTypeChange={currencyTypeChange}
				from
			/>
			<div className="my-3 w-10 sm:w-14">
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
					onClick={(e) => onSubmit(e)}
					disabled={
						convertFrom.length === 0 || convertTo.length === 0
					}
				>
					{loading ? (
						<img
							className="w-6 mx-auto"
							src={loader}
							alt="loading"
						/>
					) : (
						"Check Rate"
					)}
				</button>
				<button
					className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-75 disabled:bg-gray-400"
					onClick={(e) => onReset(e)}
					disabled={
						convertFrom.length === 0 || convertTo.length === 0
					}
				>
					Reset
				</button>
			</div>
			{result && (
				<div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between mt-4 w-full">
					<p className="text-xl text-theme font-bold">
						Rate: {result.rate}{" "}
					</p>
					<p className="text-xl text-green-600 font-bold">
						Bid: {result.bidPrice}{" "}
					</p>
					<p className="text-xl text-red-600 font-bold">
						Ask: {result.askPrice}{" "}
					</p>
				</div>
			)}
			{error && <p className="text-red-600 font-bold">{error}</p>}
		</form>
	);
};

export default CurrencyRateForm;
