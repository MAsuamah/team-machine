
const generateManager = ({managerName, managerId, managerEmail, managerOffice}) => {
  return `
    <div class="container">
    <div class="row col d-flex justify-content-center">
      <div class="card m-3" style="width: 18rem;" id="man">
        <img class="card-img-top" src="images/manager.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${managerName}</h5>
          <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${managerId}</li>
          <li class="list-group-item">${managerEmail}</li>
          <li class="list-group-item">${managerOffice}</li>
        </ul>
      </div>
    </div>
  </div>
  `
}

const generateTeam = teamArr => {
  return `
  <div class="container">
    <div class="row col d-flex justify-content-center">
    ${teamArr
      .filter(({addTeam}) => addTeam === 'Engineer')
      .map(({engineerName, engineerId, engineerEmail, engineerGit}) => {
        return `
          <div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="images/engineer.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${engineerName}</h5>
              <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${engineerId}</li>
              <li class="list-group-item">${engineerEmail}</li>
              <li class="list-group-item">${engineerGit}</li>
            </ul>
          </div>
        `;
      })
      .join('')}
    
      ${teamArr
        .filter(({addTeam}) => addTeam === 'Intern')
        .map(({internName, internId, internEmail, internSchool}) => {
          return `
            <div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="images/engineer.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${internName}</h5>
                <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${internId}</li>
                <li class="list-group-item">${internEmail}</li>
                <li class="list-group-item">${internSchool}</li>
              </ul>
            </div>
          `;
        })
        .join('')}
      </div>
    </div>
  `;
}


module.exports = templateData => { 
  const {managerInfo, teamInfo} = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css">
    </head>
      <body>
        <div class="hero-image">
          <div class="hero-text">
            <h1>Team-Tastic</h1>
            <p>The Team Machine</p>
          </div>
        </div>
        ${generateManager(managerInfo)}
        ${generateTeam(teamInfo)}
      </body>
    </html>
  `
}