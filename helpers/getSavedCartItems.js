const getSavedCartItems = (chave) => {
  const itemsSalvos = localStorage.getItem(chave);
  return itemsSalvos;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
