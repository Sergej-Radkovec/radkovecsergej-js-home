describe('array', () => {
  it('length positive test', () => {
    expect([0, 1, 2].length).toBe(3);
  });
  it('concat positive test', () => {
    const a = [1, 2];
    const a2 = [3, 4];
    expect(a.concat(a2)).toEqual([1, 2, 3, 4]);
  });
  it('join positive test', () => {
    const a = [1, 2];
    expect(a.join('')).toBe('12');
  });
  it('push positive test', () => {
    const a = [1, 2];
    expect(a.push(3, 4)).toBe(4);
    expect(a).toEqual([1, 2, 3, 4]);
  });
  it('pop positive test', () => {
    const a = [1, 2, 3];
    expect(a.pop()).toEqual(3);
    expect(a).toEqual([1, 2]);
  });
  it('unshift positive test', () => {
    const a = [1, 2];
    expect(a.unshift(3, 4)).toBe(4);
    expect(a).toEqual([3, 4, 1, 2]);
  });
  it('shift positive test', () => {
    const a = [1, 2, 3];
    expect(a.shift()).toBe(1);
    expect(a).toEqual([2, 3]);
  });
  it('slice positive test', () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(a.slice(2, -1)).toEqual([3, 4, 5]);
    expect(a).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('splice positive test', () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(a.splice(2, 2)).toEqual([3, 4]);
    expect(a).toEqual([1, 2, 5, 6]);
  });
  it('splice positive test 2', () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(a.splice(2, 2, 'a', 'b')).toEqual([3, 4]);
    expect(a).toEqual([1, 2, 'a', 'b', 5, 6]);
  });
  it('reverse positive test', () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(a.reverse()).toEqual([6, 5, 4, 3, 2, 1]);
  });
  it('reverse positive test', () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(a.reverse()).toEqual([6, 5, 4, 3, 2, 1]);
  });
  it('sort positive test', () => {
    const a = ['a', 'c', 'd', 'k', 'b', 'e'];
    expect(a.sort()).toEqual(['a', 'b', 'c', 'd', 'e', 'k']);
  });
});
