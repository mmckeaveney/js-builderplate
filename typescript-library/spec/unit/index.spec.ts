import hello from 'index.ts';

describe('this is a test', () => {
  it('should work', () => {
    expect(hello(1)).toEqual(1); 
  })
})
