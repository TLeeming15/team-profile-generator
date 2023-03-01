const Engineer = require('../lib/Engineer');
 
describe('create Engineer', () => {
  it('new Engineer', () => {
    let newEngineer = new Engineer(3, "James Doe", "jamesdoe@gmail.com", "JamesDoe")
    // Testing id
    expect(newEngineer.getId()).toBe(3);
    // Testing name
    expect(newEngineer.getName()).toBe("James Doe");
    // Testing email
    expect(newEngineer.getEmail()).toBe("jamesdoe@gmail.com");
    // Testing role
    expect(newEngineer.getRole()).toBe("Engineer");
    // Testing office number 
    expect(newEngineer.getGitHub()).toBe("JamesDoe")
  });

});



