
//Map Practice Problems
//UC1 Die Roll

//Program to generate birth month of 50 individuals
{
    let birthMap = new Map();
    for (let i = 1; i <= 12; i++) {
        birthMap.set(i, 0);
    }
    for (let person = 0; person < 50; person++) {
        birthMonth = Math.floor(Math.random() * 12) + 1;
        birthMap.set(birthMonth, birthMap.get(birthMonth) + 1);
    }
    console.log("Printing birthMonth Map of 50 Individuals")
    for (let entry of birthMap) {
        console.log("Birthmonth of 50 individuals in map are ", entry);
    }
}


//DieRoll
let rollMap = new Map();
for (let i = 1; i <= 6; i++) {
    rollMap.set(i, 0);
}
do {
    dieroll = Math.floor(Math.random() * 6) + 1;
    rollMap.set(dieroll, rollMap.get(dieroll) + 1);
}
while (rollMap.get(dieroll) != 10);
for (let entry of rollMap) {
    console.log(entry);
}
console.log("Dice Number with Max counts", [...rollMap.entries()].reduce((a, b) => a[1] > b[1] ? a : b));
console.log("Dice Number with Min counts", [...rollMap.entries()].reduce((a, b) => a[1] < b[1] ? a : b));
