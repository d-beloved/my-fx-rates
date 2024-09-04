const baseUrl = "https://www.alphavantage.co";

export const getExchangeRate = async (
	fromCurrency: string,
	toCurrency: string,
) => {
	const apiFunction = "CURRENCY_EXCHANGE_RATE";
	const url = `${baseUrl}/query?function=${apiFunction}&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${process.env.API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
