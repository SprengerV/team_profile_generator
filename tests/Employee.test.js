const path = require("path")
const Employee = require(path.join(__dirname, "..", "lib", "Employee.js"));

test("Cant set an employee's name", () => {
    const name = "Brendan";
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.name).toEqual(name);
});
test("Can set an employee's ID", () => {
    const id = 1;
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.id).toEqual(id);
});
test("Can set an employee's email", () => {
    const email = "b.francis@sprengerv.com";
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.email).toEqual(email);
});
test("Can set an employee's role", () => {
    const role = "Employee";
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.role).toEqual(role);
});
test("Can get an employee's name", () => {
    const name = "Brendan"
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.getName()).toEqual(name)
});
test("Can get an employee's ID", () => {
    const id = 1;
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.getId()).toEqual(id);
});
test("Can get an employee's email", () => {
    const email = "b.francis@sprengerv.com";
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.getEmail()).toEqual(email);
});
test("Can get an employee's role", () => {
    const role = "Employee"
    const employee = new Employee("Brendan", 1, "b.francis@sprengerv.com");
    expect(employee.getRole()).toEqual(role);
});