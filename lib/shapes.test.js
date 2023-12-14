const createShape = require("./shapes");


describe('createShape', () => {

  describe('square', () => {
    it('should create a blue square', () => {
      const shape = new Square();
      expect(shape.render()).toEqual(`<rect x="50" y="20" width="100" height="100" fill="${data.shape_colour}" />`);
    })

    })
  })




