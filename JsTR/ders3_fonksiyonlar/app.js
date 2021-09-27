/*==========
Fonksiyonlar
============*/

//! 1. Yontem: Function Declaration
// Bu yontem ile kodun akis sirasi onemsizdir. Cunku herhangi bir assignment yapilmiyor

//Fonksiyonun tanimlanmasi
function adYazdir() {
    console.log('Hakan');
}

//Fonksiyonun cagirilmasi
adYazdir();


//Ornek: Girilen sayinin tek mi cift mi oldugunu gosteren bir fonksiyon yaziniz

const sayiniz = prompt('Sayinizi giriniz');
console.log(tekCift(sayiniz));

function tekCift(x) {
return x%2==0 ? `${x} cifttir`: `${x} tektir`;
}


//! 2. Yontem: Function Expression (Yaygin Olan Yontem)

const tekCift1 = function (sayi) {
   return sayi%2==0 ? `${sayi} cift`: `${sayi} tek`;
}

console.log(tekCift1(5));


//Ornek2: Verilen 3 sayidan en buyuk olanini yazdiriniz.

let buyukBul = function(x,y,z){
if (x>y && x>z) {
    console.log(`En buyuk sayi ${x}`);
}else if (z>y && z>x){
    console.log(`En buyuk sayi ${z}`);
}else if (y>z && y>x) {
    console.log(`En buyuk sayi ${y}`);
}
}

buyukBul(5,8,9);

// (a>b && a>c)? a : (b>c)? b:c (Gayet Basarili Yontem)



//! 3. Yontem: Function Arrow (ok)

const ciftMi=(sayi)=> (sayi%2==0 ? `${sayi} Cift` : `${sayi} Tek`);
console.log(ciftMi(7));


//Ornek3: 

const taban = prompt('taban giriniz');
const us = prompt('ust giriniz');

const ustAl = (taban,us) => (taban**us);
console.log(ustAl(taban,us));