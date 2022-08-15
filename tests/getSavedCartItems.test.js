const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao executar getSavedCartItems com o parametro `cartItems` a funçao localStorage.getItem deve ser usada', () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalled();
  });
  it('ao executar getSaveCartItems com o parametro `cartItem` a funçao localStorage.getItem deve ser usado com o parametro `cartItem`', () => {
    getSavedCartItems('cartItems')
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
