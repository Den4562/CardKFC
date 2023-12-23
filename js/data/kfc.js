import products from "./kfc_data.js";
console.log(products);

const productContainer = document.querySelector(".js-kfc");

const makeProductCart = ({ name, description, price, image }) => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");

  const imageEl = document.createElement("img");
  imageEl.classList.add("img_menu");
  imageEl.src = image;

  const nameEl = document.createElement("h1");
  nameEl.textContent = name;

  const descEl = document.createElement("p");
  descEl.textContent = description;

  const costElement = document.createElement("div");
  costElement.classList.add("cost");

  const costBlock = document.createElement("div");
  costBlock.classList.add("block");

  const costImageEl = document.createElement("img");
  costImageEl.src = "./img/pencil.png";
  costImageEl.classList.add("pencil_icon");

  const costText = document.createElement("p");
  costText.textContent = price;

  const cartImageEl = document.createElement("img");
  cartImageEl.src = "./img/cart.png";
  cartImageEl.classList.add("cart_icon");
  costBlock.append(cartImageEl);
  costElement.append(costBlock, costImageEl, costText, cartImageEl);
  productEl.append(imageEl, nameEl, descEl, costElement);
  return productEl;
};

const element = products.map(makeProductCart);
productContainer.append(...element);
