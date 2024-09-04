import React from "react";
import "./App.css";
import CurrencyRateForm from "./components/CurrencyRateForm";

const App: React.FC = () => {
	return (
		<div className="">
			<h1 className="text-3xl font-bold">Currency Exchange Rate</h1>
			<p className="text-red-500">
				Please select currency type and currency
			</p>

			<CurrencyRateForm />
		</div>
	);
};

export default App;
