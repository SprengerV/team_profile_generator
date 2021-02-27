const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, offNo)  {
        super(name, id, email);
        this.officeNumber = offNo;
        this.role = 'Manager';
    };
    getOfficeNum() {
        return this.officeNumber;
    }; 
};

module.exports = Manager;