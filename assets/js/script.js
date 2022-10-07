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
