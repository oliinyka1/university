// Task 1

document.getElementById("studentName").textContent = 'Oliinyk Andrii Maksimovich';

function showBirthInfo() {
    window.alert('Birht date: 10/10/2010 \nCountry: USA');
}

// Task 2
function calculate() {
    let x = 1;
    let y = 2;
    let result = x/y + y*y/(1-x*y);
    window.alert(`Result ${result}`);
}

// Task 3

document.getElementById("eventInput1").addEventListener("select", function() {fun('Item was selected')});
document.getElementById("eventInput2").addEventListener("mouseout", function() {fun1('2+2=5')});

function fun(a) {
    document.getElementById("eventInput1").value = `${a}`;
}

function fun1(a) {
    document.getElementById("eventInput2").value = `${a}`;
}

// Task 4

function conditionalCalculate() {
    let x = Number(document.getElementById("inputX").value);
    let y = Number(document.getElementById("inputY").value);
    let res = 0;
    
    if( x*y < -100 ) {
        res = x/2*y;
    } else if( x*y > 20 ) {
        res = x*x - x*y;
    } else {
        res = x*x*x + 2;
    }
    
    document.getElementById("conditionalResult").textContent = `${res}`;
}

// Task 5 

let resS = 0;

function factorial(a) {
    if( a == 0 || a == 1 )
        return 1;
    return a*factorial(a-1);
}

function calculateSeriesSum() {
    let x = Number(document.getElementById("seriesInputX").value);
    let y = Number(document.getElementById("seriesInputY").value);
     
    for (let i = 3; i < 7; i++) {
        resS += Math.pow(-1, i+1) * (x - y)/factorial(i);
    }

    document.getElementById("seriesResult").textContent = `${resS}`;
}

// Task 6-7


function getProductInfo() {
    const items1 = ["Apple", "Axe", "Orange", "Oil", "Onion"];
    const availableQuantity = [1, 2, 3, 4, 5];
    const price = [50, 100, 150, 200, 250];
    let itemName = document.getElementById("myInput").value || document.getElementById("items").value; 
    let index = items1.indexOf(itemName);

    if (index !== -1) {      
        document.getElementById("productQuantity").textContent = `${availableQuantity[index]}`;
        document.getElementById("productPrice").textContent = `${price[index]}`;
    } else {
        document.getElementById("productQuantity").textContent = "Item not found";
        document.getElementById("productPrice").textContent = "";
    }
}

function calculateTotal() {
    const items1 = ["Apple", "Axe", "Orange", "Oil", "Onion"];
    const availableQuantity = [1, 2, 3, 4, 5];
    const price = [50, 100, 150, 200, 250];
    let itemName = document.getElementById("myInput").value || document.getElementById("items").value; 
    let index = items1.indexOf(itemName);

    if (index != -1) {      
        document.getElementById("productTotal").textContent = availableQuantity[index]*price[index];
    } else {
        document.getElementById("productTotal").textContent = "Item not found";
    }
}



