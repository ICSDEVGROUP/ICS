// script.js
function calculateTotal() {
    const item1Price = 10;
    const item2Price = 15;
    const item3Price = 1;
    const salesTaxRate = 0.06; // 6%

    let item1Quantity = document.getElementById("item1Quantity").value;
    let item2Quantity = document.getElementById("item2Quantity").value;
    let item3Quantity = document.getElementById("item3Quantity").value;

    let subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (item3Price * item3Quantity);
    let salesTax = subtotal * salesTaxRate;
    let grandTotal = subtotal + salesTax;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("salesTax").innerText = salesTax.toFixed(2);
    document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
}
