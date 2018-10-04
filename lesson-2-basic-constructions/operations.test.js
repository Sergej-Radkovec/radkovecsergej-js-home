describe('operations with number', () => {
  it('summ', () => {
    expect(2 + 5).toBe(7);
  });
  it('sub', () => {
    expect(6 - 3).toBe(3);
  });
  it('multiplication', () => {
    expect(6 * 3).toBe(18);
  });
  it('Division by zero', () => {
    expect(5 / 0).toBe(Infinity);
  });
  it('remainder of the division', () => {
    expect(8 % 3).toBe(2);
  });
  it('increment', () => {
    let a = 5;
    expect(--a).toBe(4);
  });
  it('preincrement', () => {
    let a = 5;
    expect(a++).toBe(5);
  });
  it('Summ2', () => {
    let a = 5;
    expect(a += 2).toBe(7);
  });
  it('sub2', () => {
    let a = 5;
    expect(a -= 2).toBe(3);
  });
  it('multiplication2', () => {
    let a = 5;
    expect(a *= 2).toBe(10);
  });
  it('division', () => {
    let a = 6;
    expect(a /= 2).toBe(3);
  });
});

describe('operations with string', () => {
  it('summ string', () => {
    expect('тест' + ' ' + 'успешен').toBe('тест успешен');
  });
  it('summ string 2', () => {
    let a = 'гуси';
    expect(a += '-лебеди').toBe('гуси-лебеди');
  });
});

describe('operations with string', () => {
  it('summ string', () => {
    expect('тест' + ' ' + 'успешен').toBe('тест успешен');
  });
  it('summ string 2', () => {
    let a = 'гуси';
    expect(a += '-лебеди').toBe('гуси-лебеди');
  });
});

describe('comparison operators', () => {
  it('less or equal', () => {
    expect(2 >= 4).toBeFalsy();
  });
  it('equal', () => {
    expect('2' == 2).toBeTruthy();
  });
  it('notequal', () => {
    expect('2' != 2).toBeFalsy();
  });
  it('identically', () => {
    expect('2' === 2).toBeFalsy();
  });
});

describe('logical operators', () => {
  it('logical and', () => {
    expect(1 && 2 && null && 3).toBe(null);
  });
  it('logical or', () => {
    expect(5 || 2).toBe(5);
  });
  it('logical not', () => {
    expect(!0).toBeTruthy();
  });
});

describe('type conversion', () => {
  it('parseInt', () => {
    expect(parseInt('2м70см', 10)).toBe(2);
  });
  it('parseInt with string', () => {
    expect(parseInt('тест2', 10)).toBe(NaN);
  });
  it('parseFloat', () => {
    expect(parseFloat(3.8, 10)).toBe(3.8);
  });
  it('parseFloat with isNAN, data is missing', () => {
    expect(isNaN(parseFloat(''))).toBeTruthy();
  });
  it('Number', () => {
    expect(Number('10')).toBe(10);
  });
  it('Number negative', () => {
    expect(Number('1тест')).toBe(NaN);
  });
  it('parseNumber data is missing', () => {
    expect(Number('')).toBe(0);
  });
  it('String', () => {
    expect(String(12.25)).toBe('12.25');
  });
  it('String with number', () => {
    const b = 5;
    expect(typeof (b)).toBe('number');
    expect(typeof (b + '')).toBe('string');
  });
  it('boolean', () => {
    expect(typeof (5)).toBe('number');
    expect(typeof Boolean(5)).toBe('boolean');
  });
});
