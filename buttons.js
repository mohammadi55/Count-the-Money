
var p = 0;
var n = 0;
var d = 0;
var q = 0;
var total = 0;


function Total() {
    var totalS = document.querySelector("#total");
    if (total >= 100) {
        var dollars = Math.floor(total / 100);
        var cents = total % 100;
        totalS.textContent = "Total: $" + dollars + "." + cents;
    } else {
        totalS.textContent = "Amount In Pennies: " + total;
    }
}


function pennyTotal() {
    var totalPS = document.querySelector("#totalP");
    if (p >= 100) {
        var dollars = Math.floor(p / 100);
        var cents = p % 100;
        totalPS.textContent = "Total: $" + dollars + "." + cents;
    } else {
        totalPS.textContent = "Amount In Pennies: " + p;
    }
}


function pennyNumber(){
    var numPS = document.querySelector("#numP");
    numPS.textContent = "Amount In Pennies: " + p/1;
}




function addOneCent() {
    p += 1;
    total += 1;
    pennyTotal();
    pennyNumber();
    Total();
}


function minusOneCent() {
    if (p > 0) {
        p -= 1;
        total -= 1;
        pennyTotal();
        pennyNumber();
        Total();
    }
}


function nickelTotal() {
    var totalNS = document.querySelector("#totalN");
    if (n >= 100) {
        var dollars = Math.floor(n / 100);
        var cents = n % 100;
        totalNS.textContent = "Total: $" + dollars + "." + cents;
    } else {
        totalNS.textContent = "Nickel Amount: " + n;
    }
}


function nickelNumber(){
    var numNS = document.querySelector("#numN");
    numNS.textContent = "Nickel Number: " + n/5;
}


function addFiveCents() {
    n += 5;
    total += 5;
    nickelTotal();
    nickelNumber();
    Total();
}


function minusFiveCents() {
    if (n > 0) {
        n -= 5;
        total -= 5;
        nickelTotal();
        nickelNumber();
        Total();
    }
}


function dimeTotal() {
    var totalDS = document.querySelector("#totalD");
    if (d >= 100) {
        var dollars = Math.floor(d / 100);
        var cents = d % 100;
        totalDS.textContent = "Total: $" + dollars + "." + cents;
    } else {
        totalDS.textContent = "Dime Amount: " + d;
    }
}


function dimelNumber(){
    var numDS = document.querySelector("#numD");
    numDS.textContent = "Dime Number: " + d/10;
}


function addTenCents() {
    d += 10;
    total += 10;
    dimeTotal();
    dimelNumber();
    Total();
}


function minusTenCents() {
    if (d > 0) {
        d -= 10;
        total -= 10;
        dimeTotal();
        dimelNumber();
        Total();
    }
}


function quarterTotal() {
    var totalQS = document.querySelector("#totalQ");
    if (q >= 100) {
        var dollars = Math.floor(q / 100);
        var cents = q % 100;
        totalQS.textContent = "Total: $" + dollars + "." + cents;
    } else {
        totalQS.textContent = "Quarter Amount: " + q;
    }
}


function quarterNumber(){
    var numQS = document.querySelector("#numQ");
    numQS.textContent = "Quarter Number: " + q/25;
}


function addTwentyFiveCents() {
    q += 25;
    total += 25;
    quarterTotal();
    quarterNumber();
    Total();
}


function minusTwentyFiveCents() {
    if (q > 0) {
        q -= 25;
        total -= 25;
        quarterTotal();
        quarterNumber();
        Total();
    }
}

function clearAll() {
    p = 0;
    n = 0;
    d = 0;
    q = 0;
    total = 0;
    pennyTotal();
    pennyNumber();
    nickelTotal();
    nickelNumber();
    dimeTotal();
    dimelNumber();
    quarterTotal();
    quarterNumber();
    Total();
}



var clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearAll);


var pPlusButton = document.querySelector("#pplus");
var pMinusButton = document.querySelector("#pminus");

var nPlusButton = document.querySelector("#nplus");
var nMinusButton = document.querySelector("#nminus");

var dPlusButton = document.querySelector("#dplus");
var dMinusButton = document.querySelector("#dminus");

var qPlusButton = document.querySelector("#qplus");
var qMinusButton = document.querySelector("#qminus");



pPlusButton.addEventListener("click", addOneCent);
pMinusButton.addEventListener("click", minusOneCent);


nPlusButton.addEventListener("click", addFiveCents);
nMinusButton.addEventListener("click", minusFiveCents);


dPlusButton.addEventListener("click", addTenCents);
dMinusButton.addEventListener("click", minusTenCents);


qPlusButton.addEventListener("click", addTwentyFiveCents);
qMinusButton.addEventListener("click", minusTwentyFiveCents);