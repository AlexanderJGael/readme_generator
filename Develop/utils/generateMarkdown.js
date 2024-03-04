// TODO: Create a function that returns a license badge based on which license is passed in
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
- [Installation)[#install]
- [Usage Information](#usage)
- [Contribution Guidelines](#contribute)
- [Testing Instructions](#test)
- [Questions](#query)
- [License](#license)

## Installation {#install}
${data.install}

## Usage Information {#usage}
${data.usageInfo}

## Contribution Guidelines {#contribute}
${data.contribution}

## Testing Instructions {#test}
${data.testInstructions}

## Questions {#query}
${data.github}

For any addittional questions or feedback you can reach me at ${data.email}

## License {#license}
${renderLicenseSection(data.license)}`
};


module.exports = generateMarkdown;
