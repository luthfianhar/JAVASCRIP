let i =1;

while (i <= 3) {
    console.log(i); 1,2,3,4,5
    i++;
}

let j =1;

do {    
    console.log(j); 1,2,3,4,5                                                   
    j++;
} while (j <= 5);

for (let k = 1; k <= 5; k++) {
    console.log(k); 1,2,3,4,5
}

for (let l = 1; l <= 5; l++) {
    if (1===4)continue;
    console.log(l); 1,2,3,4,5
}

for (let m = 1; m <= 5; m++) {
    if (m===4)break;
    console.log(m); 1,2,3,4,5
}   
let n = 1;

let number =2;
switch (number) {
    case 1:
        console.log('satu');
        break;
    case 2:
        console.log('dua');
        break;
    case 3:
        console.log('tiga');
        break;
    case 4:
        console.log('empat');
        break;
    case 5:
        console.log('lima');
        break;
    default:
        console.log('tidak ada');
        break;
}

