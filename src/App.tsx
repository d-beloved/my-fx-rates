import React from "react";
import "./App.css";
import CurrencyRateForm from "./components/CurrencyRateForm";
import currencyLogo from "./assets/currency.svg";

const App: React.FC = () => {
	return (
		<div className="relative w-full h-full">
			<div
				aria-hidden="true"
				className="w-8/12 absolute inset-0 top-2 mx-auto -z-50 blur-lg "
			>
				<img src={currencyLogo} className="w-full" alt="XChangeRate" />
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl bottom-80"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div className="flex flex-col items-center gap-4 mx-auto max-w-2xl pt-24">
				<h1 className="text-5xl font-bold text-theme">
					Get Realtime Exchange Rate
				</h1>
				<p className="text-themeDark font-bold text-xl">
					Pick the Currencies You Wish to Compare Below
				</p>
				<CurrencyRateForm />
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl bottom-0"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
		</div>
	);
};

export default App;
