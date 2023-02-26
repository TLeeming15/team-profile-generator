const Intern = require('../lib/Manager');
 
describe('create Intern', () => {
  it('new Intern', () => {
    let newIntern = new Intern(4, "Jim Doe", "jimdoe@gmail.com", "University")
    // Testing id
    expect(newIntern.getId()).toBe(4);
    // Testing name
    expect(newIntern.getName()).toBe("Jim Doe");
    // Testing email
    expect(newIntern.getEmail()).toBe("jimdoe@gmail.com");
    // Testing role
    expect(newIntern.getRole()).toBe("Intern");
    // Testing office number 
    expect(newIntern.getSchool()).toBe("University")
  });

});



