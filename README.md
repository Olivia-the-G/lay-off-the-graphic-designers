# Lay Off the Graphic Designers [![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square&link=https%3A%2F%2Fopensource.org%2Flicense%2Fmit%2F)](https://opensource.org/license/mit/)

## Description 
Here is an easy-to-use CLA to allow users to **design a simple logo in SVG**. 

The user will be given a **few simple prompts** and then the application will **create an SVG file** containing a **logo with all the user's selected criteria**.

This project was an opportunity for me to practice writing tests for my own code. I also refined my understanding of how to use scripts and dependancies in the package.json file.

## 📘Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
*In order to install this project...*

1. Clone repository to your computor. In your terminal, run:

        git clone git@github.com:Olivia-the-G/lay-off-the-graphic-designers.git

2. Install dependencies with:

        npm install

## Usage
Using this application is simple. Open the repository in a code editor like VSCode and then in your terminal run:

    node index.js

Answer all of the prompts and then an SVG file will automatically be created using all of the selected criteria. You can then find the file in the path:

    ./examples/logo.svg

## Demo


https://github.com/Olivia-the-G/lay-off-the-graphic-designers/assets/130778807/6de54fd1-4a9b-4eb1-87a7-0ced3b9f6afb



## License
This application is under the MIT license. To see full license details, [click here](https://opensource.org/license/mit/)

## Tests
Tests for Shapes.js 

```
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
```

In order to run tests in the shapes.test.js file, open the terminal and run:

    npm test

## Questions

If you have any questions regarding this project, **please contact me here**:
- GitHub: [Olivia-the-G](https://github.com/Olivia-the-G)
- Email Address: olivia.a.gowan@gmail.com
