const fetchProducts = async (searchItem) => {
  try {
    if (searchItem === undefined) {
      throw new Error('You must provide an url');
    }
      const dados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchItem}`);
      const refacDados = await dados.json();
      return refacDados;
  } catch (err) {
    return err.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
