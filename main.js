function getElement(element, parent = document) {
  return parent.querySelector(element);
}
const elCards = getElement(".cards");
const elCard = getElement(".card");

function renderFn(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";

    newCard.innerHTML = `
    <img class="card-img-top" src="${element.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <p class="card-text">${element.description}</p>
      <p class="card-text">${element.category}</p>
      <p class="card-text">${element.rating}</p>
      <a href="#" class="btn btn-danger">Delete</a>
    </div>
    `;
    elCards.appendChild(newCard);
  }
}

renderFn(data);
