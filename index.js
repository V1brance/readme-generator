// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMark = require("./utils/generateMarkdown");
console.log(genMark.generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  "What is your GitHub username?",
  "What is your email?",
  "What is the title of your project?",
  "Give a brief description of the project:",
  "What license do you want for your project?",
  "What commands are needed to install dependencies?",
  "What commands are needed to run tests?",
  "What should other users know about the repo?",
  "Enter your message on contribution:",
];

function collectData() {
  inquirer
    .prompt([
      {
        name: "github",
        message: questions[0],
      },
      {
        name: "email",
        message: questions[1],
      },
      {
        name: "projectTitle",
        message: questions[2],
      },
      {
        name: "projectDesc",
        message: questions[3],
      },
      {
        type: "list",
        name: "projectLic",
        message: questions[4],
        choices: ["MIT", "Open-Source", "Community License", "GNU GPLv3"],
      },
      {
        name: "dependencies",
        message: questions[5],
        default: "npm i",
      },
      {
        name: "tests",
        message: questions[6],
        default: "npm test",
      },
      {
        name: "repoInfo",
        message: questions[7],
      },
      {
        name: "contributionInfo",
        message: questions[8],
      },
    ])
    .then((answers) => {
      let userResponse = {
        github: answers.github,
        email: answers.email,
        projectTitle: answers.projectTitle,
        projectDesc: answers.projectDesc,
        projectLic: answers.projectLic,
        dependencies: answers.dependencies,
        tests: answers.tests,
        repoInfo: answers.repoInfo,
        contributionInfo: answers.contributionInfo,
      };
      genMark.generateMarkdown(userResponse);
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
