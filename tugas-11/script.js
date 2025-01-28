let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
let j = 10;
do {
    console.log(j);
    j--;
} while (j >= 1);
for (let k = 2; k <= 20; k += 2) {
    console.log(k);
}
for (let m = 1; m <= 10; m++) {
    if (m === 5) {
        continue; 
    }
    console.log(m);
}
for (let n = 1; n <= 10; n++) {
    if (n === 6) {
        break; 
    }
    console.log(n);
}