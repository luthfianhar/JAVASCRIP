//*4.3 membuat set 
let myset = new Set([1, 2, 3, 4, 5, 5, 5]);
console.log(myset);

//*4.2 mengakses set
myset.add(9);
console.log(myset);
   
//*4.3 menghapus set
myset.delete(9);
console.log(myset);

//!5.1 spreed operator
const arrayone = [1, 2, 3, 4, 5];
console.log(arrayone) = ['a', 'b', 'c', 'd', 'e'];

//*5.2 menyisipkan data/value
const arraytwo = [...arrayone];
console.log(arraytwo);

//*5.3 menyiapkan object
const personone ={firstname:'john',lastname:'doe'};
const persontwo = {...personone,nickname:'johndoe'};
console.log(persontwo);

//*5.4 menyisipkan array
const arraythree = [1,2,3,4,5];
const arrayfour = [...arraythree,6,7,8,9,10];
console.log(arrayfour);

//!6. next operator
function myfunc(...args){
    console.log(args);
}
myfunc(1,2,3,4,5);

//* contoh 2
function myfunc2(number,...params){
    console.log(number);
    console.log(params);    
}
myfunc2(1,2,3,4,5);

//* contoh 3
function lengtparams(...params){
    console.log(params.length);
}
lengparams(1,2,3,4,5);


    


