// parent class to pass on properties to child classes
class Shape {
  constructor(x, y, fill) {
    this.x = x
    this.y = y
    this.fill = fill
  };

  // prevent using only the shape class without a subclass
  render() {
    throw new Error('render method can only be implemented in subclasses');
  };
};

// subclasses - square
class Square extends Shape {
  constructor(x, y, height, width, fill) {
    super(x, y, fill)
    this.height = height
    this.width = width
  };

  // create syntax to be used in the svg file
  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
  };
};

// subclasses - circle
class Circle extends Shape {
  constructor(x, y, cx, cy, r, fill) {
    super(x, y, fill)
    this.cx = cx
    this.cy = cy
    this.r = r
  };

  render() {
    return `<circle x="${this.x}" y="${this.y}" cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;  
  };
};

// subclasses - triangle
class Triangle extends Shape {
  constructor(x, y, points, fill) {
    super(x, y, fill)
    this.points = points
  };

  render() {
    return `<polygon x="${this.x}" y="${this.y}" points="${this.points}" fill="${this.fill}" />`;  
  };
};

// export classes 
module.exports = { Shape, Square, Circle, Triangle };
