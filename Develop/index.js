// Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    // README Title
    {
        type: "input",
        name: "title",
        message: "Enter a title for your README:",
    },
    {
        type: "input",
        name: "description",
        mesasge: "Enter a description:",
    },
    {
        type: "input",
        name: "install",
        mesasge: "Enter install information:",
    },
    {
        type: "input",
        name: "usageInfo",
        mesasge: "Enter usage information:",
    },
    {
        type: "input",
        name: "contribution",
        mesasge: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "testInstructions",
        mesasge: "Enter testing instructions:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license:",
        choices: [
            "Academic Free License 3.0",
            "Artistic License 2.0",
            "Creative Commons license family",
            "Creative Commons Attribution 4.0",
            "Do What the F*ck You Want to Public License",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0"
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();