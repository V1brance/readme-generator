// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "WTFPL") {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else if (license == "Creative Commons") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license == "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// So this function doesn't format nice because it is set up in template literal
// and because of this the text inside needs to be left aligned or
// spacing gets weird.
function generateMarkdown(data) {
  let customMarkdown = `${renderLicenseBadge(data.projectLic)}

# ${data.projectTitle} \n

## Description \n
Created with readme-generator from my Github at [V1brance](https://www.github.com/V1brance)
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
\`\`\`
${data.dependencies} \n
\`\`\`

## Usage \n
${data.repoInfo} \n

## License \n
This project is licensced under the ${data.projectLic} license \n
  
## Contributing \n
${data.contributionInfo} \n

## Tests \n
To run tests, run the following command: \n
\`\`\`
${data.tests} \n
\`\`\`

## Questions
If you have any questions about this repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://www.github.com/${
    data.github
  }).
`;
  return customMarkdown;
}

exports.generateMarkdown = generateMarkdown;
