// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Give a brief description of the project",
  "What license do you want for your project?",
];

function collectData() {
  let projectTitle;
  let projectDescription;
  inquirer
    .prompt([
      {
        name: "projectTitle",
        message: questions[0],
      },
      {
        name: "projectDesc",
        message: questions[1],
      },
      {
        type: "list",
        name: "projectLic",
        message: questions[2],
        choices: ["MIT", "Open-Source", "Open Commons"],
      },
    ])
    .then((answers) => {
      console.info(answers);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  collectData();
}

// Function call to initialize app
init();
