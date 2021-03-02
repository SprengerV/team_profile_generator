const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const Employee = require(path.join(__dirname, 'Employee.js'));
const Manager = require(path.join(__dirname, 'Manager.js'));
const Engineer = require(path.join(__dirname, 'Engineer.js'));
const Intern = require(path.join(__dirname, 'Intern.js'));
const genHTML = require(path.join(__dirname, 'genHTML.js'))

const save = path.join(__dirname, '..', 'src', 'teams.json');

const questions = [
    {
        name: 'cont',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add a new team member.', 'Generate HTML.']
    },
    {
        when: (answers) => {
            return answers.cont === 'Add a new team member.'
        },  
        name: 'name',
        type: 'input',
        message: 'What is their name?'
    },
    {
        when: (answers) => {
            return answers.cont === 'Add a new team member.'
        },
        name: 'email',
        type: 'input',
        message: 'Please enter their email address.'
    },
    {
        when: (answers) => {
            return answers.cont === 'Add a new team member.'
        },
        name: 'id',
        type: 'number',
        message: 'Please enter their ID number.'
    },
    {
        when: (answers) => {
            return answers.cont === 'Add a new team member.'
        },
        name: 'role',
        type: 'list',
        message: 'What role does this person fulfill?',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
        when: (answers) => {
            return answers.role === 'Manager'
        },
        name: 'offNo',
        type: 'number',
        message: 'What is their office number?'
    },
    {
        when: (answers) => {
            return answers.role === 'Engineer'
        },
        name: 'github',
        type: 'input',
        message: 'Please enter their Github user name.'
    },
    {
        when: (answers) => {
            return answers.role === 'Intern'
        },
        name: 'school',
        type: 'input',
        message: 'What school do they attend?'
    }
]
const project = {
    name: null,
    team: {    
        managers: [],
        engineers: [],
        employees: [],
        interns: []
    }
};

const getName = () => {
    inquirer
        .prompt([
            {
                name: 'get',
                type: 'input',
                message: 'What is your team/project\'s name?'
            }
        ])
        .then((ans) => {
            project.name = ans.get;
            ask();
        })
}
const ask = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const name = answers.name;
            const id = answers.id;
            const email = answers.email;
            const base = [name, id, email];
            if (answers.cont === 'Generate HTML.') {
                if (project.team.managers.length === 0 && project.team.employees.length === 0 && project.team.interns.length === 0 && project.team.engineers.length === 0) {
                    console.log('Couldn\'t generate HTML because you haven\'t entered any team members!');
                    ask();
                } else {
                    saveTeam(project);
                    genHTML(project);
                };
            } else {
                switch (answers.role) {
                    case 'Employee':
                        const employee = new Employee(...base);
                        project.team.employees.push(employee);
                        break
                    case 'Manager':
                        const manager = new Manager(...base, answers.offNo);
                        project.team.managers.push(manager);
                        break
                    case 'Engineer':
                        const engineer = new Engineer(...base, answers.github);
                        project.team.engineers.push(engineer);
                        break
                    case 'Intern':
                        const intern = new Intern(...base, answers.school);
                        project.team.interns.push(intern);
                        break
                };
                ask();
            };
        });
};
const saveTeam = (obj) => {
    fs.readFile(save, (err, data) => {
        if (err) throw err;
        const list = JSON.parse(data);
        list.push(obj);
        fs.writeFile(save, JSON.stringify(list), (err) => {
            if (err) throw err;
            console.log('Team saved for later!');
        });
    });
};

module.exports = getName;