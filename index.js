const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/developer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];

function runApp () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Developer", "Intern", "No more team members are needed."]
      }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Deveoper":
            addDeveloper();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }

    function addManager() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
          }
      
        ]).then(responses => {
          const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNumber);
          teamArray.push(manager);
          createTeam();
        });
      
      }

      function addDeveloper() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "engineerName",
            message: "What is the developer's name?"
          },
    
          {
            type: "input",
            name: "developerId",
            message: "What is the developer's employee ID number?" 
          },
    
          {
            type: "input",
            name: "developerEmail",
            message: "What is the developer's email address?"
          },
    
          {
            type: "input",
            name: "developerGithub",
            message: "What is the developer's GitHub username?"
          }
    
        ]).then(responses => {
          const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub);
          teamArray.push(engineer);
          createTeam();
        });
    
      }

      function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
          },
    
          {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
          }
    
        ]).then(responses => {
          const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
          teamArray.push(intern);
          createTeam();
        });
    
      }
      
      function htmlBuilder () {
        console.log("Team created!")
    
        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    
    }
    
    createTeam();
    
}

runApp();