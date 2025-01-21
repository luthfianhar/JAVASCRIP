// nomor 1
let nilaiAndi = 81;
let grade;

if (nilaiAndi >= 91) {
    grade = "A";
} else if (nilaiAndi >= 81) {
    grade = "B";
} else if (nilaiAndi >= 71) {
    grade = "C";
} else {
    grade = "D";
}

console.log("Grade Andi (if...else):", grade);

grade = nilaiAndi >= 91 ? "A" : 
        nilaiAndi >= 81 ? "B" : 
        nilaiAndi >= 71 ? "C" : "D";

console.log("Grade Andi (Ternary):", grade);

// nomor 2
// Metode switch Statement
let buahYangDibeli = "Nangka"; // Buah yang dibeli pertama kali
let tambahanBuah = "Salak";    // Buah tambahan yang dibeli

switch (true) {
    case buahYangDibeli === "Chery":
        console.log("Buah yang didapatkan: Chery");
        break;
    case buahYangDibeli === "Nangka" && !tambahanBuah:
        console.log("Buah yang didapatkan: Nangka");
        break;
    case buahYangDibeli === "Salak" && !tambahanBuah:
        console.log("Buah yang didapatkan: Salak");
        break;
    case buahYangDibeli === "Nangka" && tambahanBuah === "Salak":
        console.log("Buah yang didapatkan: Nangka dan Salak");
        break;
    default:
        console.log("Nurudin tidak membeli buah apapun");
}
 //nomor 3
 
switch (true) {
    case buahYangDibeli === "Chery":
        console.log("Buah yang didapatkan: Chery");
        break;
    case buahYangDibeli === "Nangka" && !tambahanBuah:
        console.log("Buah yang didapatkan: Nangka");
        break;
    case buahYangDibeli === "Salak" && !tambahanBuah:
        console.log("Buah yang didapatkan: Salak");
        break;
    case buahYangDibeli === "Nangka" && tambahanBuah === "Salak":
        console.log("Buah yang didapatkan: Nangka dan Salak");
        break;
    default:
        console.log("Nurudin tidak membeli buah apapun");
}

// Konversi Boolean dalam if
let saklar;

if (Boolean(saklar)) {
    console.log("Saklarnya hidup");
} else {
    console.log("Saklarnya mati");
}

