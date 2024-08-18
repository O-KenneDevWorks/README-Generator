// External imports
import inquirer from "inquirer";
import fs from "fs";

// Internal Imports
import generateMarkdown from './utils/generateMarkdown.js';

// List of questions to gather pertinent data from the user
const questions = [{message: "Please Enter Title: ",
                    name: "title",
                    type: "input"},
                   {message: "Please Enter Description: ",
                    name: "description",
                    type: "input"},
                   {message: "Please Enter Installation Instructions: ",
                    name: "installInstructions",
                    type: "input"},
                   {message: "Please Enter Usage Information: ",
                    name: "usage",
                    type: "input"},
                   {message: "Please Enter Contribution Guidelines: ",
                    name: "contribution",
                    type: "input"},
                   {message: "Please Enter Test Instructions: ",
                    name: "test",
                    type: "input"},
                   {message: "Please Enter License: ",
                    name: "license",
                    type: "list",
                    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "N/A"]},
                   {message: "Please Enter GitHub Username: ",
                    name: "githubUsername",
                    type: "input"},
                   {message: "Please Enter Email Address: ",
                    name: "email",
                    type: "input"}
];

// Create the file and write the formatted markdown 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('An error occurred while writing the file:', err);
        } else {
            console.log(`File ${fileName} has been created successfully!`);
        }
    });
}

// The meat and potatoes.  
function init() {
    console.log("Thank you for using the README Generator!\nLets get started!");
    
    // Gather the data for the README
    inquirer.prompt(questions).then(answer => {
        const readmeData = {
            title: answer.title,
            description: answer.description,
            installInstructions: answer.installInstructions,
            usage: answer.usage,
            contribution: answer.contribution,
            license: answer.license,
            test: answer.test,
            githubUsername: answer.githubUsername,
            email: answer.email,
        }
        
        // Now that we have the information gathered, generate a markdown
        const newMarkdown = generateMarkdown(readmeData);

        // write the markdown to the file
        const fileName = `${readmeData.title}.md`;
        writeToFile(fileName, newMarkdown);
        
    }).catch(error => {
        console.error(error);
    });
}


// Function call to initialize app
init();