const themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = () => document.body.classList.toggle("dark");

audio.ontimeupdate = function () {
  localStorage.setItem("audioTime", audio.currentTime);
};

window.onload = function () {
  var savedTime = localStorage.getItem("audioTime");
  if (savedTime) {
    audio.currentTime = savedTime;
    audio.play();
  }
};
