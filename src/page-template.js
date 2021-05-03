const generateTeam = teamArr => { 
//Return specific styling and properties based on team 'role'
  return `
    ${teamArr
      .filter(({ role }) => role === 'Manager')
      .map(({ name, id, email, role, officeNumber }) => {
        return `
        <div class="container">
          <div class="row col d-flex justify-content-center">
            <div class="card m-3" style="width: 18rem;" id="man">
              <img class="card-img-top" src="manager.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-text">${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${id}</li>
              <li class="list-group-item">Office Number: ${officeNumber}</li>
              <li class="list-group-item"><a href="mailto:${email}" class="badge rounded-pill bg-dark">Email: ${email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row col d-flex justify-content-center">
      `;
    }).join('')} 
    

    ${teamArr
      .filter(({ role }) => role === 'Engineer')
      .map(({ name, role, id, email, github }) => {
        return `
        <div class="card m-3" style="width: 18rem;">
          <img class="card-img-top" src="engineer.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-text">${role}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item"><a href="https://github.com/${github}" class="badge rounded-pill bg-secondary" target="_blank">GitHub: ${github}</a></li>
            <li class="list-group-item"><a href="mailto:${email}" class="badge rounded-pill bg-dark">Email: ${email}</a></li>
          </ul>
        </div>
      `;
    }).join('')}
    
    ${teamArr
      .filter(({ role }) => role === 'Intern')
      .map(({ name, role, id, email, school }) => {
        return `
        <div class="card m-3" style="width: 18rem;">
          <img class="card-img-top" src="intern.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-text">${role}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">School: ${school}</li>
            <li class="list-group-item"><a href="mailto:${email}" class="badge rounded-pill bg-dark">Email: ${email}</a></li>
          </ul>
        </div>
      `;
    }).join('')}
  `  
}

module.exports = finalTeam => { 
//Return entire completed HTML page
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
          ${generateTeam(finalTeam)}
          </div>
        </div>
      </body>
    </html>
  `;
}; 



