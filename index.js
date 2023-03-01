// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// An array of questions for user input
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Team Managers name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Team Managers ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Team Managers Email?',
  },
  {
    type: 'input',
    name: 'office',
    message: 'What is the Team Managers office number?',
  }
]
const mainQuestions = [
  {
    type: 'list',
    name: 'teamMember',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', 'Intern', 'No more team members']
  }
]

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Engineers name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Engineers ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Engineers Email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the Engineers github?',
  }
]

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Interns name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Interns ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Interns Email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the Interns school?',
  }
]

var employeesList = [];

function getMainAnswers() {

  inquirer.prompt(mainQuestions)
    .then((answers) => {
      // Call appropriate function based on what user wants to do next
      if (answers.teamMember == "No more team members") {
        createHTML()

      } else if (answers.teamMember == "Engineer"){
        getEngineerAnswers()
      } else if (answers.teamMember == "Intern"){
        getInternAnswers()
      }




    })
    .catch((error) => {
      console.log(error)
    })
}
getManagerAnswers()
// Gets answers for the HTML using inquirer
function getManagerAnswers() {
  inquirer.prompt(managerQuestions)
    .then((answers) => {
      const anEmployee = new Manager(answers.id, answers.name, answers.email, answers.office);
      employeesList.push(anEmployee); // add to array
      getMainAnswers(); // ask new employee or done creating team
    })
    .catch((error) => {
      console.log(error)
    })
}

// Gets answers for the readme using inquirer
function getEngineerAnswers() {
  inquirer.prompt(engineerQuestions)
    .then((answers) => {
      const anEmployee = new Engineer(answers.id, answers.name, answers.email, answers.github);
      employeesList.push(anEmployee); // add to array
      getMainAnswers(); // ask new employee or done creating team
    })
    .catch((error) => {
      console.log(error)
    })
}

function getInternAnswers() {
  inquirer.prompt(internQuestions)
    .then((answers) => {
      const anEmployee = new Intern(answers.id, answers.name, answers.email, answers.school);
      employeesList.push(anEmployee); // add to array
      getMainAnswers(); // ask new employee or done creating team
    })
    .catch((error) => {
      console.log(error)
    })
}




function createHTML() {
  // for loop over all created employees employeesList and make HTML
  // then save as HTML file
  var html = "<link rel='stylesheet' href='index.css'></link>"
  html += "<h1>Team Members</h1>"
  for (let index = 0; index < employeesList.length; index++) {
    const anEmployee = employeesList[index];
    html += "<p>"+anEmployee.getRole()+ ": " +anEmployee.getName()+"</p>";
    html += "<p>ID:"+anEmployee.getId()+"</p>";
    html += "<div>Email:<a href=\"mailto:"+anEmployee.getEmail()+"\" target=\"_blank\">"+anEmployee.getEmail()+"</a></div>";
    if(anEmployee.getRole() === "Manager"){
      html += "<p>Office Number:"+anEmployee.getOfficeNumber()+"</p>";
    } else if(anEmployee.getRole() === "Engineer"){
      html += "</br></br><div>GitHub Username:<a href=\"https://github.com/"+anEmployee.getGitHub()+"\" target=\"_blank\">"+anEmployee.getGitHub()+"</a></div>";
    } else if(anEmployee.getRole() === "Intern"){
      html += "<p>School:"+anEmployee.getSchool()+"</p>";
    }
  }


  fs.writeFile("index.HTML", html, function (err) {
    if (err) {
      console.log("Unable to save file")
    } else {
      console.log("Success: new index.HTML file has been created in your current folder")
    }
  })

}




