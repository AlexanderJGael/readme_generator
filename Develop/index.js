// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    // README User Input Questions
    {
        type: "input",
        name: "title",
        message: "Enter a title for your README:",
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
        const fileName = 'README.md'

        writeToFile(fileName, data)
    });
};

// Function call to initialize app
init();