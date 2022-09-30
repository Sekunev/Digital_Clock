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
