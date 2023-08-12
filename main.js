function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCards = getElement(".cards");
const elAdd = getElement("#add");

function renderFn(array, parent) {
  parent.innerHTML = "";

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
      <p class="card-text">${array[i].rating.rate}</p>
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
      const dataSome = datas[i];
      if (dataSome.id !== id) {
        newData.push(dataSome);
      }
    }
    datas = newData;
    renderFn(datas, elCards);
  }
});
renderFn(datas, elCards);

const elForm = getElement("#form");
const elImg = getElement("#img");
const elTit = getElement("#tit");
const elPrice = getElement("#price");
const elText = getElement("#text");
const elCate = getElement("#cate");
const elRate = getElement("#rate");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (
    elImg.value &&
    elTit.value &&
    elPrice.value &&
    elText.value &&
    elCate.value &&
    elRate.value !== ""
  ) {
    console.log("some");
    const newArr = {
      id: datas.length === 0 ? 0 : datas[datas.length - 1].id + 1,
      title: elTit.value,
      price: elPrice.value,
      description: elText.value,
      category: elCate.value,
      image: elImg.value,
      rating: {
        rate: elRate.value,
      },
    };
    datas.push(newArr);
    renderFn(datas, elCards);

    elForm.reset();
  } else {
    alert("Error");
  }
});
