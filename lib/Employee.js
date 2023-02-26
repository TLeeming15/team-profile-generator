class Employee {
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    // let newEmployee = new Employee(id, name, email)
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
    
    getId() {
      return this.id 
      
    }
    getName(){
      return this.name
    }

    getEmail(){
      return this.email
    }

    getRole(){
      return "Employee"
    }
  
  }

  
  module.exports = Employee;