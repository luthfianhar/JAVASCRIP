//*stuktur data adalah sebuah konsep yang memungkinkan kita untuk mengeksekusi blok kode tertentu secara berulang-ulang selama kondisi yang ditentukan masih terpenuhi.
//!object
let person = {
    firstname:"john",
    lastname:"doe",
}
console.log(person);

//*1.1. membuat object
person.country='indonesia';
console.log(person);

//*1.2. mengakses object 
//*1.2.3. mengakses key
console.log(person.firstname);

//*1.2.3 mengakses property


//*2.3 membuat array metode 3 from
const  pondok =array .from('abudzar');
console.log(pondok);

//*2.4 mengakses array
let animals = ['kucing', 'kelinci', 'sapi'];
console.log(animals);

//*2.5 mengubah array
animals[0] = 'anjing';
console.log(animals);

//*2.6 menambahkan array
animals.push('kucing');
console.log(animals);

//2.7 menghapus array
//2.7 menghapus array syntax delete (tidak disarankan)
delete animals[0];
console.log(animals);

animals[0] = 'anjing';
console.log(animals);

//*2.7.2. menghapus array syntax splice
animals.splice(0,1);
console.log(animals);

animals[0] = 'anjing';
console.log(animals);

//*2.7.3. menghapus array syntax pop
animals.pop();
console.log(animals);

//*2.7.4. menghapus array syntax shift
animals.shift();
console.log(animals);

//! 3. map
//* 3.1 membuat map
let map = new Map()([
    ['nama', 'abudzar'],
    ['umur', 25]
    ['city', 'jakarta']
])
console.log(map);

//* 3.2 mengakses map
mymap .set ('nama', 'abudzar');
console.log(mymap);

mymap.set ('umur', 25);
console.log(mymap);

//* 3.3 menghapus map
console.log(mymap.get('city'));

//* 3.4 menghapus map
mymap.delete('city');
console.log(mymap); 
