const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "James";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})
