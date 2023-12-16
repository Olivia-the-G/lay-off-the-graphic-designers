
const { Square, Circle, Triangle } = require("./shapes");


describe('Square', () => {
  it('should create svg markup for a square', () => {
    const shape = new Square();
    expect(shape.render()).toEqual(`<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`);
  });
});

describe('Circle', () => {
  it('should create svg markup for a circle', () => {
    const shape = new Circle();
    expect(shape.render()).toEqual(`<circle x="${this.x}" y="${this.y}" cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`);
  });
});

describe('Triangle', () => {
  it('should create svg markup for a triangle', () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual(`<polygon x="${this.x}" y="${this.y}" points="${this.points}" fill="${this.fill}" />`);
  });
});

