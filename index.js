const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')
//ARRAY that contains files for styling of the html. The copyFile function will iterate through this array.
const fileArr = [{src: './src/style.css', dist: './dist/style.css'}, {src: './src/charles-forerunner-3fPXt37X6UQ-unsplash.jpg', dist:'./dist/charles-forerunner-3fPXt37X6UQ-unsplash.jpg'}, {src: './src/manager.png', dist: './dist/manager.png'}, {src: './src/engineer.png', dist: './dist/engineer.png'}, {src: './src/intern.png', dist: './dist/intern.png'}]

//Module Imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//Empty array that the entire team will be pushed into. Array will be used as argument to generate html.
teamArray = []

//Prompt info for Manager
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
      message: "What is the Team Manager's email?",
      //Validation Code used from https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
        if (valid) {
            return true;
        } else {
            console.log(".  Please enter a valid email")
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: "What is the Team Manager's office number?"
    }
  ])
  .then(function(man) {
    //Create Manager object using user input and push into team Array which will be used to generate Html
    let manager = new Manager (man.managerName, man.managerId, man.managerEmail, man.managerOffice, 'Manager')
    teamArray.push(manager)
  })
};

//Prompt info for Interns and Engineers
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
      when: ({ addTeam }) => addTeam === 'Engineer',
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
        if (valid) {
            return true;
        } else {
            console.log(".  Please enter a valid email")
            return false;
        }
      }
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
      when: ({ addTeam }) => addTeam === 'Intern',
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
        if (valid) {
            return true;
        } else {
            console.log(".  Please enter a valid email")
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What school is the intern attending?",
      when: ({ addTeam }) => addTeam === 'Intern'
    },
  ])
  .then(teamData => {
    //Create Engineer object if Engineer was selected and push into team Array
    if (teamData.addTeam === 'Engineer') {
      let engineer = new Engineer (teamData.engineerName, teamData.engineerId, teamData.engineerEmail, teamData.engineerGit, 'Engineer')
      teamArray.push(engineer);
      return buildTeam();
    //Create Intern object if Intern was selected and push into team Array
    } else if (teamData.addTeam === 'Intern') {
      let intern = new Intern (teamData.internName, teamData.internId, teamData.internEmail, teamData.internSchool, 'Intern')
      teamArray.push(intern);
      return buildTeam();
    //If finished was selected end function and return teamArray
    } else if (teamData.addTeam === 'Finished') {
      return teamArray
    }
  })
};

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true
      });
    });
  });
};

// copying file
const copyFile = () => {
  fileArr.map(file => {
    return new Promise((resolve, reject) => {
      fs.copyFile(file.src, file.dist, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true
        });
      });
    });
  })
};

//Function Call Chain
addManager()
  .then(buildTeam)
  .then(teamInfo => {
    return generatePage(teamInfo);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  }) 
  .then(copyFileResponse => {
    copyFile(copyFileResponse);
    console.log('Success! Your files have been created! Head to the dist folder to find your materials!')
  })
  .catch(err => {
    console.log(err);
  });

