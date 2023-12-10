const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// link shapes.js file
const shapes = require('./lib/shapes');

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
function makeSVGFile(fileName, data) {
  fs.writeFile(fileName, shapes.js(data), err => {
    if (err) {
      console.log(err);
    }
  })
};

// initialze app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    makeSVGFile("./examples/logo.svg", data);
  })
};

init();