//WELCOME message
{
    console.log("Welcome to Employee Wage Programming")
}
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
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HRS = 4;
    const FULL_TIME_HRS = 8;
    const WAGE_PER_HOUR = 20;
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
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HRS = 4;
    const FULL_TIME_HRS = 8;
    const WAGE_PER_HOUR = 20;
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
    const NO_OF_WORKING_DAYS = 20;
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HRS = 4;
    const FULL_TIME_HRS = 8;
    const WAGE_PER_HOUR = 20;
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
