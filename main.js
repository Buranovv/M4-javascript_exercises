const elInput = document.querySelector("#input");
const elBtn = document.querySelector("#btn");
const red = document.querySelector(".div1");
const blue = document.querySelector(".div2");

function red1() {
  red.style.border = "thick solid black";
}
function red1None() {
  red.style.border = "none";
}
function blue1() {
  blue.style.border = "thick solid black";
}
function blue1None() {
  blue.style.border = "none";
}
elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let elInputValue = Number(elInput.value);
  if (elInputValue < 10) {
    blue1None();
    red1();
  } else if (elInputValue >= 10 && elInputValue < 20) {
    red1None();
    blue1();
  } else {
    red1None();
    blue1None();
    alert("Noto`g`ri raqam kiritildi!");
  }
});
