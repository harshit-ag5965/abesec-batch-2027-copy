class Employee {

    static companyName = "ABC Company";
    constructor(name, salary, age, isManager, dateOfJoining) {
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.isManager = isManager;
        this.dateOfJoining = dateOfJoining;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    static calculateNewSalaryAfterBonus(employeeSalary, bonusPercentage) {
        return employeeSalary + (employeeSalary * bonusPercentage/100)
    }

}

var employee = new Employee("John Doe", 100000, 30, true, "2020-01-01");
var employee2 = new Employee("John Dae", 100000, 30, true, "2020-01-01");
// console.log(employee);
employee.setName("John Dae")
// console.log(employee);

var newSalary = Employee.calculateNewSalaryAfterBonus(employee.getSalary(), 10)
employee.setSalary(newSalary);

console.log(Employee.companyName);