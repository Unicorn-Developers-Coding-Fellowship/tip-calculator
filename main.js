let customer = document.getElementById('customerName');
let tipPercent = document.getElementById('percent');
let amount = document.getElementById('amount');

let tipAmount;

document.getElementById('calculate').addEventListener('click', function() {
    document.getElementById('displayCustomerName').innerText = customer.value;
    document.getElementById('displayTipPercentage').innerText = tipPercent.value;
    document.getElementById('displayAmount').innerText = amount.value;
    
    tipAmount = (tipPercent.value / 100) * amount.value;
    
    document.getElementById('displayTipAmount').innerText = tipAmount;
})