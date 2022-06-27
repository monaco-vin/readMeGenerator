// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "") return "";
  return `[![${license.name}](https://img.shields.io/apm/l/atomic-design-ui.svg?)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "") return "";
  return `(${license.url})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

  ### Description
  ${data.description}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### Contribution
  ${data.contribution}
  ### Test
  ${data.test}

`;
}

module.exports = generateMarkdown;
