describe('Math', () => {
  it('pi with sin, cos, tan', () => {
    const pi = Math.PI;
    expect(Math.round(pi)).toBe(3);
    expect(Math.ceil(pi)).toBe(4);
    expect(Math.floor(pi)).toBe(3);
    expect(Math.sin(pi / 2)).toBe(1);
    expect(Math.cos(pi)).toBe(-1);
    expect(Math.round(Math.tan(pi / 4))).toBe(1);
  });
  it('max', () => {
    expect(Math.max(5, 3)).toBe(5);
  });
  it('max negative', () => {
    expect(Math.max(5, 'string')).toBe(NaN);
  });
  it('min', () => {
    expect(Math.min(5, 3)).toBe(3);
  });
  it('min negative', () => {
    expect(Math.min(5, 'string')).toBe(NaN);
  });
  it('sqrt', () => {
    expect(Math.sqrt(4)).toBe(2);
  });
  it('sqrt negative', () => {
    expect(Math.sqrt(-4)).toBe(NaN);
  });
  it('random', () => {
    const random = Math.random();
    expect(random > 0 && random < 1).toBeTruthy();
  });
});
