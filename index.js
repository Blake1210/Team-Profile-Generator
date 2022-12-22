// team profile
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/Intern.js");
// modules
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
//generates team
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
          }

          else if (nextPrompt === "Engineer") {
            addEngineer();
          }

          else if (nextPrompt === "Intern") {
            addIntern();
          }

           else {
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
            message: "Enter team manager name:"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "Enter manager id:"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "Enter manager email:"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter manager office number:"
          }
      
        ]).then(managerInput => {
          const {managerName, managerId, managerEmail, managerOfficeNumber } = managerInput
          const manager = new Manager (managerName, managerId, managerEmail, managerOfficeNumber)
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
    
        ]).then(engineerInput => {
          const {engineerName, engineerId, engineerEmail, engineerGithub } = engineerInput
          const engineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub)
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
    
        ]).then(internInput => {
          const {internName, internId, internEmail, internSchool } = internInput
          const intern = new Engineer (internName, internId, internEmail, internSchool)
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