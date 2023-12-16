const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// link shapes.js file
const { Square, Circle, Triangle } = require('./lib/shapes');

// validate user input 
function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please provide some kind of input to answer the question.";
  }
};

// second validation for the text input
function valiChar(value) {
  if (value.length > 3) {
    return "You can only enter up to 3 characters. Please try again:";
  }
};

// validate function for colours 
function valiColour(value) {
  const colourKeyword = '/^(red|blue|green|yellow|orange|purple|pink|brown|black|white)$/i';

  const hexCode = '/^#[0-9a-fA-F]{6}$/';

  if (colourKeyword.test(value) || hexCode.test(value)) {
    return true
  } else {
    return "Please enter a valid colour keyword or hexidecimal code:";
  }
};

// command line prompts
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters for your logo:',
    validate: validateInput, valiChar
  },
  {
    type: 'input',
    name: 'colour',
    message: 'What colour do you want your logo to be? Enter colour keyword or hexadecimal code:',
    validate: validateInput, valiColour
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape from the list:',
    choices: [
      'Square',
      'Circle',
      'Triangle',
    ],
    validate: validateInput
  },
  {
    type: 'input',
    name: 'shape_colour',
    message: 'What colour do you want the shape to be? Enter colour keyword or hexadecimal code:',
    validate: validateInput, valiColour
  }
];

// create svg file using the data
function makeSVGFile(fileName, content) {
  fs.writeFile(fileName, content, err => {
    if (err) {
      console.log(err);
    }
  })
};

// initialze app
function init() {
  inquirer.prompt(questions).then((data) => {
    // using the shapes classes and user input to render the svg shape 
    let svgShape;
    if (data.shape === "Square") {
      svgShape = new Square(75, 25, 150, 150, data.shape_colour);
    } else if (data.shape === "Circle") {
      svgShape = new Circle(0, 0, 150, 100, 80, data.shape_colour);
    } else {
      svgShape = new Triangle(0, 0, '150, 18 265, 182 35, 182', data.shape_colour);
    };

    svgShape = svgShape.render();

    // assign variables to other choices to be used in renderSVG()
    const svgText = `${data.text}`;
    const svgColour = `${data.colour}`;

    // create content for the svg file
    function renderSVG() {

      // if statement is only to address the different text positioning needed for the triangle option
      if (data.shape === 'Triangle') {
        const svg = `
        <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        
          <rect width="100%" height="100%" fill="${svgColour}" />
        
          ${svgShape}
        
          <text x="148" y="138" font-size="60" text-anchor="middle" fill="white">${svgText}</text>
        
        </svg>
              `;

        return svg;

      } else {
        const svg = `
        <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        
          <rect width="100%" height="100%" fill="${svgColour}" />
        
          ${svgShape}
        
          <text x="148" y="123" font-size="60" text-anchor="middle" fill="white">${svgText}</text>
        
        </svg>
              `;

        return svg;
      }
    };

    // assign return value of renderSVG() to a variable so it can be used as a param
    const SVG = renderSVG();

    // see data object for debugging purposes
    console.log(JSON.stringify(data, null, " "));

    // call function to create file
    makeSVGFile("./examples/logo.svg", SVG);
    console.log("Generated logo.svg");
  })
};

init();
