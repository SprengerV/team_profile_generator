const inquirer = require('inquirer');
const path = require('path');
const getName = require(path.join(__dirname, 'lib', 'app.js'));
const getSaved = require(path.join(__dirname, 'lib', 'getSaved.js'));



const start = () => {
    inquirer
        .prompt([
            {
                name: 'what',
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Generate a webpage for a new team.', 'Generate a webpage for a team I\'ve already saved.']
            }
        ])
        .then((ans) => {
            if (ans.what === 'Generate a webpage for a new team.') getName();
            else if (ans.what === 'Generate a webpage for a team I\'ve already saved.') getSaved();        
        });
};

console.log('Welcome to Team Project Generator!');
start();

module.exports = start;