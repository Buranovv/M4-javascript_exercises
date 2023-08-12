function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCards = getElement(".cards");

function renderFn(parent) {
  data.forEach((element) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";

    newCard.innerHTML = `
    <img class="card-img-top" src="${element.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">$${element.price}</p>
      <p class="card-text">${element.description}</p>
      <p class="card-text">${element.category}</p>
      <p class="card-text">${element.rating}</p>
      <button data-id="${element.id}" id="delete-btn" class="btn btn-danger">Delete</button>
    </div>
    `;

    parent.appendChild(newCard);
  });
}
renderFn(elCards);

const elCard = document.querySelector(".card");

elCard.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-btn") {
    const id = Number(evt.target.dataset.id);
    let newData = [];
    data.forEach((element2) => {
      if (element2.id === id) {
        console.log(element2.id);
      }
    });
    data = newData;
    renderFn(elCards);
  }
});
renderFn(elCards);
