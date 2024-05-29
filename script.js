// script.js
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'TMR036NR1MFQ7PL0'; // Substitua pelo seu chave da API do Alpha Vantage
    const symbol = 'WEGE3.SA'; // Símbolo da ação da WEG na Bovespa
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const timeSeries = data['Time Series (Daily)'];
            const stockList = document.getElementById('stock-list');
            const dates = [];
            const closingPrices = [];

            for (let date in timeSeries) {
                const listItem = document.createElement('li');
                const open = timeSeries[date]['1. open'];
                const high = timeSeries[date]['2. high'];
                const low = timeSeries[date]['3. low'];
                const close = timeSeries[date]['4. close'];

                listItem.innerHTML = `<strong>${date}</strong><br>
                                      Abertura: ${open}<br>
                                      Alta: ${high}<br>
                                      Baixa: ${low}<br>
                                      Fechamento: ${close}`;
                stockList.appendChild(listItem);

                // Prepare data for the chart
                dates.push(date);
                closingPrices.push(parseFloat(close));
            }

            // Create the chart
            const ctx = document.getElementById('stockChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates.reverse(),
                    datasets: [{
                        label: 'Fechamento Diário',
                        data: closingPrices.reverse(),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Data',
                                color: '#e0e0e0'
                            },
                            ticks: {
                                color: '#e0e0e0'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Preço de Fechamento (R$)',
                                color: '#e0e0e0'
                            },
                            ticks: {
                                color: '#e0e0e0'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#e0e0e0'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
});
