// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = ["Please Enter Title",
                   "Please Enter Description",
                   "Please Enter Installation Instructions",
                   "Please Enter Usage Information",
                   "Please Enter Contribution Guidelines",
                   "Please Enter Test Instructions",
                   "Please Enter GitHub Username",
                   "Please Enter Email Address"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("Thank you for using the README Generator!\nLets get started!");
    
    // Lets loop through questions to gather information
    for (let question = 0; question < questions; question++) {
        inquirer.prompt([{
            type: "input",
            message: questions[question],
            name: "response"
        }]).then(answer => {
            console.log(answer);
        })
    }
}

// Function call to initialize app
init();


// List of Data we need to collect
/*
Title - What is the title of your project?
Description - Please enter a description for your project?
Table of Contents - Auto-generate based on contents that user inputs
Installation - Please provide your installation guide
Usage - Provide instructions and examples for use
Credits - List your collaborators, if any
License - Please enter License
##Optionals##
Badges
Features
How to Contribute
Tests
*/

/*
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
    Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
    License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

*/