function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCards = getElement(".cards");
const elCard = document.querySelector(".card");

function renderFn() {
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

    elCards.appendChild(newCard);
  });
}
renderFn();

elCard.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-btn") {
    const id = Number(evt.target.dataset.id);
    const newData = [];
    data.forEach((element2) => {
      if (element2.id !== id) {
        console.log("salom");
        newData.push(element2);
      }
    });
  }
  data = newData;
  renderFn();
});
renderFn();
