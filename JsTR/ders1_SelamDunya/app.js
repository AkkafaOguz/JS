//==================================================================
// todo Konsol

console.log("Hello World");
//alert("Dikkat!");  --> siteye girilince ustten gelen uyari mesajini vermek icin kullanilir
//console.warn("Bu bir uyaridir"); --> konsolda dikkat cekilmesi gereken yeri belli eder
//console.error("Bu bir hatadir"); -->  bir hata oldugunda ve bunu belirtmek istedigimizde kolsolda gorulmesini saglar
//prompt("Adinizi giriniz"); --> siteye girilince kullanicidan veri alinmasini saglayar (like scanner, label)

//====================================================================
//todo var

var isim = "Ipek";
console.log(typeof isim);
isim = 3.14;
console.log(typeof isim);

// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
// ? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir. (Ortalik karisabilir)

//====================================================================
//todo const

const piSayisi = 3.14;
//! piSayisi=3;  const JAVA'daki final variable gibidir. Degeri sonradan degistirilemez. Ayni zamanda scope kurali gecerlidir.

const isim1 = "Osman";
console.log(typeof(isim1));
// const number;   --> Hatali kullanim (degeri sonradan degistirilemeyecegi icin bir deger atamasi olmali. Deger atamasi olmaz ise sonradan deger atanamaaz.)
// number =4;     

// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.
// ! const -> let -> var (kullanimda oncelik siralamasi)

// Let
// Let scope olayina takilir. Const'tan farki ise degerinin sonradan degistirilebilir olmasi.

// ? Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET "Block-scope" bir değişkendir. VAR ise "global-scope" bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = 'Erdem';
console.log(fiyat);

// String tanimlamak icin 3 farkli karakter kullanilabilir.(",',`)

let name1= "Alaattin";
let name2= 'Faruk';
let name3= `Oguzhan`;
console.log(name1);
console.log(name2);
console.log(name3);

// Aritmatik Operatorler

const kola= 5;
const cips= 6;
const ekmek= 2;
console.log(kola+ cips+ ekmek);
console.log('toplam fiyat', kola+cips+ekmek); //-> (+ ' ' + kullanmak yerinde yalnizca "," kullanmak bosluk birakmanin yerini tutabilir.)

const ad='can';
const soyad ='canan';
console.log(ad+soyad);

const s1=7;
let s2='7';
console.log(s1+s2);

console.log('benim adim',  ad , 'benim yasim', s1); // --> ('benim adim' + ' ' + ad + ' ' + 'benim yasim' + ' ' + s1) 

//! Template Literal

console.log(`benim adim ${ad} yasim ${s1}`); //--> (`benim adim ${ad} yasim ${s1}`) == ('benim adim' + ' ' + ad + ' ' + 'benim yasim' + ' ' + s1) == ('benim adim',  ad , 'benim yasim', s1)

//us alma**

const taban=2;
const us=3;
console.log(taban**us); //2*2*2=8

//mod alma

const sayi=123;
const birler=sayi%10;
console.log(birler);

//Karsilastirma Operatorleri
const s3=5;
const s4='5';
console.log(s3==s4);  // --> true
console.log(s3===s4); // --> false  (hep degere hem data type'a bakiyor)

 
//==============================================================
//Tip Degisimleri

const para= '100';
console.log(para+15);//10015
console.log(Number(para)+15);115 // --> gecici data casting

const sayi5=56;
console.log(String(sayi5)+sayi5);//5656

