const { TestScheduler } = require("jest");
const path = require("path");
const Engineer = require(path.join(__dirname, "..", "lib", "Engineer.js"));

test("Cant set an manager's name", () => {
    const name = "Brendan";
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.name).toEqual(name);
});
test("Can set an engineer's ID", () => {
    const id = 1;
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.id).toEqual(id);
});
test("Can set an engineer's email", () => {
    const email = "b.francis@sprengerv.com";
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.email).toEqual(email);
});
test("Can set an engineer's github", () => {
    const github = "sprengerv";
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.github).toEqual(github);
});
test("Can set an engineer's role", () => {
    const role = "Engineer"
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.role).toEqual(role);
});
test("Can get an engineer's name", () => {
    const name = "Brendan"
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.getName()).toEqual(name)
});
test("Can get an engineer's ID", () => {
    const id = 1;
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.getId()).toEqual(id);
});
test("Can get an engineer's email", () => {
    const email = "b.francis@sprengerv.com";
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.getEmail()).toEqual(email);
});
test("Can get an engineer's role", () => {
    const role = "Engineer"
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.getRole()).toEqual(role);
});
test("Can get an engineer's github", () => {
    const github = "sprengerv";
    const engineer = new Engineer("Brendan", 1, "b.francis@sprengerv.com", "sprengerv");
    expect(engineer.getGithub()).toEqual(github);
});