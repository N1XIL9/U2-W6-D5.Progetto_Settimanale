// CREO IL VIDEO
let video = document.getElementById("myVideo");

// ASSEGNO IL PULSANTE
let btn = document.getElementById("myBtn");

// CREO LA FUNZIONE PAUSA E PALY E CAMBIO IL TESTO DEL PULSANTE
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// DARKMODE

let toggle = document.querySelector(".bi-toggle-off");

// PRIMA OPZIONE
// toggle.addEventListener("click",clickToggle);

// function clickToggle (){
//   toggle.classList.toggle("bi-toggle-off");
//   toggle.classList.toggle("bi-toggle-on");
// }

// SECONDA OPZIONE
toggle.addEventListener("click", function () {
  toggle.classList.toggle("bi-toggle-off");
  toggle.classList.toggle("bi-toggle-on");
});
