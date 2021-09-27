const arkaPlan = document.querySelector(".darkmode");
const yazi = document.getElementsByTagName("p");
const baslik = document.getElementsByTagName("h1");
const buton = document.querySelector(".switcher");
const buton2 = document.querySelector(".switcher-2");


document.querySelector(".switcher").onclick = function () {
  arkaPlan.style.backgroundColor = "white";
  yazi[0].style.color = "black";
  yazi[1].style.color = "black";
  yazi[2].style.color = "black";
  yazi[3].style.color = "black";
  yazi[4].style.color = "black";
  baslik[0].style.color = "black";
  buton.style.display = "none";
  buton2.style.display = "block";
};

document.querySelector(".switcher-2").onclick = function () {
  arkaPlan.style.backgroundColor = "black";
  yazi[0].style.color = "white";
  yazi[1].style.color = "white";
  yazi[2].style.color = "white";
  yazi[3].style.color = "white";
  yazi[4].style.color = "white";
  baslik[0].style.color = "white";
  buton.style.display = "block";
  buton2.style.display = "none";
};
