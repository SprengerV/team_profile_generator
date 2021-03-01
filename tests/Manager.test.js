const { TestScheduler } = require("jest");
const path = require("path");
const Manager = require(path.join(__dirname, "..", "lib", "Manager.js"));

test("Cant set a manager's name", () => {
    const name = "Brendan";
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.name).toEqual(name);
});
test("Can set a manager's ID", () => {
    const id = 1;
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.id).toEqual(id);
});
test("Can set a manager's email", () => {
    const email = "b.francis@sprengerv.com";
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.email).toEqual(email);
});
test("Can set a manager's officeNumber", () => {
    const officeNumber = 4;
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.officeNumber).toEqual(officeNumber);
});
test("Can set a manager's role", () => {
    const role = "Manager"
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.role).toEqual(role);
});
test("Can get a manager's name", () => {
    const name = "Brendan"
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.getName()).toEqual(name)
});
test("Can get a manager's ID", () => {
    const id = 1;
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.getId()).toEqual(id);
});
test("Can get a manager's email", () => {
    const email = "b.francis@sprengerv.com";
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.getEmail()).toEqual(email);
});
test("Can get a manager's role", () => {
    const role = "Manager"
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.getRole()).toEqual(role);
});
test("Can get a manager's officeNumber", () => {
    const officeNumber = 4;
    const manager = new Manager("Brendan", 1, "b.francis@sprengerv.com", 4);
    expect(manager.getOfficeNum()).toEqual(officeNumber);
});