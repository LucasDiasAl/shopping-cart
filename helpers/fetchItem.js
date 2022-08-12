const fetchItem = async (id) => {
  try {
    if (!id) {
      throw new Error('You must provide an url');
    }
  const idProduto = await fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((resultado) => resultado.json());
  return idProduto;
  } catch (err) {
    return err.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
