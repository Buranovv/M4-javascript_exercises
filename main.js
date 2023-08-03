const elInput = document.querySelector("#input");
const elBtn = document.querySelector("#btn");
const red = document.querySelector(".div1");
const blue = document.querySelector(".div2");

function red1() {
  red.style.border = "thick solid black";
  blue.style.border = "none";
}
function blue1() {
  blue.style.border = "thick solid black";
  red.style.border = "none";
}
elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let elInputValue = Number(elInput.value);
  if (elInputValue < 10) {
    red1();
  } else if (elInputValue >= 10 && elInputValue < 20) {
    blue1();
  } else {
    alert("Noto`g`ri raqam kiritildi!");
  }
});
