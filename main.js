const elName = document.querySelector(".name");
const elRelationship = document.querySelector(".relationship");
const elPhone = document.querySelector(".phone");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");

class NewCard {
  addCard(parent, form) {
    if (elName.value && elRelationship.value && elPhone.value !== "") {
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.innerHTML = `
      <h4>${elName.value}</h4>
      <p class="relation">${elRelationship.value}</p>
      <p id="phone">${elPhone.value}</p>
      `;
      parent.appendChild(newCard);
      form.reset();
    } else {
      alert("Error");
    }
  }
}

const card = new NewCard();

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  card.addCard(elCards, elForm);
});
