// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseMap = {
    'MIT': 'https://img.shields.io/badge/LICENSE-MIT-green.png'
  };

  const badgeLink = licenseMap[license] || '';

  if (badgeLink) {
    return `![License Badge](${badgeLink})`;
  } else {
    return '';
  }
};

// function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    'MIT': 'https://opensource.org/license/mit'
  };

  return licenseURLs[license] || '';
};

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    'MIT': `Full license information can be found [here](${renderLicenseLink(license)})`
  }

  return licenseSection[license] || '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
${renderLicenseBadge(data.license)}
\n${data.description}

## Table of Contents
- [Application Demo](#-application-demo)
- [Installation](#-installation)
- [Usage Information](#-usage-information)
- [Contribution Guidelines](#-contribution-guidelines)
- [Testing Instructions](#-testing-instructions)
- [Questions](#questions)
- [License](#license)

## Application Demo

## Usage Information
${data.usageInfo}

## Installation
${data.install}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.testInstructions}

## Questions
For any additional questions, feel free to [reach out via email](${data.email}) or visit [My GitHub profile](https://github.com/${data.github})

## License
${renderLicenseSection(data.license)}`
};


module.exports = generateMarkdown;
