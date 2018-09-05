describe('Number', () => {
  it('Number', () => {
    expect(typeof (5)).toBe('number');
  });
  it('NaN', () => {
    expect('тест' * 5).toBe(NaN);
  });
});

describe('String', () => {
  it('String positive', () => {
    expect(typeof ('Строка')).toBe('string');
  });
  it('String negative', () => {
    expect(Number('Строка')).toBe(NaN);
  });
});

describe('Boolean', () => {
  it('True test', () => {
    expect(5 > 4).toBeTruthy();
  });
  it('False test', () => {
    expect(5 < 4).toBeFalsy();
  });
});

describe('Null with Undefined', () => {
  it('Null', () => {
    expect(null).toBeNull();
  });
  it('undefined', () => {
    expect(undefined).toBeUndefined();
  });
  it('Null compare', () => {
    expect(null > 0).toBeFalsy();
    expect(null == 0).toBeFalsy();
    expect(null >= 0).toBeTruthy();
  });
  it('Undafined compare', () => {
    expect(undefined > 0).toBeFalsy();
    expect(undefined === 0).toBeFalsy();
    expect(undefined >= 0).toBeFalsy();
  });
  it('Compare Undafined with null', () => {
    expect(undefined == null).toBeTruthy();
  });
});

test('Object', () => {
  const test = { name: 'Вася' };
  expect(test.name).toBe('Вася');
});
