// 1. Deklarasi Fungsi
function greet() {
    console.log("Hello, World!");
}
greet(); 
// 2. Variabel Lokal
function showMessage() {
    let message = "Ini adalah pesan lokal";
    console.log(message);
}
showMessage(); 

// 3. Variabel Luar
let username = "Guest";

function updateUsername() {
    username = "Admin";
}

console.log("Username sebelum update:", username); 
updateUsername(); 
console.log("Username setelah update:", username); 

// 4. Parameters

// 5. Nilai Default
function greetWithDefault(name = "User") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault(); 
greetWithDefault("Alya"); 

// 6. Alternatif Nilai Default Parameter
function setUser(userName) {
    userName = userName || "Guest"; 
    console.log(`Welcome, ${userName}!`);
}

setUser();
setUser("Rafi"); 

// 7. Mengembalikan Nilai
function add(paramOne, paramTwo) {
    return paramOne + paramTwo;
}

console.log(add(10, 7)); // Output yang diharapkan: 17