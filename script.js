// const { price } = require("./mocks/item");

const bigSection = document.querySelector('.items');
const cartSection = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const refactor = async (callback) => {
  const results = await callback;
  const dadosRefa = results.length > 1
    ? results.map(({ id, title, thumbnail, price }) =>
      ({ sku: id, name: title, image: thumbnail, salePrice: price }))
    : { sku: results.id, name: results.title, salePrice: results.price };
  return dadosRefa;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

const itemsList = async () => {
  const items = await refactor(fetchProducts('computador'));
  for (let i = 0; i < items.length; i += 1) {
    bigSection.appendChild(createProductItemElement(items[i]));
  }
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = ({ target }) => {
  cartSection.removeChild(target);
  saveCartItems(document.querySelectorAll('li'));
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const itemShop = async ({ target: { parentNode } }) => {
  const itemId = getSkuFromProductItem(parentNode);
  const item = await refactor(fetchItem(itemId));
  const createdLi = createCartItemElement(item);
  cartSection.appendChild(createdLi);
  saveCartItems(document.querySelectorAll('li'));
};
itemsList().then(() => {
  const addButton = document.getElementsByClassName('item__add');
  for (let i = 0; i < addButton.length; i += 1) {
    addButton[i].addEventListener('click', itemShop);
  }
});

window.onload = () => {
  if (localStorage.cartItems) {
    const itemsSalvos = JSON.parse(getSavedCartItems('cartItems'));
    itemsSalvos.forEach(([texto]) => {
      const li = document.createElement('li');
      li.className = 'cart__item';
      li.innerText = texto;
      li.addEventListener('click', cartItemClickListener);
      cartSection.appendChild(li);
    });
  }
};