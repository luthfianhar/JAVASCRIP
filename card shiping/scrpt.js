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

function tambah(nue) {
    let number =parseFloat(quantityelem.value);
    number +=nue;
    quantityelem.value = number;

    let hasil=number *priceElem.innerHTML;
    subtotalelem.innerHTML = hasil;

    let total =totalall(subtotalelem,shippingelem,discountelem);
    totalelem.innerHTML = total;
}

function kurang(nue)  {
    let number =parseFloat(quantityelem.value);
    number -=nue;
    quantityelem.value = number;

    let hasil=number *priceElem.innerHTML;
    subtotalelem.innerHTML = hasil;

    let total =totalall(subtotalelem,shippingelem,discountelem);
    totalelem.innerHTML = total;
}

function btnvoucher(){
    let inputvoucher =codevoucher.value;

    if (inputvoucher == "abudzar") {
        textvochelem.innerHTML = "voucher berhasil";
        textvochelem.classList.remove("applied");
        textvochelem.classList.add("success");
        discountelem.innerHTML = 2000;
    } else if (inputvoucher == "fulan") {
        discountelem.innerHTML = 0;
    }else{
        discountelem.innerHTML = 0;
    }

}