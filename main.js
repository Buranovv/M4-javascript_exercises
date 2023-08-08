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
    <div >
    <h1 class="todo__title ${
      array[i].isDone ? "text-decoration-line-through" : ""
    }">${array[i].title}</h1>
    <p class="todo__date">${array[i].date}</p>
    </div>
    <img data-id="${array[i].id}" id="delete-btn" width="30" src="edit.png" />
    `;
    parent.appendChild(newToDo);
  }
}
loader(toDoList, elList);

elList.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-btn") {
    const id = Number(evt.target.dataset.id);
    const newTodos = [
      {
        id: toDoList.length === 0 ? 0 : toDoList[toDoList.length - 1].id + 1,
        title: elToDo.value,
        date: elDate.value,
        isDone: false,
      },
    ];
    for (let i = 0; i < toDoList.length; i++) {
      const toDos = toDoList[i];
      if (toDos.id !== id) {
        newTodos.push(toDos);
      }
    }
    toDoList = newTodos;
    loader(toDoList, elList);
    console.log(newTodos.id);
  }
});
loader(toDoList, elList);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (elToDo.value && elDate.value !== "") {
    elList.innerHTML = "";
    const newTodoList = {
      id: toDoList.length === 0 ? 0 : toDoList[toDoList.length - 1].id + 1,
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
