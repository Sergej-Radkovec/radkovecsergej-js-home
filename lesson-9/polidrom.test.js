const isPol = require('./polidrom');

describe('isPolidrom', () => {
  it('Anna is a polidrom', () => {
    expect(isPol('Anna')).toBeTruthy();
  });

  it('А роза упала на лапу Азора - is a polidrom', () => {
    expect(isPol('А роза упала на лапу Азора')).toBeTruthy();
  });

  it('Вася is not a polidrom', () => {
    expect(isPol('Вася')).toBeFalsy();
  });

  it('1234321 is a polidrom', () => {
    expect(isPol('1234321')).toBeTruthy();
  });

  it('123456 is not a polidrom', () => {
    expect(isPol('123456')).toBeFalsy();
  });
});
