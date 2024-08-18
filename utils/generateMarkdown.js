// Create a badge for the license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let modifiedLicense = license.replace(/ /g, "_");
  console.log(modifiedLicense);

  return `![License: ${license}](https://img.shields.io/badge/License-${modifiedLicense}-fuchsia.svg)`
}

// Create a link for the license
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "GNU AGPLv3":
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case "GNU GPLv3": 
      return `https://choosealicense.com/licenses/gpl-3.0/)`;
    case "GNU LGPLv3": 
      return `https://choosealicense.com/licenses/lgpl-3.0/`;
    case "Mozilla Public License 2.0": 
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    case "Apache License 2.0": 
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case "MIT License": 
      return `https://choosealicense.com/licenses/mit/`;
    case "Boost Software License 1.0":
      return `https://choosealicense.com/licenses/bsl-1.0/`;
    case "The Unlicense": 
      return `https://choosealicense.com/licenses/unlicense/`;
    case "N/A":
      return `This project is not licensed for public use.`;
  }
}

// Generate the license section
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `This project is licensed under the ${license} - see [${renderLicenseLink(license)}](${renderLicenseLink(license)}) for details.`;
}

// return a formatted string to be used as the markdown
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)


## Installation
${data.installInstructions}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If you have questions, you may reach out to me at ${data.email} and please check out this and other projects on my [GitHub](https://github.com/${data.githubUsername})
`;
}

export default generateMarkdown;
