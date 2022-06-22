// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const markdown = generateMarkdown(answers);
      writeToFile(markdown);
    })
    .catch((error) => {
      console.warn(error);
    });
}

// Function call to initialize app
init();
