// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.projectDescription}
  
  ## Table Of Contents
  [Installation])(#installation)
  [Usage])(#Usage)
  [License])(#License)
  [Contributing])(#Contributing)
  [Tests])(#Tests)
  [Questions])(#Questions)
  [Credits])(#Credits)

  ## Installation
  ${data.projectInstallInstructions}

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
