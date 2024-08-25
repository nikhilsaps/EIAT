console.log("content Scripts")

// ==UserScript==
// @name         Dynamic Tables Inserter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Injects 5 dynamic tables into the page with inline styles
// @author       Your Name
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Array of countries for the first column
    const countries = ["US", "CA", "UK", "DE", "FR", "ES", "IT", "IN", "MX", "BR", "AE", "BE", "EG", "SA", "TR", "PL", "NL", "SE", "ZA", "IN", "AU", "SG", "JP"];

    // Function to add inline styles to the page
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .dynamic-tables-container {
                margin: 20px;
                font-family: Arial, sans-serif;
            }
            .table-container {
                margin-bottom: 40px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f4f4f4;
            }
            caption {
                font-weight: bold;
                margin-bottom: 10px;
            }
            .info-text {
                margin-bottom: 20px;
            }
        `;
        document.head.appendChild(style);
    }

    // Function to create a table
    function createTable(tableId) {
        const table = document.createElement('table');
        table.id = tableId;

        const caption = document.createElement('caption');
        caption.innerText = `Table ${tableId}`;
        table.appendChild(caption);

        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        const headers = ['MP', 'Column 2', 'Column 3', 'Column 4'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.innerText = header;
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        for (let i = 0; i < 24; i++) {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.innerText = countries[i % countries.length];
            tr.appendChild(td1);

            for (let j = 1; j < 4; j++) {
                const td = document.createElement('td');
                td.innerText = `Row ${i + 1} Col ${j + 1}`;
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        }
        table.appendChild(tbody);

        return table;
    }

    // Function to insert tables into the page
    function insertTables() {
        // Add styles to the page
        addStyles();

        const container = document.createElement('div');
        container.className = 'dynamic-tables-container';

        const infoText = document.createElement('div');
        infoText.className = 'info-text';
        infoText.innerHTML = `
            <p>Here is a description or introduction to the tables.</p>
            <p>You can add more information or instructions here.</p>
        `;
        container.appendChild(infoText);

        for (let i = 1; i <= 5; i++) {
            const tableContainer = document.createElement('div');
            tableContainer.className = 'table-container';
            tableContainer.appendChild(createTable(`table${i}`));
            container.appendChild(tableContainer);
        }

        // Insert the container at the end of the body
        document.body.appendChild(container);
    }

    // Run the function to insert tables
    insertTables();
})();
