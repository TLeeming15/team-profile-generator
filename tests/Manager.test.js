const Manager = require('../lib/Manager');
 
describe('create Manager', () => {
  it('new Manager', () => {
    let newManager = new Manager(2, "Jane Doe", "janedoe@gmail.com", 100)
    // Testing id
    expect(newManager.getId()).toBe(2);
    // Testing name
    expect(newManager.getName()).toBe("Jane Doe");
    // Testing email
    expect(newManager.getEmail()).toBe("janedoe@gmail.com");
    // Testing role
    expect(newManager.getRole()).toBe("Manager");
    // Testing office number 
    expect(newManager.getOfficeNumber()).toBe(100)
  });

});



