//WELcome
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
