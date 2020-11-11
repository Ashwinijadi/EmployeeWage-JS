
//UC-10  Create Object and store day, hours worked and wage earned 
//constants
const MAX_HRS_IN_MONTH = 100;
const NO_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
let empHrs = 0;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            console.log("employee is absent");
            return 0;
    }
}
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNo: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay' + this.dayNo + ' => Working hrs ' + this.dailyHours + '  daily wage = ' + this.dailyWage
            },
        });
}
console.log("UC10 printing day dailyworking hrs and wage earned" + empDailyHrsAndWageArr);

//UC11 Object Operations using arrow functions

//UC 11A to UC 11D
let totalSalary = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total Hrs : " + totalHours + " , total salary : " + totalSalary);

let fullWorkingDay = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .map(dailyHrsAndWage => (dailyHrsAndWage.toString()));
console.log("UC 11 B Full working days: " + fullWorkingDay);
let partWorkingDay = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage
    .dailyHours == 4).map(dailyHrsAndWage => (dailyHrsAndWage.toString()));
console.log("UC 11 C part working days : " + partWorkingDay);
let noWorkingDay = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage
    .dailyHours == 0).map(dailyHrsAndWage => (dailyHrsAndWage.toString()));
console.log("UC 11 D Non working days: " + noWorkingDay);

