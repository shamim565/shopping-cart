function updateCasePrice(newCaseNumber) {
    const totalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = totalPrice;
}

function updateCaseNumber(sign) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (sign === '+') {
        newCaseNumber = previousCaseNumber + 1;
    }
    else if (sign === '-') {
        if (previousCaseNumber > 0) {
            newCaseNumber = previousCaseNumber - 1;
        }
        else {
            return 0;
        }
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber('+');
    updateCasePrice(newCaseNumber);
    const subTotal = updateSubTotal();
    const tax = subTotal * 0.1;
    updateTax(parseFloat(tax.toFixed(2)));
    const finalTotal = subTotal + tax;
    updateFinalTotal(finalTotal);
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber('-');
    updateCasePrice(newCaseNumber);
    const subTotal = updateSubTotal();
    const tax = subTotal * 0.1;
    updateTax(parseFloat(tax.toFixed(2)));
    const finalTotal = subTotal + tax;
    updateFinalTotal(finalTotal);

});
