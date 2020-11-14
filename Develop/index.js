//The required imports
const fs = require("fs");
const inquirer = require("inquirer");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "project-title",
    message: "what is your project title?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a title");
        return false;
      }
    },
  },
];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
const promptUser = () => {
  return inquirer.prompt(questions);
};
function init() {}

// function call to initialize program
init();

// questions
/*
 Project Title 
 description
 installation instructions
 usage information
 contribution guidelines
 Test instructions
choose license from list

github username
email

Make functioning links

*/
