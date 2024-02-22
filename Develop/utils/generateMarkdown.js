// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseMap = {
    'MIT': 'https://img.shields.io/badge/License-mit-blue'
  };

  return licenseMap[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    'MIT': 'https://opensource.org/license/mit'
  };

  return licenseURLs[license] || '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    'MIT': `MIT License\n\n${renderLicenseLink(license)}\n\n${renderLicenseBadge(license)}`
  }

  return licenseSection[license] || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${data.description}

## Table of Contents
- Installation
- Usage Information
- Contribution Guidelines
- Testing Instructions
-License

## Installation
${data.install}

## Usage Information
${data.usageInfo}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.testInstructions}

## License
${renderLicenseSection(data.license)}`
}

module.exports = generateMarkdown;
