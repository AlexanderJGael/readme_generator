// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
            "Academic Free License 3.0",
            "Artistic License 2.0",
            "Creative Commons license family",
            "Creative Commons Attribution 4.0",
            "Do What the F*ck You Want to Public License",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0"
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
    inquirer.prompt(questions).then((answers) => {
        const fileName = 'README.md'
        const data = `# ${answers.title}\n${answers.description}
        \n\n## Table of Contents
        \n- Installation
        \n- Usage Information
        \n- Contribution Guidelines
        \n- Testing Instructions
        \n\n## Installation\n${answers.install}
        \n\n## Usage Information\n${answers.usageInfo}
        \n\n## Contribution Guidlines\n${answers.contribution}
        \n\nTesting Instructins\n${answers.testInstructions}`
        writeToFile(fileName, data)
    });
};

// Function call to initialize app
init();