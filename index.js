const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')

//Module Imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

teamArray = []

const addManager = () => {
   return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the Team Manager's name?"
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the Team Manager's employee Id?"
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the Team Manager's email?"
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: "What is the Team Manager's office Id?"
    }
  ])
  .then(function(man) {
    let manager = new Manager (man.managerName, man.managerId, man.managerEmail, man.managerOffice, 'Manager')
    console.log(manager)
    teamArray.push(manager)
  })
};

const buildTeam = () => {

  return inquirer.prompt([
    {
      type: 'list',
      name: 'addTeam',
      message: "Would you like to add an Engineer, Intern, or are you finished building your team?",
      choices: ['Engineer','Intern', 'Finished']
    },
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the engineer's name?",
      when: ({ addTeam }) => addTeam === 'Engineer'
    }, 
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the engineer's Id?",
      when: ({ addTeam }) => addTeam === 'Engineer'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the engineer's email?",
      when: ({ addTeam }) => addTeam === 'Engineer'
    },
    {
      type: 'input',
      name: 'engineerGit',
      message: "What is the engineer's GitHub username?",
      when: ({ addTeam }) => addTeam === 'Engineer'
    },
    {
      type: 'input',
      name: 'internName',
      message: "What is the intern's name?",
      when: ({ addTeam }) => addTeam === 'Intern'
    }, 
    {
      type: 'input',
      name: 'internId',
      message: "What is the intern's Id?",
      when: ({ addTeam }) => addTeam === 'Intern'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the intern's email?",
      when: ({ addTeam }) => addTeam === 'Intern'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What school is the intern attending?",
      when: ({ addTeam }) => addTeam === 'Intern'
    },
  ])
  .then(teamData => {
    if (teamData.addTeam === 'Engineer') {
      let engineer = new Engineer (teamData.engineerName, teamData.engineerId, teamData.engineerEmail, teamData.engineerGit, 'Engineer')
      console.log(engineer)
      teamArray.push(teamData);
      return buildTeam();
    } else if (teamData.addTeam === 'Intern') {
      let intern = new Intern (teamData.internName, teamData.internId, teamData.internEmail, teamData.internSchool, 'Intern')
      console.log(intern)
      teamArray.push(teamData);
      return buildTeam();
    } else if (teamData.addTeam === 'Finished') {
      console.log(teamArray)
      return teamArray
    }
  })
};



addManager()
  .then(buildTeam)
  .then(teamInfo => {
    return generatePage(teamInfo);
  }) 

