const fs = require('fs');
const path = require('path');
const template = path.join(__dirname, '..', 'src', 'template.html');
const newFile = path.join(__dirname, '..', 'teamprofile.html');
const genHTML = (obj) => {
    fs.readFile(template, (err, data) => {
        if (err) throw err;
        const end = data.split(`<div id='placeholder'></div>`)
        const page = [end[0], genManagers(obj.team.managers), genEngineers(obj.team.engineers), genEmployees(obj.team.employees), genInterns(obj.team.interns), end[1]]
        page.join('');
        fs.writeFile(newFile, page, (err) => {
            if (err) throw err;
            console.log(`Team profile page written to ${newFile} !`);
        });
    })
};
const genManagers = (list) => {
    list
        .map((index) => {
            return `\n`
        })
        .unshift(`\n<div id='managers' class='row'>`)
        .push(`\n</div>`)
        .join('');
    return list
};
const genEngineers = (list) => {
    list
        .map((index) => {
            return `\n\t`
        })
        .unshift(`\n<div id='engineers' class='row'>`)
        .push(`\n</div>`)
        .join('');
    return list
};
const genEmployees = (list) => {
    list
        .map((index) => {
            return `\n\t`
        })
        .unshift(`\n<div id='employees' class='row'>`)
        .push(`\n</div>`)
        .join('');
    return list
};
const genInterns = (list) => {
    list
        .map((index) => {
            return `\n\t`
        })
        .unshift(`\n<div id='interns' class='row'>`)
        .push(`\n</div>`)
        .join('');
    return list
};

module.exports = genHTML;