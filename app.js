function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //  update total
    const casePrice = document.getElementById(product + '-price');
    casePrice.innerText = productNumber * price;
    // calcaluteTotal function call
    calculateTotal();

}
// calculate function
function getValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
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
// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
});
// case  increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);
});