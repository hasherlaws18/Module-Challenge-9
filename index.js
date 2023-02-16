// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title',
    },
    {
    type: 'input',
    name: 'description',
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
    message: 'What is being used to run your project',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'list the collaborators you are using',
    },
    {
    type: 'input',
    name: 'Test',
    message: 'What is used to test your project ',
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
    name: 'Email',
    message: 'What is your Email Adress',
    },
];

// TODO: Create a function to write README file
function WriteReadME(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw new Error(err);
        console.log("Readme is Generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(Response => {
        WriteReadME('./dist/README.md', generateMarkdown(Response))
        console.log(Response)
    })
};

// Function call to initialize app
init();
