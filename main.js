const elForm = document.querySelector("#form");
const elToDo = document.querySelector("#todo");
const elDate = document.querySelector("#date");
const elList = document.querySelector(".todoList");

let toDoList = [
  {
    id: 0,
    title: "Nma gap",
    date: 23,
    isDone: true,
  },
];

function loader(array, parent) {
  parent.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const newToDo = document.createElement("div");
    newToDo.className =
      "todoItem d-flex align-items-center justify-content-between";
    newToDo.innerHTML = `
    <div>
    <h1 class="todo__title ${
      array[i].isDone ? "text-decoration-line-through" : ""
    }">${array[i].title}</h1>
    <p class="todo__date">${array[i].date}</p>
    </div>
    <div class="d-flex gap-5">
    
    </div>
    `;
    parent.appendChild(newToDo);
  }
}
loader(toDoList, elList);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (elToDo.value && elDate.value !== "") {
    elList.innerHTML = "";
    const newTodoList = {
      id: toDoList.length,
      title: elToDo.value,
      date: elDate.value,
      isDone: false,
    };
    toDoList.push(newTodoList);
    loader(toDoList, elList);

    elForm.reset();
  } else {
    alert("Error");
  }
});
