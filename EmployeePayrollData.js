
//UC 11 to create Employee Payroll Data with id, name and salary
//UC 12 Extend EmployeePayroll Data to store gender,date

const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const genderRegex = RegExp('^[m,M,f,F]{1}$');
class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;
    //constructor
    constructor(...parameter) {
        if (!parameter[0] > 0) throw "Id is Incorrect"
        this.id = parameter[0];
        if (!nameRegex.test(parameter[1])) throw "name is Incorrect !!!"
        this.name = parameter[1];
        if (!parameter[2] > 0) throw "Salary is Incorrect !!!"
        this.salary = parameter[2];
        if (!genderRegex.test(parameter[3])) throw "gender is Incorrect !!!"
        this.gender = parameter[3];
        if (!parameter[4] > new Date()) throw "Date is Incorrect !!!"
        this.startDate = parameter[4];
    }

    toString() {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + " , name : " + this.name + " , salary : " + this.salary + "," +
            "gender = " + this.gender + " date = " + empDate;
    }
}

try {
    let newEmployeePayrollData = new EmployeePayrollData(1, "Asritha", 1000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}




