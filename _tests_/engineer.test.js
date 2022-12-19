const Engineer = require("../lib/engineer");

test("Can create a github.", () => {
    const testGithub = "BlakePeterson";
    const employeeInstance = new Engineer("Blake", 2, "blakepetersont@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "BlakePeterson";
    const employeeInstance = new Engineer("Blake", 2, "blakepetersont@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Blake", 2, "blakepetersont@gmail.com", "BlakePeterson");
    expect(employeeInstance.getRole()).toBe(returnValue);
});