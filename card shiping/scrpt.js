let subtotalelem = document.getElementById("subtotal");
let shippingelem = document.getElementById("shipping");
let discountelem = document.getElementById("discount");
let totalelem = document.getElementById("total");
let quantityelem = document.getElementById("quantity");
let textvochelem = document.getElementById("textvocher");
let codevoucher = document.getElementById("codevoucher");

subtotalelem.innerHTML = "priceelem";


function totalall(subtotal,shipping,discount){
    return number (subtotal)+number(shipping)-number(discount);
} 

totalelem.innerHTML = totalall(subtotalelem,shippingelem,discountelem);

