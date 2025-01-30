


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

for (let k = 1; k <= 10; k++) {
    console.log(k);
}

for (let l = 10; l >= 1; l--) {
    console.log(l);
}   

for (let m = 1; m <= 10; m++) {
    if (m === 5) {
        continue;
    }
    console.log(m);
}

for (let n = 1; n <= 10; n++) {
    if (n === 5) {
        break;
    }
    console.log(n);
}
