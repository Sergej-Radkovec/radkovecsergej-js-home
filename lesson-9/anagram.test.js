const anClean = require('./anagram');

describe('anClean', () => {
  const arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
  it('Clear array of anagrams', () => {
    expect(anClean(arr)).toEqual(['воз', 'киборг', 'корсет']);
  });
});
