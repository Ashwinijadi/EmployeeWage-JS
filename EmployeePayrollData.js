
//UC 11 to create Employee Payroll Data with id, name and salary

class EmployeePayrollData {
    id;
    salary;
    //constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() { return this._name; }
    set name(name) { this._name = name; }

    toString() {
        return "id = " + this.id + " , name : " + this.name + " , salary : " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "ashu", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.salary = 20000;
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
