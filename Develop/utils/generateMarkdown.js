// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.projectDescription}
  
  ## Table Of Contents
  Add stuff

  ## Installation
  ${data.projectInstallInstructions}

  ## Usage
  ${data.projectUsage}
  
  ## Contributing
  ${data.projectContribution}

  ## Tests 
  ${data.projectTestInstructions}

  ## Credits
  ${data.projectContributors}

  ## License
  This application is covered under ${data.projectLicense}

  ## Questions
  [Github:](http://github.com/${data.userGithub})
  With additional questions contact me via email: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
