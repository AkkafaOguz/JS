//===========================================================
// Karar Yapilari

// IF ELSE

const s1 = Number(prompt("Birinci sayiyi giriniz"));
const islem = prompt("Islemi giriniz");
const s2 = +prompt("Ikinci sayiyi giriniz");

// --> Toplama isleminde prompt ile girdigimiz degeri string olarak algilayip "+" islemini concat olarak kullaniyor.
// --> Bunun onune gecmek icin prompt onune "Number" keyword ile alinan veriye casting uygulanir. (prompt onune "+" koymak da ayni gorevi gorur)
// --> Number(prompt("Birinci sayiyi giriniz")) == +prompt("Birinci sayiyi giriniz")

let sonuc = 0;
if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 + s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
}

console.log(sonuc);
