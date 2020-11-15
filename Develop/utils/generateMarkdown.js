// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.projectDescription}
  
  ## Table Of Contents
  1. [Installation])(#installation)
  2. [Usage])(#Usage)
  3. [License])(#License)
  4. [Contributing])(#Contributing)
  5. [Tests])(#Tests)
  6. [Questions])(#Questions)
  7. [Credits])(#Credits)

  ## Installation
  <a name = "installation">${data.projectInstallInstructions} </a>

  ## Usage
  ${data.projectUsage}
  
  ## License
  This application is covered under ${data.projectLicense}
  
  ## Contributing
  ${data.projectContribution}

  ## Tests 
  ${data.projectTestInstructions}

  ## Questions
  [Github:](http://github.com/${data.userGithub})
  With additional questions contact me via email: ${data.userEmail}

  ## Credits
  ${data.projectContributors}
`;
}

module.exports = generateMarkdown;
