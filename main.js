// let num = Number(prompt("Son kiriting..."));

// for (let i = num; i > 1; i--) {
//   if (i % 5 == 0 || i % -5 == 0) {
//     console.log(i);
//   }
// }

//Homework

//FIZZBUZZ
// let num = 22;

// if (num % 5 === 0 && num % 3 === 0) {
//   console.log("FIZZBUZZ");
// } else if (num % 3 === 0) {
//   console.log("FIZZ");
// } else if (num % 5 === 0) {
//   console.log("BUZZ");
// } else {
//   console.log(num);
// }

const distance = document.querySelector(".input");
const onFood = document.querySelector(".ptext");
const onBike = document.querySelector(".vtext");
const onCar = document.querySelector(".mtext");
const onPlane = document.querySelector(".stext");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  let onFoodHour = distance.value / 3.6;
  let onFoodHourFix = Math.floor(distance.value / 3.6);
  let foMin = Math.floor((onFoodHour - onFoodHourFix) * 60);

  let onBikeHour = distance.value / 20.1;
  let onBikeHourFix = Math.floor(distance.value / 20.1);
  let biMin = Math.floor((onBikeHour - onBikeHourFix) * 60);

  let onCarHour = distance.value / 70;
  let onCarHourFix = Math.floor(distance.value / 70);
  let caMin = Math.floor((onCarHour - onCarHourFix) * 60);

  let onPlaneHour = distance.value / 800;
  let onPlaneHourFix = Math.floor(distance.value / 800);
  let plMin = Math.floor((onPlaneHour - onPlaneHourFix) * 60);

  onFood.innerHTML = `${Math.floor(distance.value / 3.6)} soat ${foMin} minut`;
  onBike.innerHTML = `${Math.floor(distance.value / 20.1)} soat ${biMin} minut`;
  onCar.innerHTML = `${Math.floor(distance.value / 70)} soat ${caMin} minut`;
  onPlane.innerHTML = `${Math.floor(distance.value / 800)} soat ${plMin} minut`;
});
