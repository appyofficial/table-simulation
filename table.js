//Selector
const tableContainer = document.querySelector('.table-container');

//table cells in an array. each item of array is an array containing number of cells in each particular rows.
const tableCells = [];

//creating table
function createTable(rows, columns) {
    const table = document.createElement('table');
    for (let i = 0; i < columns; i++) {
        let tableColumn = document.createElement('tr');
        tableColumn.classList.add('row');
        table.appendChild(tableColumn);
        for (let i = 0; i < rows; i++) {
            let tableRow = document.createElement('td');
            tableRow.classList.add('cell');
            tableColumn.appendChild(tableRow);
        }
    }
    tableContainer.appendChild(table);
    //creating array of table rows and cells
    const row = document.querySelectorAll('.row');
    row.forEach(r => {
        let arr = [];
        r.childNodes.forEach(cell => arr.push(cell));
        tableCells.push(arr);
    });
}