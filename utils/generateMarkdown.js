// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let customMarkdown = `
  
  # ${data.projectTitle} \n

  ## Description \n
  ${data.projectDesc} \n
  ## Table of Contents \n
  * [Installation](#installation) \n
  * [Usage](#usage) \n
  * [License](#license) \n
  * [Contributing](#contributing) \n
  * [Tests](#tests) \n
  * [Questions](#questions) \n

  ## Installation \n
  To install necessary dependencies, run the following command: \n
  \`\`\` \n
  ${data.dependencies} \n
  \`\`\` \n

  ## Usage \n
  ${data.repoInfo} \n

  ## License \n
  This project is licensced under the ${data.projectLic} license \n
  
  ## Contributing \n
  ${data.contributionInfo} \n

  ## Tests \n
  To run tests, run the following command: \n
  \`\`\` \n
  ${data.tests} \n
  \`\`\` \n

  ## Questions
  If you have any questions about this repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://www.github.com/${data.github}).
  `;
  console.log(customMarkdown);
  return customMarkdown;
}

exports.generateMarkdown = generateMarkdown;
