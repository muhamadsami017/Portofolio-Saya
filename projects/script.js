const btnSantai = document.getElementById("btnSantai");
const btnTeknis = document.getElementById("btnTeknis");
const santai = document.getElementById("santai");
const teknis = document.getElementById("teknis");

btnSantai.onclick = () => {
  btnSantai.classList.add("active");
  btnTeknis.classList.remove("active");
  santai.classList.add("active");
  teknis.classList.remove("active");
};

btnTeknis.onclick = () => {
  btnTeknis.classList.add("active");
  btnSantai.classList.remove("active");
  teknis.classList.add("active");
  santai.classList.remove("active");
};
