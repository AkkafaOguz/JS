//Fonksiyonlar

//! 1. Yontem

function adimiYazdir(x) {

    console.log(`Adiniz ${x}`);
}

let adim = (prompt('Lutfen adinizi giriniz'));
adimiYazdir(adim);

//! 2. Yontem


const yasimiYazdir = function(x){

    return x<18 ? 'Daha yolun basindasin' : 'Hayat mucadelen basladi';
}

console.log(yasimiYazdir(prompt('Lutfen yasinizi giriniz')));


let dogumGunum = function(x){

    return 2021 - x ;

}
console.log(dogumGunum(prompt('Lutfen dogum yilinizi giriniz')));


//! 3. Yontem: Function

const ehliyet = (x) => x>18 ? 'Ehliyet Alabilirsin' : 'Ehliyet alamazsin';

console.log(ehliyet(prompt('Lutfen yasinizi giriniz')));


