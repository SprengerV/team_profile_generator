const fs = require('fs');
const path = require('path');

const genHTML = (obj) => {
        const page = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/edf84cf333.js" crossorigin="anonymous"></script>
<title>${obj.name}</title>
</head>
<body style="background-color: lightgrey;">
    <div class="container">
        <div class="row text-center">
            <h1 id="title">${obj.name}</h1>
        </div>
        <div id="managers" class="row d-flex justify-content-center">
        ${genManagers(obj.team.managers)}
        </div>
        <div id="engineers" class="row d-flex justify-content-center">
        ${genEngineers(obj.team.engineers)}
        </div>
        <div id="employees" class="row d-flex justify-content-center">
        ${genEmployees(obj.team.employees)}
        </div>
        <div id="interns" class="row d-flex justify-content-center">
        ${genInterns(obj.team.interns)}
        </div>
        </div>
    </div>
</body>
</html>
        `
        const newFile = path.join(__dirname, '..', 'pages', `${obj.name.split(' ').join('')}.html`);
        fs.writeFile(newFile, page, (err) => {
            if (err) throw err;
            console.log(`Team profile page written to ${newFile} !`);
        });
};
const genManagers = (list) => {
    const html = list
        .map((index) => {
            return `
            <div class="card col-3 mx-3">
                <h4 class="ms-auto me-auto">Manager</h4>
                <i class="fas fa-3x fa-user-tie ms-auto me-auto"></i>
                <h3>${index.name}</h3>
                <a href="email:${index.email}">${index.email}</a>
                <p class="ms-auto me-0">Office #${index.officeNumber}</p>
            </div>
            `
        })
    const done = html.join('');
    return done
};
const genEngineers = (list) => {
    const html = list
        .map((index) => {
            return `
            <div class="card col-3 mx-3">
                <h4 class="ms-auto me-auto">Engineer</h4>
                <i class="fas fa-3x fa-laptop-code ms-auto me-auto"></i>
                <h3>${index.name}</h3>
                <a href="email:${index.email}">${index.email}</a>
                <p class="ms-auto me-0">Github: <a href="https://github.com/${index.github}/" target="_blank">${index.github}</a></p>
            </div>
            `
        })
    const done = html.join('');
    return done
};
const genEmployees = (list) => {
    const html = list
        .map((index) => {
            return `
            <div class="card col-3 mx-3">
                <h4 class="ms-auto me-auto">Employee</h4>
                <i class="far fa-3x fa-id-badge ms-auto me-auto"></i>
                <h3>${index.name}</h3>
                <a href="email:${index.email}">${index.email}</a>
            </div>
        `
        })
    const done = html.join('');
    return done
};
const genInterns = (list) => {
    const html = list
        .map((index) => {
            return `
            <div class="card col-3 mx-3">
                <h4 class="ms-auto me-auto">Intern</h4>
                <i class="fas fa-3x fa-graduation-cap ms-auto me-auto"></i>
                <h3>${index.name}</h3>
                <a href="email:${index.email}">${index.email}</a>
                <p class="ms-auto me-0">${index.school}</p>
            </div>
            `
        })
    const done = html.join('');
    return done
};

module.exports = genHTML;