
//UC 11 to create Employee Payroll Data with id, name and salary
//UC 12 Extend EmployeePayroll Data to store gender,date

class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;
    //constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) 
            this._name = name;
        else
            throw 'Name is Incorrect!!';
    }
    toString() {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + " , name : " + this.name + " , salary : " + this.salary + "," +
            "gender=" + this.gender + " , startDate=" + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "ashu", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.salary = 20000;
try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1, "asritha", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());

