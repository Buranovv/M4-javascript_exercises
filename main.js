const elCards = document.querySelector(".cards");

function addData(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";

    newCard.innerHTML = `
    <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${element.price}</h6>
          <p class="card-text">${element.description}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
    </div>
    `;
    elCards.appendChild(newCard);
  }
}

addData(data);
