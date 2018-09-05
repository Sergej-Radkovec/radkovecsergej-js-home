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
