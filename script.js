// Mocked stock data
const stockData = [
    { index: "S&P 500", value: 4365.75, change: "+1.23%" },
    { index: "Dow Jones", value: 33865.74, change: "+0.98%" },
    { index: "NASDAQ", value: 13259.25, change: "-0.57%" },
    { index: "FTSE 100", value: 7291.82, change: "-1.35%" },
    { index: "DAX", value: 15172.13, change: "+2.07%" },
];

// Function to populate table
function populateTable() {
    const tableBody = document.querySelector("#stockTable tbody");

    stockData.forEach(stock => {
        const row = document.createElement("tr");

        const indexCell = document.createElement("td");
        indexCell.textContent = stock.index;
        row.appendChild(indexCell);

        const valueCell = document.createElement("td");
        valueCell.textContent = stock.value;
        row.appendChild(valueCell);

        const changeCell = document.createElement("td");
        changeCell.textContent = stock.change;
        row.appendChild(changeCell);

        tableBody.appendChild(row);
    });
}

// Initialize table on page load
document.addEventListener("DOMContentLoaded", populateTable);
