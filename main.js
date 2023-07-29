// let num = Number(prompt("Son kiriting..."));

// for (let i = num; i > 1; i--) {
//   if (i % 5 == 0 || i % -5 == 0) {
//     console.log(i);
//   }
// }

//Homework

//FIZZBUZZ
let num = 22;

if (num % 5 === 0 && num % 3 === 0) {
  console.log("FIZZBUZZ");
} else if (num % 3 === 0) {
  console.log("FIZZ");
} else if (num % 5 === 0) {
  console.log("BUZZ");
} else {
  console.log(num);
}
