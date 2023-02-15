// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
    {
    type: 'input',
    name: 'project title',
    message: 'What is your project title',
    },
    {
    type: 'input',
    name: 'description of project',
    message: 'What is the description',
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'What do you need to do to install your project',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What sort of usages will your project be used for',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'list the collaborators you are using',
    },
    {
    type: 'input',
    name: 'Test',
    message: 'What is your project title',
    },
    {
    type: 'list',
    name: 'License',
    message: 'what license will your project have',
    choices: [
        'MIT',
        'Apache Liscense',
        'GNU General Public',
    ],
    },
    {
    type: 'input',
    name: 'Username',
    message: 'What is your Githhub Username',
    },
    {
    type: 'input',
    name: 'Email Address',
    message: 'What is your Email Adress',
    },])
];

// TODO: Create a function to write README file
function WriteReadME(fileName, data) {
    fs.WriteReadME(fileName, data, err => {
        if(err) throw new Error(err);
        console.log("Read is Generated")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
