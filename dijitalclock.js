//? Her saniyede ekranı değiştirecek bir fonksiyon yazalım.
setInterval(timer, 1000);
setInterval(dater, 1000);
setInterval(day, 1000);

//! timer'in içeriğini tanımlayalım.
function timer() {
  const date = new Date();
  document.querySelector(".time").innerHTML = date.toLocaleTimeString("en-TR");
}

//! dater'in içeriğini tanımlayalım.
function dater() {
  document.querySelector(".date").innerHTML = `${new Date().getDate()}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}`;
}

//! day'in içeriğini tanımlayalım.
function day() {
  let gunler = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.querySelector(".day").innerHTML = gunler[new Date().getDay()];
}

// -----------**** Kronometre ****-----------
console.log(new Date());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getDay());

console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleTimeString("en-TR"));

window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
