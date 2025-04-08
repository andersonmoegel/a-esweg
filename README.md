# WEG Stock Dashboard

This project is a simple web application that displays a dashboard with daily stock data for WEG (ticker WEGE3.SA) on Bovespa. The interface presents stock information in a table along with a line chart for quick trend visualization.

## Features
- Displays daily open, high, low, and close prices in a list.
- Interactive line chart to visualize closing price history.
- Responsive design with custom styling.

## Technologies Used
- HTML5, CSS3, JavaScript  
- Chart.js (for data visualization)  
- Alpha Vantage API (to fetch stock data)

## How to Run the Project
1. **Clone the repository:**
   ```bash
   git clone https://github.com/andersonmoegel/a-esweg.git
   cd a-esweg
   ```

2. **Get an Alpha Vantage API key:**
   - Visit [Alpha Vantage](https://www.alphavantage.co/support/#api-key) and sign up to get a free API key.

3. **Update the `script.js` file:**
   - Replace the value of the `apiKey` constant with your own API key.

4. **Open the `index.html` file in a browser:**
   - The dashboard will load and display the data.

## File Structure
```
/
|-- index.html       # Main dashboard interface
|-- styles.css       # Dashboard styling
|-- script.js        # Logic for data fetching and rendering
```

## Project Setup
- `index.html` defines the page structure.
- `styles.css` applies a dark theme and custom component styles.
- `script.js` calls the Alpha Vantage API and renders the data.

## Customization
- **Change stock symbol:**
  In `script.js`, modify the value of the `symbol` constant to another stock.
  ```javascript
  const symbol = 'WEGE3.SA'; // Change to another symbol, e.g., PETR4.SA
  ```

- **Additional styling:**
  Edit `styles.css` to customize the colors and layout of the dashboard.

## Dependencies
- [Chart.js](https://www.chartjs.org/) for chart visualization.

## Possible Improvements
- Add more metrics, such as moving averages and volume.
- Support for selecting different time ranges.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
