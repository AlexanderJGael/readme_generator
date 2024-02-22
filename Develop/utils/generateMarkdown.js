const axios = require('axios');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Returns an empty string if the value of 'license' is null
  if (!license) {
    return '';
  }

  let badgeURL = '';
  switch (license) {
    case 'Academic Free License 3.0':
      badgeURL = 'https://img.shields.io/badge/License-academic_free_license%203.0-blue';
      break;
    case 'Creative Commons license family':
      badgeURL = 'https://img.shields.io/badge/License-creative_commons_family-blue';
      break;
    case "Microsoft Public License":
      badgeURL = 'https://img.shields.io/badge/License-microsoft_public-license-blue';
      break;
    case "MIT":
      badgeURL = 'https://img.shields.io/badge/License-mit-blue';
      break;

    default:
      return '';
  }

  return.axios.get(badgeURL, { response: 'arraybiffer' })
    .then(response => {
      // return the badge image data
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching badge:', error);
      return ''; // return an empty string in case of error
    });
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  let licenseURL = '';
  switch (license) {
    case 'Academix Free License 3.0':
      licenseURL = 'https://opensource.org/license/afl-3-0-php'
      break;
    case 'Creative Commons license family':
      licenseURL = 'https://creativecommons.org/share-your-work/cclicenses/'
      break;
    case 'Microsoft Public License':
      licenseURL = 'https://opensource.org/license/ms-pl-html'
      break;
    case 'MIT':
      licenseURL = 'https://opensource.org/license/mit'
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.title}
${answers.description}
        
## Table of Contents
- Installation
- Usage Information
- Contribution Guidelines
- Testing Instructions

## Installation
${answers.install}

## Usage Information
${answers.usageInfo}

## Contribution Guidelines
${answers.contribution}

## Testing Instructions
${answers.testInstructions}`
}

module.exports = generateMarkdown;
