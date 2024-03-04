// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    // README User Input Questions
    {
        type: "input",
        name: "title",
        message: "Enter a title for your README:",
    },
    {
        type: 'input',
        name: 'demo',
        message: 'link or path to image or video'
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description:",
    },
    {
        type: "input",
        name: "install",
        message: "Enter install information:",
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Enter usage information:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Enter testing instructions:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license:",
        choices: [
            "MIT",
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data has been written to the file successfully')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        const fileName = 'README.md'

        writeToFile(fileName, markdown)
    });
};

// Function call to initialize app
init();