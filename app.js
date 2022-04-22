function updateCase(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //  update total
    const casePrice = document.getElementById(product + '-price');
    casePrice.innerText = caseNumber * price;
    // calcaluteTotal
    calculateTotal();

}
function getValue(product) {
    const input = document.getElementById(product + '-number');
    const phoneNumber = parseInt(input.value);
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getValue('phone') * 1219;
    const caseTotal = getValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = tax + subTotal;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;


}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCase('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCase('case', 59, false);
});
// phone 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCase('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCase('phone', 1219, false);
});
