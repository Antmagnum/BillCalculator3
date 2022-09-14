'use strict';

let btn = document.getElementById('btn1');
let peopleAmount = document.getElementById('peopleAmount').value = 1;

btn.addEventListener('click', function () {


    let bill = document.getElementById('billAmount').value;

    if (bill != 0) {
        let peopleAmount = document.getElementById('peopleAmount').value;
        let tipAmount = bill <= 950 && bill >= 50 ? bill * 0.1 : bill < 50 ? bill * .2 : bill * .075;
        let tipPercentage = bill <= 950 && bill >= 50 ? 10 : bill < 50 ? 20 : 7.5;


        document.getElementById('tipPercent').value = tipPercentage;
        document.getElementById('tipAmount').value = Math.ceil(tipAmount);
        document.getElementById('totalBill').value = Math.ceil((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(peopleAmount));
        document.getElementById('totalBillRound').value = Math.ceil(((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(peopleAmount)) / 10) * 10;
    } else {


    }
});




let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function () {
    document.getElementById("tipPercent").style.display = "none";
    document.getElementById("customTip").style.display = "inline-flex";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2Custom").style.display = "inline-flex";
    document.getElementById("totalBillRound").style.display = "none";
    document.getElementById("totalBillRoundCustom").style.display = "inline-flex";
    document.getElementById('customTip').value = 10;
})



let btn2Custom = document.getElementById('btn2Custom');

btn2Custom.addEventListener('click', function () {
    let bill = document.getElementById('billAmount').value;
    let peopleAmount = document.getElementById('peopleAmount').value;
    let tipPercentage = document.getElementById('customTip').value;
    let tipAmount = (bill * tipPercentage) / 100;

    document.getElementById('customTip').value = tipPercentage;
    document.getElementById('tipAmount').value = Math.ceil(tipAmount);
    document.getElementById('totalBill').value = Math.ceil((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(peopleAmount));
    document.getElementById('totalBillRoundCustom').value = Math.ceil(((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(peopleAmount)) / 10) * 10;
})


let reset = document.getElementById('reset');

reset.addEventListener('click', function () {
    location.reload()
})