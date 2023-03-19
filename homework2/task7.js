let time = new Date();
let currentTime = time.getHours();
console.log(currentTime);

if (currentTime > +23 || currentTime <= 5) {
  alter("Good night");
} else if (currentTime >= 5 || currentTime <= 11) {
  alert("Good Morning");
} else if (currentTime >= 11 || currentTime <= 17) {
  alert("Good Day");
} else if (currentTime >= 17 || currentTime <= 23) {
  alert("Good Evening");
}
