// --- Task 1 ---
function updateTime() {
    const time = new Date();
    const divEl = document.getElementById('clock');
    
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();
    const month = time.getMonth() + 1; 
    const day = time.getDate(); 

    divEl.textContent = `${hours}:${minutes}:${seconds} - ${year}:${month}:${day}`;
}

setInterval(updateTime, 1000);


// --- Task 2 ---
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// --- Task 3 ---
    function createTable() {
        document.getElementById('sm').textContent = 'Sum = ';
        const rows = document.getElementById('rows').value;
        const cols = document.getElementById('cols').value;
        let tableHtml = '<table>';
        sum = 0;
        for (let i = 1; i <= rows; i++) {
            tableHtml += '<tr>';
            for (let j = 1; j <= cols; j++) {
                val = 2*i / 5*j;
                tableHtml += `<td>${val.toFixed(3)}</td>`;
                sum += val;
            }
            tableHtml += '</tr>';
        }
        
        tableHtml += '</table>';
        document.getElementById('dynamicTable').innerHTML = tableHtml;
        document.getElementById('sm').textContent += `${sum.toFixed(3)}`
    }

// --- Task 4 --- 

function runConsoleLogs() {
    console.clear();
    console.log("11 % 2 = "+11%2);
    console.log(10%2==0);

    const arr = [12, "pineapple", true];
    console.log("Num %d, str: %s, bool: %s", arr[0], arr[1], arr[2]);

}
// --- Task 5 ---

function runConsoleMethods() {
    console.clear();
    console.info('This is an info message ');
    console.warn('This is an warm message');
    console.error('This is an error message');
    console.dir(document.getElementById('consoleOutput'));
    console.dirxml(document.body);
    console.time();
    console.timeEnd();
    console.profile();
    console.log(123);
    console.profileEnd();
    console.assert(0, "Statement is false"); // Error will display
    console.assert(1, "Statement is true"); // Nothing will happen
}
