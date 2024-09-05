import React from "react";
import Dropdown from "./Dropdown";
import { currencyTypes } from "../lib/currencyData";
import { CurrencyInputProps } from "../lib/definitions";

const CurrencyInput: React.FC<CurrencyInputProps> = ({
	currency,
	currencyOptions,
	currencyType,
	from = false,
	currencyTypeChange,
	onCurrencyChange,
}) => {
	return (
		<div>
			<div className="flex sm:flex-row flex-col gap-4">
				<Dropdown
					label="Currency Type"
					options={currencyTypes}
					value={currencyType}
					onChange={(value) => {
						currencyTypeChange(value, from);
					}}
				/>
				<Dropdown
					label="Currency"
					options={currencyOptions}
					onChange={(value) => {
						onCurrencyChange(value, from);
					}}
					value={currency}
					appendShortCode
				/>
			</div>
		</div>
	);
};

export default CurrencyInput;
