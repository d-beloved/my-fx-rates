# Get Realtime Exchange Rate

**FX Rates** is a simple app that allows users to get real-time exchange rates between different currency pairs. The app retrieves currency exchange rates from the [AlphaVantage Stock API](https://www.alphavantage.co), ensuring accurate and up-to-date currency conversion information.

## Features

-   Enter two currency types (base currency and target currency) to get their exchange rate.
-   Displays additional currency-related data, including Bid Price, Ask Price, and Exchange Rate.
-   Responsive UI, which makes it accessible on mobile, tablet, and desktop.
-   Error handling for invalid or incomplete inputs.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
-   [Features](#features)
-   [Example](#example)
-   [License](#license)

## Installation

To install and run the app locally, follow the steps below:

1. Clone this repository:

    ```bash
    git clone https://github.com/your-repository/Get-Realtime-Exchange-Rate.git
    cd Get-Realtime-Exchange-Rate
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Create a `.env.local` file and add your [AlphaVantage API Key](https://www.alphavantage.co/support/#api-key) as follows:

    ```bash
    API_KEY=your_api_key
    ```

4. Run the app:

    ```bash
    yarn dev
    ```

5. Open your browser and visit `http://localhost:5173` to see the app running.

## Usage

To use the **Get Realtime Exchange Rate** app, follow these steps:

1. Open the application.
2. Select the Currency type (Fiat, Crypto), then select the base currency (the currency you want to convert from).
3. Select the Currency type (Fiat, Crypto), then select the target currency (the currency you want to convert to).
4. Submit your request by clicking the "Check Rate" button.
5. The app will fetch the real-time exchange rate from AlphaVantage's API and display it on the screen along with other useful information, such as Bid Price and Ask Price.

## API

This app makes use of the **AlphaVantage Stock API**, specifically its "Foreign Exchange (FX)" endpoint to retrieve currency exchange data.

### AlphaVantage API URL

```bash
https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=EUR&apikey=YOUR_API_KEY
```

The API responds with a JSON object containing information such as:

-   `Realtime Currency Exchange Rate`
    -   `1. From_Currency Code`: The base currency (e.g., `USD`).
    -   `2. From_Currency Name`: The full name of the base currency (e.g., `United States Dollar`).
    -   `3. To_Currency Code`: The target currency (e.g., `EUR`).
    -   `4. To_Currency Name`: The full name of the target currency (e.g., `Euro`).
    -   `5. Exchange Rate`: The real-time exchange rate for the currency pair.
    -   `8. Bid Price`: The bid price for the currency pair.
    -   `9. Ask Price`: The ask price for the currency pair.

## Features

1. **Real-Time Data**: Fetches up-to-date exchange rates directly from the AlphaVantage API.
2. **Simple User Select**: Users can easily select two currencies to get the current exchange rate.
3. **Error Handling**: Handles invalid API responses or user input errors with user-friendly messages.
4. **Additional Information**: Displays the Bid Price and Ask Price for the selected currency pair.
5. **Responsive Design**: Works seamlessly on all devices.

## Example Output

```bash
Currency Type: USD/JPY
Exchange Rate: 143.5660
Bid Price: 143.5610
Ask Price: 143.5716
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Feel free to modify and enhance this template to suit your specific app needs.
