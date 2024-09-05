const baseUrl = "https://www.alphavantage.co";

export const formatRate = (rate: string) => parseFloat(rate).toFixed(4);

export const getExchangeRate = async (
	fromCurrency: string,
	toCurrency: string,
) => {
	const apiFunction = "CURRENCY_EXCHANGE_RATE";
	const url = `${baseUrl}/query?function=${apiFunction}&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${process.env.API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();

	if (data["Error Message"]) {
		return {
			error: "Please try another currency pair, we do not have data for this pair.",
		};
	} else if (!data["Realtime Currency Exchange Rate"]) {
		return {
			error: "Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for CURRENCY_EXCHANGE_RATE.",
		};
	} else {
		const {
			"5. Exchange Rate": rate,
			"8. Bid Price": bidPrice,
			"9. Ask Price": askPrice,
		} = data["Realtime Currency Exchange Rate"];

		const formattedExchangeRate = formatRate(rate);
		const formattedBidPrice = formatRate(bidPrice);
		const formattedAskPrice = formatRate(askPrice);

		return {
			data: {
				rate: formattedExchangeRate,
				bidPrice: formattedBidPrice,
				askPrice: formattedAskPrice,
			},
		};
	}
};
