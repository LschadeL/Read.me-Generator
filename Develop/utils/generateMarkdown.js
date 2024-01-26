// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license-📛)`
    )
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {
  if (license !== "None") {
    return (
   `## License 📛 

    Copyrighted @ ${license}. All rights reserved.

    Licensed with ${license}'s license.`
    )
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}


  ## Description

  ${data.description}

  ## Table of Contents

  * [Installations](#installations)

  * [Usage](#usage)
  
  * [Contributors](#contributors)

  * [Test](#tests)

  * [Questions](#questions)

  ${licenseLink(data.license)}
  
  ## Installations

  To install dependencies run:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage

  ${data.usage}

  ${licenseSection(data.license)}

  ## Contributors

  ${data.contributors}

  ## Tests

  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  For additional questions please contact me at the email provided below. 

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
`;
}

module.exports = generateMarkdown;
