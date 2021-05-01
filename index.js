const inquirer = require('inquirer');
const fs = require('fs');

//Module Imports
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');


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
  })
};

const buildTeam = teamMembers => {
  if (!teamMembers.team) {
    teamMembers.team = [];
  }
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
    teamMembers.team.push(teamData);
    if(teamData.addTeam === 'Finished') {
      return teamMembers;
    } else {
      return buildTeam(teamMembers);
    }
  })
};

addManager()
  .then(buildTeam)
