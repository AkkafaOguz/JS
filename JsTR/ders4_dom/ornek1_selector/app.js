//!GETELEMENT

const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const button = document.getElementById("btn"); //  --> style yazmamamizin sebebi sadece style islemi degil ayni zamanda css islemi de yapmak istememiz.
button.style.width = "100px";
button.style.color = "red";
button.style.fontSize = "18px";
button.textContent = "Ara"; //-> Taglarin icindeki yazilari degistirmek istiyorsam bunu kullaniyorum. Inner HTML daha genis islemler icin kullaniliyor. Basit bir islem icin bu yeterli.

//button.innerHTML=`<li>trt</li>`  --> Burada daha kapsamli bir islem yapiliyor. Basit bir islem yapmak icin kullanmaya gerek yok.

//!GETELEMENTBYTAGNAME (Dezavantaji: Kodda ayni olan benzer taglarin hepsini degistirir) []

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px"; //--> [0] Kod icerisindeki resimlerin sirasina gore islem yapiyor (Array index gibi)
resim[0].style.height = "300px";

resim[1].style.border = "3px solid red";

//!GETELEMENTBYCLASSNAME (Tercih edilmeyen kullanim. Class = Tag)

const baslik = document.getElementsByClassName("H1");
baslik[0].style.textAlign = "center";

//!QUARYSELECTOR (En cok kullanilan cagirma yolu) (Class ve Id ile cagirma)

document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI 🧐";
document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green,blue,pink)";

//!EVENT

//TODO(onmouseover, onmouseout) ORN1:

const h = document.querySelector(".H1");

h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "white";
};

//const h = () => h.style.color="red"; h.style.backgroundColor="white";

h.onmouseout = function () {
  h.style.color = "black";
  h.style.backgroundColor = "red";
};

//TODO(onclick) ORN2:

document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src = "./img/logo2.png";
  document.querySelector(".iki").src = "./img/js_logo.png";
};
