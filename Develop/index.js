// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');

const path = require("path");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
},

{
    type: "input",
    name: "email",
    message: "Please enter your email."
},

{
    type: "input",
    name: "title",
    message: "Please enter the title of this project."
},

{
    type: "input",
    name: "description",
    message: "Please provide a brief description of this project:"
},

{
    type: "list",
    name: "license",
    message: "What license does this project have?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
},

{
    type: "input",
    name: "dependencies",
    message: "Are there any dependencies to install?",
    default: "npm i"
},

{
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
},

{
    type: "input",
    name: "usage",
    message: "What is the proper usage of this repo?"
},

{
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this repo?"
}];

// TODO: Create a function to write README file
function writeReadme(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
.then((inquirerAnswers) => {
    console.log("Your README has been created");
    writeReadme("./utils/exampleREADME.md", generateMarkdown({ ...inquirerAnswers }));
})
}

// Function call to initialize app
init();