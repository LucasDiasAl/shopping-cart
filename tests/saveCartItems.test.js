const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Ao usar a funçao saveCartItems com os parametros localStorage.setItem deve ser usado', () => {
    saveCartItems(['bla','ble'])
    expect(localStorage.setItem).toBeCalled();
  });
  it('Ao usar a funçao saveCartItems com os parametros localStorage.setItem deve ser usado com dois parametros, `cartItems` e o paramentro usado pela funçao', () => {
    saveCartItems(['bla','ble'])
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '[[null],[null]]')
  });
});
