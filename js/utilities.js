function getTextElementValueByID(elementId) {
    const totalElement = document.getElementById(elementId);
    const subTotal = parseInt(totalElement.innerText);
    return subTotal;
}
function updateSubTotal() {
    const phoneTotal = getTextElementValueByID('phone-total');
    const caseTotal = getTextElementValueByID('case-total');
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('subtotal').innerText = subTotal;
    return subTotal;
}
function updateTax(value) {
    document.getElementById('tax-total').innerText = value;
}
function updateFinalTotal(finalTotal) {
    document.getElementById('final-total').innerText = finalTotal;
}