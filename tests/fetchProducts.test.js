require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const mercadoLivreAPI = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função',() => {
    expect(typeof(fetchProducts)).toBe('function')
  });

  it('verifica se ao chamar a funçao fetchProducts com o parametro computador o fetch é chamado',async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('testa se ao chamar a funçao fetchProducts ele usa o endpoint correto ',async () => {
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith(mercadoLivreAPI)
  });

  it('testa se a estrutura de dados retornada pela funçao fetchProducts esta correta',async () => {
    const esperado =await fetchProducts('computador')
    expect(esperado).toEqual(computadorSearch);
  });

  it('espera que um erro seja lançado ao chamar a funçao sem parametros',async () => {
    expect(await fetchProducts()).toBe('You must provide an url')
  });

});
