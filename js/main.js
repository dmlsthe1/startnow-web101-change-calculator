// Write your JavaScript here

var inputChange;
var dollars20 = [2000, "dollars20-output"];
var dollars10 = [1000, "dollars10-output"];
var dollars5 = [500, "dollars5-output"];
var dollars2 = [200, "dollars2-output"];
var dollars = [100, "dollars-output"];
var quarters = [25, "quarters-output"];
var dimes = [10, "dimes-output"];
var nickels = [5, "nickels-output"];
var pennies = [1, "pennies-output"];

function calChange(type) {
    var remainder = inputChange % type[0];
    var temp = inputChange - remainder;
    document.getElementById(type[1]).innerHTML = temp / type[0];
    inputChange = inputChange % type[0];
}  

function resetAmount(id) {
    document.getElementById(id[1]).innerHTML = 0;
}

function btnClick (event) {
    event.preventDefault();
    var inputSales = document.getElementById("amount-due").value;
    var inputAmount = document.getElementById("amount-received").value;
    inputChange = Math.round((inputAmount * 100) - (inputSales * 100));
console.log(inputChange + " one");
console.log(dollars20 + " three");
    document.getElementById("total-output").innerHTML = (inputChange / 100);

    if (inputChange >= dollars20[0]) {
        calChange(dollars20);   
    } else {
        resetAmount(dollars20);
    }
    if (inputChange >= dollars10[0]) {
        calChange(dollars10);   
    } else {
        resetAmount(dollars10);
    }
    if (inputChange >= dollars5[0]) {
        calChange(dollars5);   
    } else {
        resetAmount(dollars5);
    }
    if (inputChange >= dollars2[0]) {
        calChange(dollars2);   
    } else {
        resetAmount(dollars2);
    }
    if (inputChange >= dollars[0]) {
        calChange(dollars);   
    } else {
        resetAmount(dollars);
    }
    if (inputChange >= quarters[0]) {
        calChange(quarters);
    } else {
        resetAmount(quarters);
    }
    if (inputChange >= dimes[0]) {
        calChange(dimes);
    } else {
        resetAmount(dimes);
    }
    if (inputChange >= nickels[0]) {
        calChange(nickels);
    } else {
        resetAmount(nickels);
    }
    if (inputChange >= pennies[0]) {
        calChange(pennies);
    } else {
        resetAmount(pennies);
    }
    console.log(inputChange + " 2");
}

document.getElementById("calculate-change").addEventListener("click", btnClick);