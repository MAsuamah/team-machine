const generateManager = (manager) => { 
  console.log(manager)
  return `
    <div class="container">
    <div class="row col d-flex justify-content-center">
      <div class="card m-3" style="width: 18rem;" id="man">
        <img class="card-img-top" src="images/manager.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-text">${manager.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.getId()}</li>
          <li class="list-group-item">${manager.getEmail()}</li>
          <li class="list-group-item">${manager.getOfficeNum()}</li>
        </ul>
      </div>
    </div>
  </div>
  `
};

module.exports = mngr => { 

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
        ${generateManager(mngr)}
      </body>
    </html>
  `;
};



