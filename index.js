const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      name: "license",
      message: "What color MIT License?",
      choices: [`green`, `blue`, `black`],
    },
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your GitHub username?", 
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the name of this project?",
      name: "project",
    },
    {
      type: "input",
      message: "Descibe what the application does?",
      name: "description",
    },
    {
      type: "input",
      message:
        "What all needs to be installed and how do you install it, so that the program can run?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use the application?",
      name: "usage",
    },
    {
      type: "input",
      message: "What's the link to the NPM website?",
      name: "npmLink",
    },
    {
      type: "input",
      message: "Were there any other collaborators?",
      name: "collaborators",
    },
  ])
  .then((response) => {
    // console.log('Success!');

    if ((response.license === "blue")) {
      var licenseString = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
    } else if ((response.license === "green")) {
      var licenseString = `![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)`;
    } else {
      var licenseString = `![GitHub license](https://img.shields.io/badge/license-MIT-black.svg)`;
    }

    // console.log(licenseString);

    const readmeString = `
    
${licenseString}

#${response.project}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${response.installation}

## Usage
${response.usage}

## Credits
Node Package Manager: [NPM](${response.npmLink})

## Credits
${response.collaborators}

## Questions
GitHub: https://github.com/${response.github}

Email: ${response.email}

MIT License

Copyright (c) 2023 ${response.name} (AKA - ${response.github})

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

    `;

    fs.writeFile("genREADME.md", readmeString, (err) =>
      err ? console.error(err) : console.log("File written successfully!")
    );
  });
