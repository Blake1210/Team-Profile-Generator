const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const employee_name = "Blake";
    const employeeInstance = new Employee(employee_name);
    expect(employeeInstance.employee_name).toBe(employee_name);
})

test("Testing name.", () => {
    const employee_name = "Blake";
    const employeeInstance = new Employee(employee_name);
    expect(employeeInstance.employee_name).toBe(employee_name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Blake", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "blakepetersont@gmail.com";
    const employeeInstance = new Employee("Blake", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Gets name through getName method.", () => {
    const testName = "Blake";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Blake", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "blakepetersont@gmail.com";
    const employeeInstance = new Employee("Blake", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Blake", 2, "blakepetersont@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})