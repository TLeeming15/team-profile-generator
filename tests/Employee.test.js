const Employee = require('../lib/Employee');
 
describe('create Employee', () => {
  it('new Employee', () => {
    let newEmployee = new Employee(1, "John Doe", "johndoe@gmail.com")
    // Testing id
    expect(newEmployee.getId()).toBe(1);
    // Testing name
    expect(newEmployee.getName()).toBe("John Doe");
    // Testing email
    expect(newEmployee.getEmail()).toBe("johndoe@gmail.com");
    // Testing role
    expect(newEmployee.getRole()).toBe("Employee");
  });

});



