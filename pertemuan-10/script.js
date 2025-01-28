let firstname;
console.log(firstname); undefined

let hasil = firstname ?? 'tidak memiliki nama';
console.log(hasil);  'tidak memiliki nama'

let firstnames = 'fajar';
console.log(firstnames);  'fajar'

let lastnames = null;
console.log(lastnames); null

let nickname =null;
console.log(nickname); null

let fullname = firstnames ?? lastnames ?? nickname ?? 'anonymous';
console.log(fullname);  0

let namaawal =null;
console.log(namaawal); null
let namaakhir = null;
console.log(namalengkap); null
let namatengah = 0;
console.log(namatengah); 0
let namalengkap = namaawal ?? namaakhir ?? namatengah ?? 'anonymous';
console.log(namalengkap); 0