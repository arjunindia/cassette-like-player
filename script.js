let button = document.querySelectorAll("button");
let ac = document.querySelector(".audio");
let pepe = document.querySelector("#pepe");
let dp = document.querySelector("#dp");
let num = 5;
let p = true;
for (let i = 1; i <= num; i++) {
  let aE = document.createElement("audio");
  aE.setAttribute("src", "./audio/" + i + ".mp3");
  ac.appendChild(aE);
}
let audio = document.querySelectorAll("audio");
let n = 1;
dp.textContent = audio[n].src.replace(/^.*[\\\/]/, "");
document.addEventListener("keydown", function (e) {
  if (e.key == "p") {
    playM();
  } else if (e.key == "e") {
    stopM();
  }
});
button[0].addEventListener("click", function () {
  playM();
});
button[3].addEventListener("click", function () {
  stopM();
});
for (let i = 1; i <= num; i++) {
  audio[i].addEventListener("ended", function () {
    if (n < num) {
      n++;
    } else {
      n = 1;
    }
    audio[n].play();
    dp.textContent = audio[n].src.replace(/^.*[\\\/]/, "");
  });
}
function playM() {
  pepe.setAttribute("src", "./3x.gif");
  p ? audio[n].play() : audio[n].pause();
  p = !p;
}
function stopM() {
  pepe.setAttribute("src", "");
  audio[n].pause();
  audio[n].currentTime = 0;
  if (n < num) {
    n++;
  } else {
    n = 1;
  }
  dp.textContent = audio[n].src.replace(/^.*[\\\/]/, "");
  p = true;
}
function endskip() {
  audio[n].currentTime = audio[n].duration;
}
