const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
        <div class="card-body">
          <h5 class="card-title">${manager.getRole()}</h5>
          <p class="card-text">
          
          <p><strong>Employee ID: </strong>${manager.getId()}</p>
          <p><strong>Email: </strong>${manager.getEmail()}</p>
          <p><strong>Office #: </strong>${manager.getOfficeNumber()}</p>
          
          </p>
        </div>
      </div>`;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-body">
          <h5 class="card-title">${engineer.getRole()}</h5>
          <p class="card-text">
          
          <p><strong>Employee ID: </strong>${engineer.getId()}</p>
          <p><strong>Email: </strong>${engineer.getEmail()}</p>
          <p><strong>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
          
          </p>
        </div>
      </div>`;
    };

    const generateIntern = intern => {
        return `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-body">
          <h5 class="card-title">${intern.getRole()}</h5>
          <p class="card-text">
          
          <p><strong>Employee ID: </strong>${intern.getId()}</p>
          <p><strong>Email: </strong>${intern.getEmail()}</p>
          <p><strong>School: </strong>${intern.getSchool()}</p>
          
          </p>
        </div>
      </div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(engineer => engineer.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading ">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

