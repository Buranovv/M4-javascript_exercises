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
      <button data-id="${array[i].id}" 
      data-bs-toggle="modal"
      data-bs-target="#exampleModal" id="edit-btn" class="btn btn-primary">Edit</button>
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

elCards.addEventListener("click", (evt) => {
  debugger;
  if (evt.target.id === "edit-btn") {
    const id2 = Number(evt.target.dataset.id);

    const elMTit = getElement("#mTit");
    const elMImg = getElement("#mImg");
    const elMPrice = getElement("#mPrice");
    const elMText = getElement("#mText");
    const elMCate = getElement("#mCate");
    const elMRate = getElement("#mRate");
    const elUpdateBtn = getElement("#update-btn");
    const elUpdateImg = getElement("#update-img");

    datas.forEach((element) => {
      if (element.id === id2) {
        elMTit.value = element.title;
        elMImg.value = element.image; 
        elMPrice.value = element.price;
        elMText.value = element.description;
        elMCate.value = element.category;
        elMRate.value = element.rating.rate;
        elUpdateImg.src = element.image;

        elUpdateBtn.addEventListener("click", () => {
          element.title = elMTit.value;
          element.image = elMImg.value;
          element.price = elMPrice.value;
          element.description = elMText.value;
          element.category = elMCate.value;
          element.rating.rate = elMRate.value;
          renderFn(datas, elCards);
        });
      }
    });
  }
});

const elForm = document.querySelector("#form");
const elImg = document.querySelector("#img");
const elTit = document.querySelector("#tit");
const elPrice = document.querySelector("#price");
const elText = document.querySelector("#text");
const elCate = document.querySelector("#cate");
const elRate = document.querySelector("#rate");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elTit.value !== "") {
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
    console.log(newArr);
    datas.push(newArr);
    renderFn(datas, elCards);

    elForm.reset();
  } else {
    alert("Error");
  }
});
