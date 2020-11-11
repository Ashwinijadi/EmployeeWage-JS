//WELCOME message
{
    console.log("Welcome to Employee Wage Programming")
}
//constants
const MAX_HRS_IN_MONTH = 100;
const NO_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;
//UC 1  Check Employee present or absent
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("employee is absent");
    }
    else {
        console.log("employee is present");
    }
}

// UC-2 Calculate EmployeeWage based on PART-TIME or FULL-TIME
{
    {
        let empHRS = 0;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        switch (empCheck) {
            case IS_PART_TIME:
                empHRS = PART_TIME_HRS;
                break;
            case IS_FULL_TIME:
                empHRS = FULL_TIME_HRS;
                break;
            default:
                empHRS = 0;
        }
        let empWage = empHRS * WAGE_PER_HOUR;
        console.log("Employee Wage: " + empWage);
    }
}

//UC-3 Refactor Code Write function to get Working Hours
{
    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HRS;
            case IS_FULL_TIME:
                return FULL_TIME_HRS;
                break;
            default:
                return 0;
        }
    }
    let empHRS = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHRS = getWorkingHours(empCheck);
    let empWage = empHRS * WAGE_PER_HOUR;
    console.log("Employee hours :" + empHRS + " Employee Wage: " + empWage);
}


//UC-4 calculate wage for month assuming 20 Working days 
{

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HRS;
            case IS_FULL_TIME:
                return FULL_TIME_HRS;
            default:
                return 0;
        }
    }
    let empHRS = 0;
    for (let day = 0; day < NO_OF_WORKING_DAYS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHRS += getWorkingHours(empCheck);
    }
    let empWage = empHRS * WAGE_PER_HOUR;
    console.log("Total Hrs: " + empHRS + "   Employee Wage: " + empWage);
}

//UC-5 Calculate Wage Till 160Hrs or 20Days
{
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
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("TotalWorkingDays are : " + totalWorkingDays + "  Total Hrs: " + totalEmpHrs + "   Employee Wage: " + empWage);
}

//UC-6
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyHrsMap = new Map();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
    totalEmpHrs += empHrs;
}
console.log("EmployeeWageArray = ", empDailyWageArr);
let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6-TotalDays" + totalWorkingDays + "total Hours:" + totalEmpHrs + "employee Wage" + empWage);

//UC- 7A calculate daily wage using array foreach traversal or reduce method
let totalWage = 0;
function sum(dailyWage) {
    totalWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("7A Array [" + empDailyWageArr + " ]");
console.log("UC7A-TotalDays : " + totalWorkingDays + "total Hours : " + totalEmpHrs + "employee Wage : " + empWage);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A-Employee Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC-7B-Show The day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=>" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily WageMap");
console.log(mapDayWithWageArr);

//UC 7C-Show Days When Full time of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDailyWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C-Daily Wage Filter When Fulltime Wage Earned ");
console.log(fullDailyWageArr);

//UC 7D-Find the first Occurence When Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D -first time fulltime wage was earned on day " + mapDayWithWageArr.find(findFulltimeWage));

//UC 7E- Check if Every Element of Full Time Wage is truely holding full time wage
{
    function isAllFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC 7E -Check All Element Have Full Time Wage : " + fullDailyWageArr.every(isAllFulltimeWage));

    //UC 7F -Check if there is any part time Wage
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("UC 7F- Check If any part time wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

    //UC 7G- Find the number of days the Employee Worked
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0)
            return numOfDays + 1;
        return numOfDays;
    }

    console.log("UC 7G-No Of Days Employee Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));
}

// UC 8-Store Day and DailyWage using Map and calculate totalWage using map
//Uc6 Arrays and UC7 Maps
{
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();

    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays, empHrs);
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
    console.log(empDailyWageMap);
    console.log("employee hours map", empDailyHrsMap);
    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("UC8-Employee Wage Map Totalwage : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
}

//UC-9 Calculate total hrs,total working days and print Full,part and No Working Days using Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Employee wage with arrow : " + "total Hours : " + totalHours + "total employee Wage : " + totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working days are : ", fullWorkingDays);
console.log("Part Working days are : ", partWorkingDays);
console.log("No Working days are : ", nonWorkingDays);






