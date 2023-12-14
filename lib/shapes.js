


class Shape {
  constructor(x, y, fill) {
    this.x = x
    this.y = y
    this.fill = fill
  };

  render() {
    throw new Error('render method can only be implemented in subclasses');
  };
};

class Square extends Shape {
  constructor(height, width) {
    super()
    this.height = height
    this.width = width
  };

  render(data) {
    return `<rect x="50" y="20" width="100" height="100" fill="${data.shape_colour}" />`;
  };
};

class Circle extends Shape {
  constructor(cx, cy, r) {
    super()
    this.cx = cx
    this.cy = cy
    this.r = r
  };

  render(data) {
    return `<circle x="" y="" cx="150" cy="100" r="80" fill="${data.shape_colour}"`;
  };
};


// create a function for rendering the svg shape using the data
function createShape(data) {
  if (data.shape === Square) {
    const logoShape = new Square(80, 80);
  }
  
  console.log(logoShape);
}

module.exports = createShape;