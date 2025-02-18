function deklarasi (params){
    console.log(deklarasi);
}
let expresi = function(params){
    console.log(expresi);
}

let arrowname = (params)  =>{
    console.log(arrowname);
}

let sum = (a,b) =>{
    return a + b;
}

console.log(sum(1,2)); 3

let total =(c,d)=> c+d;
console.log(total(1,2));

let perkalian = (e,f) => {
    return e * f;
    hasil+=1;
    return hasil
}
console.log(perkalian(2,3)); 7
//*multi baris wajib munggunakan retrun dan kurung kurawat 
//*tidak wajib menggunakan retrun dan kurung kurawat jika ada satu baris saja

//*jika tidak ada parameter tetap harus menyertakan ()
let sayhello = () => 'Hello';
console.log(sayhello());

//*jika hsnya ada satu  parameter()bisa dihilangkan 
let sayhello2 = (lastname) => `Hello ${lastname}`;
console.log(sayhello2('arman'));







    