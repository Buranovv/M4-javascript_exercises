function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCards = getElement(".cards");

function renderFn(array, parent) {
  for (let i = 0; i < array.length; i++) {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";

    newCard.innerHTML = `
    <img class="card-img-top" src="${array[i].image}" alt="">
    <div class="card-body">
      <h5 class="card-title">${array[i].title}</h5>
      <p class="card-text">$${array[i].price}</p>
      <p class="card-text">${array[i].description}</p>
      <p class="card-text">${array[i].category}</p>
      <p class="card-text">${array[i].rating}</p>
      <button data-id="${array[i].id}" id="delete-btn" class="btn btn-danger">Delete</button>
    </div>
    `;

    parent.appendChild(newCard);
  }
}
renderFn(datas, elCards);

elCards.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-btn") {
    const id = Number(evt.target.dataset.id);
    const newData = [];
    for (let i = 0; i < datas.length; i++) {
      const element3 = datas[i];
      if (element3.id !== id) {
        newData.push(element3);
      }
    }
    datas = newData;
    renderFn(datas, elCards);
  }
});
renderFn(datas, elCards);
