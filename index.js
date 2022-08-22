// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
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
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use the application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the protocals for contibuting work?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test your application?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: [
      {
        name: "Apache License 2.0",
        value: {
          name: "Apache License 2.0",
          url: "https://opensource.org/licenses/Apache-2.0",
        },
      },
      {
        name: "GNU General Public License v3.0",
        value: {
          name: "GNU General Public License v3.0",
          url: "https://www.gnu.org/licenses/gpl-3.0",
        },
      },
      {
        name: "MIT License",
        value: {
          name: "MIT License",
          url: "https://opensource.org/licenses/MIT",
        },
      },
      {
        name: "No License",
        value: "",
      },
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(data, title) {
  fs.writeFileSync(title + ".md", data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const markdown = generateMarkdown(answers);
      writeToFile(markdown, answers.title);
    })
    .catch((error) => {
      console.warn(error);
    });
}

// Function call to initialize app
init();
