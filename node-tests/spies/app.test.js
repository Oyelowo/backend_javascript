const expect = require('expect');

describe('', () => {
  it('should call the spy correctly', ()=>{
      let spy =expect.createSpy();
      spy('Oyelowo', 24);
      expect(spy).toHaveBeenCalledWith('Oyelowo', 24);
    //   expect(spy).toHaveBeenCalled();
  });
});

