let startingMinutes = document.getElementById("timerInput").value;

let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if(seconds < 0){
    document.getElementById('countdown').style.color = "Transparent";
    document.getElementById('Transparent').style.display = "none";
  }

  else if(seconds < 10){
    seconds = '0' + seconds;
  }

  else if(minutes <= 1){
    document.getElementById('countdown').style.display = "none";
  }


  else if(minutes <= 0 && seconds <= 0){
    document.getElementById('submitBtn').click();
  }


  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}