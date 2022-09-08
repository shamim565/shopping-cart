function updatePhonePrice(newphoneNumber) {
    const totalPrice = newphoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = totalPrice;
}
function updatephoneNumber(sign) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousphoneNumber = parseInt(phoneNumberString);
    let newphoneNumber;
    if (sign === '+') {
        newphoneNumber = previousphoneNumber + 1;
    }
    else if (sign === '-') {
        if (previousphoneNumber > 0) {
            newphoneNumber = previousphoneNumber - 1;
        }
        else {
            return 0;
        }
    }
    phoneNumberField.value = newphoneNumber;
    return newphoneNumber;

}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newphoneNumber = updatephoneNumber('+');
    updatePhonePrice(newphoneNumber);
    const subTotal = updateSubTotal();
    const tax = subTotal * 0.1;
    updateTax(parseFloat(tax.toFixed(2)));
    const finalTotal = subTotal + tax;
    updateFinalTotal(finalTotal);

});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newphoneNumber = updatephoneNumber('-');
    updatePhonePrice(newphoneNumber);
    const subTotal = updateSubTotal();
    const tax = subTotal * 0.1;
    updateTax(parseFloat(tax.toFixed(2)));
    const finalTotal = subTotal + tax;
    updateFinalTotal(finalTotal);
});
