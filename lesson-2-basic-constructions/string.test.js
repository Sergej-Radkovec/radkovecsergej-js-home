describe('string', () => {
  it('length positive test', () => {
    expect('три'.length).toBe(3);
  });
  it('length negative test', () => {
    const l = 25;
    expect(l.length).toBeUndefined();
  });
  it('charAt positive test', () => {
    expect('test'.charAt(2)).toBe('s');
  });
  it('charAt negative test', () => {
    expect('test'.charAt(5)).toBe('');
  });
  it('substr positive test', () => {
    expect('positive test'.substr(3, 7)).toBe('itive t');
  });
  it('substr negative test', () => {
    expect('negative test'.substr(20, 25)).toBe('');
  });
  it('slice positive test', () => {
    expect('positive test'.slice(3, 10)).toBe('itive t');
  });
  it('split positive test', () => {
    expect('test'.split('')).toEqual(['t', 'e', 's', 't']);
  });
  it('toLowerCase positive test', () => {
    expect('TeSt'.toLowerCase()).toBe('test');
  });
  it('toUpperCase positive test', () => {
    expect('TeSt'.toUpperCase()).toBe('TEST');
  });
  it('indexOf positive test', () => {
    expect('test te'.indexOf('e')).toBe(1);
  });
  it('indexOf negative test', () => {
    expect('test te'.indexOf('g')).toBe(-1);
  });
  it('lastIndexOf positive test', () => {
    expect('test te'.lastIndexOf('e')).toBe(6);
  });
  it('lastIndexOf negative test', () => {
    expect('test te'.lastIndexOf('g')).toBe(-1);
  });
  it('replace positive test', () => {
    expect('test'.replace('e','E')).toBe('tEst');
  });
});