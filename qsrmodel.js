// ==UserScript==
// @name        New script google.com
// @namespace   Violentmonkey Scripts
// @match       https://www.wikipedia.org/*
// @grant       none
// @version     1.0
// @author      -
// @description 25/08/2024, 12:52:43
// @require      https://cdn.emailjs.com/dist/email.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Define table names here
    const tableNames = {
        "table1": "Table 1",
        "table2": "Table 2",
        "table3": "Table 3",
        "table4": "Table 4",
        "table5": "Table 5",
        "table6": "Table 6",
        "table7": "Table 7",
        "table8": "Table 8",
        "table9": "Table 9",
        "table10": "Table 10",
        "table11": "Table 11",
        "table12": "Table 12",
        "table13": "Table 13",
        "table14": "Table 14",
        "table15": "Table 15"
    };

    // JSON data with entries for multiple tables
  var genData =''
    const jsonData = {
        "table1": [["US", 102, 100, "good"], ["CA", 100, 100, "good"], ["UK", 100, 100, "good"]],
        "table2": [["DE", 100, 100, "good"], ["FR", 100, 100, "good"], ["ES", 100, 100, "good"]],
        "table3": [["IT", 100, 100, "good"], ["IN", 100, 100, "good"], ["MX", 100, 100, "good"]],
        "table4": [["BR", 100, 100, "good"], ["AE", 100, 100, "good"], ["BE", 100, 100, "good"]],
        "table5": [["EG", 100, 100, "good"], ["SA", 100, 100, "good"], ["TR", 100, 100, "good"]],
        "table6": [["PL", 100, 100, "good"], ["NL", 100, 100, "good"], ["SE", 100, 100, "good"]],
        "table7": [["ZA", 100, 100, "good"], ["AU", 100, 100, "good"], ["JP", 100, 100, "good"]],
        "table8": [["SG", 100, 100, "good"], ["KR", 100, 100, "good"], ["AR", 100, 100, "good"]],
        "table9": [["ID", 100, 100, "good"], ["TH", 100, 100, "good"], ["ZA", 100, 100, "good"]],
        "table10": [["US", 200, 200, "good"], ["CA", 200, 200, "good"], ["UK", 200, 200, "good"]],
        "table11": [["DE", 200, 200, "good"], ["FR", 200, 200, "good"], ["ES", 200, 200, "good"]],
        "table12": [["IT", 150, 150, "fair"], ["IN", 150, 150, "fair"], ["MX", 150, 150, "fair"]],
        "table13": [["BR", 150, 150, "fair"], ["AE", 150, 150, "fair"], ["BE", 150, 150, "fair"]],
        "table14": [["EG", 150, 150, "fair"], ["SA", 150, 150, "fair"], ["TR", 150, 150, "fair"]],
        "table15": [["PL", 150, 150, "fair"], ["NL", 150, 150, "fair"], ["SE", 150, 150, "fair"]]
    };

    // Function to add inline styles to the page
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .dynamic-tables-container {
                display: flex;
                flex-wrap: wrap;
                margin: 20px;
                font-family: Arial, sans-serif;
            }
            .info-text {
                width: 100%;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            .row-container {
                display: flex;
                margin-bottom: 20px;
            }
            .table-container {
                flex: 1;
                min-width: 200px;
                margin-right: 20px;
                overflow: hidden;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                table-layout: auto; /* Allows cells to auto-fit based on content */
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center; /* Center-align text in cells */
                word-wrap: break-word;
            }
            th {
                background-color: #f4f4f4;
            }
            caption {
                font-weight: bold;
                margin-bottom: 10px;
            }
        `;
        document.head.appendChild(style);
    }

    // Function to create a table based on JSON data
    function createTable(tableId) {
        const table = document.createElement('table');
        table.id = tableId;

        const caption = document.createElement('caption');
        caption.innerText = tableNames[tableId] || tableId;
        table.appendChild(caption);

        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        const headers = ['MP', 'In Queue', 'Age', 'Status'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.innerText = header;
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        const rows = jsonData[tableId] || []; // Get rows from JSON data

        rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.innerText = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        return table;
    }

    // Function to insert tables and text into the page
    function insertContent() {
        // Add styles to the page
        addStyles();

        var container = document.createElement('div');
        container.className = 'dynamic-tables-container';

        // Add information text above the tables
        const infoText = document.createElement('div');
        infoText.className = 'info-text';
        infoText.innerHTML = `
            <p>Here is a description or introduction to the tables.</p>
            <p>You can add more information or instructions here.</p>
            <p>Additional text can be placed here to explain further details.</p>
        `;
        container.appendChild(infoText);

        // Create rows of tables
        const tableIds = Object.keys(jsonData);
        for (let i = 0; i < tableIds.length; i += 5) {
            const rowContainer = document.createElement('div');
            rowContainer.className = 'row-container';

            for (let j = i; j < i + 5 && j < tableIds.length; j++) {
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-container';
                tableContainer.appendChild(createTable(tableIds[j]));
                rowContainer.appendChild(tableContainer);
            }

            container.appendChild(rowContainer);
        }

        // Insert the container at the end of the body
        document.body.appendChild(container);
        genData=container;

    }
 // Function to add a button and set up its click event
function addEmailButton() {
    // Create the button
    const button = document.createElement('button');
    button.textContent = 'Send Email';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    document.body.appendChild(button);

    // Button click event
    button.addEventListener('click', () => {
        const subject = 'greet';

        // Example HTML content
        const htmlElement = document.createElement('div');
        htmlElement.innerHTML = `
            <p>Hello,</p>
            <p>This is a message with some <b>HTML content</b>.</p>
            <p>Best regards,<br>Your Name</p>
       `;
      htmlElement.appendChild(genData)

        // Convert HTML content to plain text
        const plainText = htmlElement.textContent || htmlElement.innerText;

        // Encode plain text for use in mailto
        const encodedBody = encodeURIComponent(plainText).replace(/%0A/g, '%0D%0A'); // Handle new lines
        const mailtoLink = `mailto:nik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;
        window.location.href = mailtoLink;
    });
  console.log(genData)

}

// Call the function to add the button






    // Run the function to insert content
    insertContent();
  addEmailButton();

})();
