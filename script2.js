// script.js
function calculateTotal() {
    const item1Price = 45;
    const item2Price = 32;
    const item3Price = 20;
    const item4Price = 15;
    const item5Price = 14;
    const item6Price = 18;
    const item7Price = 28;
    const item8Price = 30;
    const item9Price = 16;
    const item10Price = 30;
    const item11Price = 10;
    const item12Price = 14;
    const item13Price = 14;
    const item14Price = 24;
    const item15Price = 2.50;
    const item16Price = 4;
    const item17Price = 3;
    const item18Price = 4;
    const item19Price = 2.50;
    const item20Price = 2.50;
    const item21Price = 2.50;
    const item22Price = 1;
    const salesTaxRate = 0.06; // 6%

    let item1Quantity = document.getElementById("item1Quantity").value;
    let item2Quantity = document.getElementById("item2Quantity").value;
    let item3Quantity = document.getElementById("item3Quantity").value;
    let item4Quantity = document.getElementById("item4Quantity").value;
    let item5Quantity = document.getElementById("item5Quantity").value;
    let item6Quantity = document.getElementById("item6Quantity").value;
    let item7Quantity = document.getElementById("item7Quantity").value;
    let item8Quantity = document.getElementById("item8Quantity").value;
    let item9Quantity = document.getElementById("item9Quantity").value;
    let item10Quantity = document.getElementById("item10Quantity").value;
    let item11Quantity = document.getElementById("item11Quantity").value;
    let item12Quantity = document.getElementById("item12Quantity").value;
    let item13Quantity = document.getElementById("item13Quantity").value;
    let item14Quantity = document.getElementById("item14Quantity").value;
    let item15Quantity = document.getElementById("item15Quantity").value;
    let item16Quantity = document.getElementById("item16Quantity").value;
    let item17Quantity = document.getElementById("item17Quantity").value;
    let item18Quantity = document.getElementById("item18Quantity").value;
    let item19Quantity = document.getElementById("item19Quantity").value;
    let item20Quantity = document.getElementById("item20Quantity").value;
    let item21Quantity = document.getElementById("item21Quantity").value;
    let item22Quantity = document.getElementById("item22Quantity").value;

    let subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (item3Price * item3Quantity) + (item4Price * item4Quantity) + (item5Price * item5Quantity) + (item6Price * item6Quantity) + (item7Price * item7Quantity) + (item8Price * item8Quantity) + (item9Price * item9Quantity) + (item10Price * item10Quantity) + (item11Price * item11Quantity) + (item12Price * item12Quantity) + (item13Price * item13Quantity) + (item14Price * item14Quantity) + (item15Price * item15Quantity) + (item16Price * item16Quantity) + (item17Price * item17Quantity) + (item18Price * item18Quantity) + (item19Price * item19Quantity) + (item20Price * item20Quantity) + (item21Price * item21Quantity) + (item22Price * item22Quantity);

    let salesTax = subtotal * salesTaxRate;
    let grandTotal = subtotal + salesTax;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("salesTax").innerText = salesTax.toFixed(2);
    document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
}
