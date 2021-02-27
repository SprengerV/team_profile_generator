const Employee = require("../lib/Employee.js");

test("Cant set an employee's name", () => {
    const name = "Brendan";
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com", 138);
    expect(employee.name).toEqual(name);
});
test("Can set an employee's ID", () => {
    const id = 1;
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com", 138);
    expect(employee.id).toEqual(id);
});
test("Can set an employee's email", () => {
    const email = "b.francis@sprengerv.com";
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com", 138);
    expect(employee.email).toEqual(email);
});
test("Can get an employee's name", () => {
    const name = "Brendan"
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com", 138);
    expect(employee.getName()).toEqual(name)
});
test("Can get an employee's ", () => {

});