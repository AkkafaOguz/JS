//Ara butonuna tiklandiginda calan telefon gosterilsin ve zil calsin

let resim = document.querySelector(".resim");
let ring = document.querySelector(".ses");
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif";
  ring.play();
};

document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbağla.gif";
  ring.pause();
};

document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif";
};

const liste = document.querySelector(".liste");
const satir = document.querySelector(".dil");

document.querySelector(".btn-ekle").onclick = function () {
  liste.innerHTML = liste.innerHTML + `<li>${satir.value}</li>`;
  satir.value = "";
};

//Sil butonuna tiklandiginda li elemanini sil

document.querySelector(".btn-sil").onclick = function () {
  liste.removeChild(liste.lastChild);
};
