

let pakaianPria = ["kemeja", "celana jeans", "jaket"];
let pakaianWanita = ["blouse", "rok", "cardigan"];

//* nomor 5
let pakaianToko = [...pakaianPria, ...pakaianWanita];
pakaianToko("kaos");
console.log(pakaianToko);

//*nomor 6
 pesanMakanan("mie goreng", "soto ayam", "jus jeruk", "pisang goreng");
 ["mie goreng", "soto ayam", "jus jeruk", "pisang goreng"]

//* nomor 4

koleksibuku.delete("hujan");
console.log(koleksibuku);
 { 'laskar pelangi', 'bumi', 'filosofideras' }

//*nomor 1
console.log(penduduk.pekerjaan); // Output: Petani
console.log(penduduk);
{
  namaDepan; "Slamet",
  namaBelakang; "Santoso",
  umur; 45,
  pekerjaan; "Petani",
  kota; "Yogyakarta"
}

//* nomor  2

buahfavorit.push("pisang");
const indexJeruk = buahfavorit.indexOf("jeruk");
if (indexJeruk !== -1) {
  buahfavorit[indexJeruk] = "anggur";
}
buahfavorit.pop();
console.log(buahavorit);

//*nomor 3

let menuRestoran = new Map();
menuRestoran.set("nasi goreng", 15000);
menuRestoran.set("mie ayam", 13000);
menuRestoran.set("ayam bakar", 20000);
console.log("Harga mie ayam: " + menuRestoran.get("mie ayam"));
menuRestoran.delete("es teh manis");
console.log("Menu yang tersisa:");
for (let [menu, harga] of menuRestoran) {
  console.log(`${menu}: ${harga}`);
}
