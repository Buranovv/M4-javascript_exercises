const elForm = document.querySelector("#form");
const elToDo = document.querySelector("#todo");
const elDate = document.querySelector("#date");
const elList = document.querySelector(".todoList");

const toDoList = [];

function loader(array, parent) {
  for (let i = 0; i < array.length; i++) {
    const newToDo = document.createElement("div");
    newToDo.className = "todoItem";
    newToDo.innerHTML = `
    <h1 class="todo__title">${array[i].title}</h1>
    <p class="todo__date">${array[i].date}</p>
    <input class="done" type="text" placeholder="Bajarilganmi?" />
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
      id: elDate.value,
      title: elToDo.value,
      date: elDate.value,
    };
    toDoList.push(newTodoList);

    loader(toDoList, elList);
    elForm.reset();
  } else {
    alert("Error");
  }
});
