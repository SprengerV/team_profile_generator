const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const start = require(path.join(__dirname, '..', 'index.js'));
const generateHTML = require(path.join(__dirname, 'genHTML.js'));

const save = path.join(__dirname, '..', 'src', 'teams.json');

const askTeams = ([choices, list]) => {
    inquirer
        .prompt([
            {
                name: 'which',
                type: 'list',
                message: 'Which project would you like to generate a webpage for?',
                choices: choices
            }
        ])
        .then((ans) => {
            const poss = list.filter((obj) => {
                return obj.name === ans.which
            });
            generateHTML(poss[0]);
        });
};
const getSaved = () => {
    fs.readFile(save, (err, data) => {
        if (err) throw err;
        const list = JSON.parse(data);
        const choices = list.map((x) => {
            return x.name;
        });
        if (list.length === 0) {
            console.log('You don\'t have any previously saved teams.')
            start();
        } else {
            askTeams([choices, list]);
        };
    });
};
module.exports = getSaved;