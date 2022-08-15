const saveCartItems = (items) => {
  const arrayLocal = [];
  const itemsCarrinho = items;
  for (let i = 0; i < itemsCarrinho.length; i += 1) {
    const tmp = [itemsCarrinho[i].innerText];
    arrayLocal.push(tmp);
  }
  localStorage.setItem('cartItems', JSON.stringify(arrayLocal));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
