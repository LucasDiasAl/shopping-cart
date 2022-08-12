require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

it('fetchItem deve ser uma funçao',() => {
  expect(typeof(fetchItem)).toBe('function');
});
it('fetchItem deve chamar o fetch ao ser usada',async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toBeCalled();
});
it('fetchItem ao ser chamada com o argumento `MLB1615760527` a estrutura de dados deve ser igual a variavel `item` ', async () => {
  const esperado = await fetchItem('MLB1615760527');
  expect(esperado).toEqual(item);
});
it('Ao chamar o fetchItem sem argumentos deve sair um erro com a messagem `You must provide an url`',async () => {
  try {
   const test =  await fetchItem();
   return test
  }
  catch(err){
    expect(err).toBe(new Error('You must provide an url'));
  }
});
});
