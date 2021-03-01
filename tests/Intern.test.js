const { TestScheduler } = require("jest");
const path = require("path");
const Intern = require(path.join(__dirname, "..", "lib", "Intern.js"));

test("Cant set an intern's name", () => {
    const name = "Brendan";
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.name).toEqual(name);
});
test("Can set an intern's ID", () => {
    const id = 1;
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.id).toEqual(id);
});
test("Can set an intern's email", () => {
    const email = "b.francis@sprengerv.com";
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.email).toEqual(email);
});
test("Can set an intern's school", () => {
    const school = "ASU";
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.school).toEqual(school);
});
test("Can set an intern's role", () => {
    const role = "Intern"
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.role).toEqual(role);
});
test("Can get an intern's name", () => {
    const name = "Brendan"
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.getName()).toEqual(name)
});
test("Can get an intern's ID", () => {
    const id = 1;
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.getId()).toEqual(id);
});
test("Can get an intern's email", () => {
    const email = "b.francis@sprengerv.com";
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.getEmail()).toEqual(email);
});
test("Can get an intern's role", () => {
    const role = "Intern"
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.getRole()).toEqual(role);
});
test("Can get an intern's school", () => {
    const school = "ASU";
    const intern = new Intern("Brendan", 1, "b.francis@sprengerv.com", "ASU");
    expect(intern.getSchool()).toEqual(school);
});