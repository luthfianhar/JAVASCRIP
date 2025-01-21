let a =true;
let b = false;
let c = true;

console.log(a&&b);false
console.log(a&&c);true

if (a && b && c){
    console.log('semua variable bernilai true/benar');
}else{
    console.log('salah satu bernilai false/salah');
}
let d =true;
let e =false;
let f =true;
let g = false;

console.log(d||e);true
console.log(d||f);true
console.log(e||g);false

if (d || g ||  e){
    console.log('salah satu bernilai true/benar');
}else{
    console.log('semua variable bernilai false/salah atu tidak bernilai true');
}

let h =true;
let i =false;
let j =true;

console.log(h);true
console.log(!h);false
console.log(! false);true

if (!israining){
    console.log('hari ini hujan');
}else{
    console.log('hari ini tidak hujan'); 'hari ini tidak hujan'
}

let nilaimatematika =91;
let nilaibahasainggris =75;
let saklar = false;

if (nilaimatematika >=80 && nilaibahasainggris >=85){
    console.log('anda lulus');
}else{
    console.log('anda tidak lulus');
}
