let button = document.querySelectorAll("button");
let ac = document.querySelector(".audio");
let pepe = document.querySelector("#pepe");
let dp = document.querySelector("#dp");
let revA = document.querySelector("#rev");
let forA = document.querySelector("#for");
revA.playbackRate = 2.0;
forA.playbackRate = 2.5;
let num = 5;
let p = true;
for (let i = 1; i <= num; i++) {
  let aE = document.createElement("audio");
  aE.setAttribute("src", "./audio/" + i + ".mp3");
  ac.appendChild(aE);
}
let audio = document.querySelectorAll(".audio audio");
let n = 1;
dp.textContent = audio[n].src.replace(/^.*[\\\/]/, "");
document.addEventListener("keydown", function (e) {
  if (e.key == "p") {
    playM();
  } else if (e.key == "e") {
    stopM();
  } else if (e.key == "r") {
    revM();
  } else if (e.key == "f") {
    forM();
  }
});
button[0].addEventListener("click", function () {
  playM();
});
button[1].addEventListener("click", function () {
  revM();
});
button[2].addEventListener("click", function () {
  forM();
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
  p ? pc("#6bff5e") : pc("#ff5e5e");
  p ? audio[n].play() : audio[n].pause();
  p = !p;
}
function stopM() {
  pc("#ff5e5e");
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
function revM() {
  if (!p) {
    revA.play();
    audio[n].currentTime = audio[n].currentTime - 10;
  }
}
function forM() {
  if (!p) {
    forA.play();
    audio[n].currentTime = audio[n].currentTime + 10;
  }
}
function pc(c) {
  document.querySelector(":root").style.setProperty("--dc", c);
}
function endskip() {
  audio[n].currentTime = audio[n].duration;
}
