/*
Employee interface :

constructor(name, salary)
getName()
setSalary()
getSalary()
getRoles()
*/


// we have many types of employees

class Developer {
  constructor(name, salary) {
      this.name = name
      this.salary = salary
  }
  getName() {
      return this.name
  }
  setSalary(salary) {
      this.salary = salary
  }
  getSalary() {
      return this.salary
  }
  getRoles() {
      return this.roles
  }
  develop() {
      /* */
  }
}

class Designer {
  constructor(name, salary) {
      this.name = name
      this.salary = salary
  }
  getName() {
      return this.name
  }
  setSalary(salary) {
      this.salary = salary
  }
  getSalary() {
      return this.salary
  }
  getRoles() {
      return this.roles
  }
  design() {
      /* */
  }
}

// now we have organzation and we can count salary of whole organization

class Organization {
  constructor(){
      this.employees = []
  }
  addEmployee(employee) {
      this.employees.push(employee)
  }
  getNetSalaries() {
      let netSalary = 0
      
      this.employees.forEach(employee => {
          netSalary += employee.getSalary()
      })

      return netSalary
  }
}

const john = new Developer('John Doe', 12000)
const jane = new Designer('Jane', 10000)

const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)

console.log("Net salaries: " , organization.getNetSalaries()) // 22000