// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseMap = {
    'MIT': 'https://img.shields.io/badge/License-mit-blue'
  };

  return licenseMap[license] || '';

  // Check if the license is provided and exists in the mapping
  if (license && licenseMap[license]) {
    return licenseMap[license]; // Return the badge URL for the license
  } else {
    return ''; // Return an empty string if the license is not found or not provided
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    'MIT': 'https://opensource.org/license/mit'
  };

  return licenseURLs[license] || '';

  if (license && licenseURLs[license]) {
    return licenseMap[license]; // return the badge url for the license
  } else {
    return ''; // Return an empty string if the license is not found or is not provided
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    'MIT': 'Copyright <YEAR> <COPYRIGHT HOLDER>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  }

  return licenseSection[license] || '';

  if (license && licenseURLs[license]) {
    return licenseMap[license]; // return the badge url for the license
  } else {
    return ''; // Return an empty string if the license is not found or is not provided
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.description}
## Table of Contents
- Installation
- Usage Information
- Contribution Guidelines
- Testing Instructions
## Installation
${data.install}
## Usage Information
${data.usageInfo}
## Contribution Guidelines
${data.contribution}
## Testing Instructions
${data.testInstructions}`
}

module.exports = generateMarkdown;
