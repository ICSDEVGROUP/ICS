// script.js
function calculateTotal() {
    const item1Price = 10;
    const item2Price = 15;
    const item3Price = 1;
    const item4Price = 1;
    const item5Price = 1;
    const item6Price = 1;
    const item7Price = 1;
    const item8Price = 1;
    const item9Price = 1;
    const item10Price = 1;
    const item11Price = 1;
    const item12Price = 1;
    
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

    let subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (item3Price * item3Quantity) + (item4Price * item4Quantity) + (item5Price * item5Quantity) + (item6Price * item6Quantity) + (item7Price * item7Quantity) + (item8Price * item8Quantity) + (item9Price * item9Quantity) + (item10Price * item10Quantity) + (item11Price * item11Quantity) + (item12Price * item12Quantity);
    let salesTax = subtotal * salesTaxRate;
    let grandTotal = subtotal + salesTax;

    // Format numbers with commas
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    document.getElementById("subtotal").innerText = formatter.format(subtotal);
    document.getElementById("salesTax").innerText = formatter.format(salesTax);
    document.getElementById("grandTotal").innerText = formatter.format(grandTotal);
}

