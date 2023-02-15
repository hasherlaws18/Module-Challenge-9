// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.replace('','error');
  return 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Table of Contents
 -[Desription](#description)
 -[Installation](#Installation)
 -[Usage](#usage)
 -[Contribution](#contribution)
 -[Testing](#Test)
 -[Questions](#Username)
 -[Questions](#Email)
 ## Project Description
 ${data.desctiption}
 ## Installation
 ${data.Installation}
 ## Usage
 ${data.usage}
 ## Contribution
 ${data.contribution}
 ## Testing
 ${data.Test}
 ## Questions
 ${data.Username}
 ${data.Email}

`;
}

module.exports = generateMarkdown;
