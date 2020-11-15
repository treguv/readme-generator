// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.projectDescription}
  
  ## Table Of Contents
  1. [Installation](#installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  7. [Credits](#Credits)

  ## Installation
  <a name = "installation">${data.projectInstallInstructions} </a>

  ## Usage
  <a name = "Usage">${data.projectUsage}</a>
  
  ## License
  <a name = "License">
  This application is covered under ${data.projectLicense}
  </a>
  
  ## Contributing
  <a name = "Contributing">
  ${data.projectContribution}
  </a>

  ## Tests 
  <a name = "Tests">
  ${data.projectTestInstructions}
  </a>

  ## Questions
  <a name = "Questions">
  [Github:](http://github.com/${data.userGithub})
  With additional questions contact me via email: ${data.userEmail}
  </a>

  ## Credits
  <a name = "Credits">
  ${data.projectContributors}
  </a>
`;
}

module.exports = generateMarkdown;
