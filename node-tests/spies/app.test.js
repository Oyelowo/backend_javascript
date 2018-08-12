const expect = require('expect');

describe('', () => {
  it('should call the spy correctly', ()=>{
      let spy =expect.createSpy();
      spy();
      expect(spy).toHaveBeenCalled();
  });
})

