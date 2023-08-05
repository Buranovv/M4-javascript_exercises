const elForm = document.querySelector("#form");
const elToDo = document.querySelector("#todo");
const elDate = document.querySelector("#date");
const elList = document.querySelector(".todoList");

const toDoList = [1, 2, 3, 4];

function loader(array) {
  for (let i = 0; i < array.length; i++) {
    return array[i];
  }
}
console.log(loader(toDoList));

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   if (elToDo.value && elDate.value !== "") {
//   }
// });
