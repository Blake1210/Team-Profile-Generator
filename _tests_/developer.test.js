const Developer = require("../lib/developer");

test("Can create a github.", () => {
    const testGithub = "BlakePeterson";
    const employeeInstance = new Developer("Blake", 2, "blakepetersont@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "BlakePeterson";
    const employeeInstance = new Developer("Blake", 2, "blakepetersont@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Developer";
    const employeeInstance = new Developer("Blake", 2, "blakepetersont@gmail.com", "BlakePeterson");
    expect(employeeInstance.getRole()).toBe(returnValue);
});