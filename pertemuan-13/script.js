function sayHello() {
  console.log("abudzar sekarang sudah sma bukan pondok");
}
sayHello();

let pondok = function() {
    console.log("rumpin di bogor");
}
pondok();

function pondok2() {
    console.log("stasiun cisauk di tanggerang");
}
pondok2();

let pondok3 = pondok2;

let isboss =confirm("apakah akamu adalah boss");
alert(isboss);

function pertanyaan(penanya ,ya,tidak){
     if (confirm(penanya)){
         alert(ya);
     }else{
         alert(tidak);
     }
}

function ya(){
    console.log("iya");
}
function tidak(){
    console.log("tidak");
}