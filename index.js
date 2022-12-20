const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");
//const { nextTick } = require("process");


teamArray = [];

function startInquirer () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members."]
      }]).then(function (userResponse) {
        const nextPrompt = userResponse.addEmployeePrompt; {
          if (nextPrompt === "Manager") {
            addManager();
          };

          if (nextPrompt === "Engineer") {
            addEngineer();
          };

          if (nextPrompt === "Intern") {
            addIntern();
          }

          if (nextPrompt === "No more team members") {
            htmlBuilder()
          }
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
            message: "What is the manager's employee ID?"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
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

      function addEngineer() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
          },
    
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID?" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
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
            message: "What is the intern's employee ID?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
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

startInquirer();