//Generates 10 Random 3 Digit number and store into array
let NumArray = new Array();
for (let count = 0; count < 10; count++) {
    let number = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    NumArray.push(number);
    // console.log("random nos are", number);
}
console.log("array is", NumArray);

//find second largest number 
function getSecondHighest(Numarray) {
    var first = 0, second = 0;
    for (var i = 0; i < NumArray.length; i++) {
        if (NumArray[i] > first) {
            second = first;
            first = NumArray[i];
        }
        else if (NumArray[i] > second && NumArray[i] < first) {
            second = NumArray[i];
        }
    }
    console.log("second largest number without sorting", second);
}
getSecondHighest(NumArray);

//find second smallest number
function getSecondSmallest(Numarray) {
    var first = Numarray[0], second = Numarray[0];
    for (var i = 0; i < NumArray.length; i++) {
        if (NumArray[i] < first) {
            second = first;
            first = NumArray[i];
        }
        else if (NumArray[i] < second && NumArray[i] > first) {
            second = NumArray[i];
        }
    }
    console.log("second smallest number without sorting", second);
}
getSecondSmallest(NumArray);

//second smallest and second largest after sorting
console.log("array after sort is", NumArray.sort());
console.log("second largest after sort is", NumArray[8]);
console.log("second smallest after sort is", NumArray[1]);

//Program to store all the Prime Factors of a number and display numbers
const prompt = require('prompt-sync')();
{
    let number = prompt("Enter the number to compute prime factors of a number :");
    let primeArray = new Array();
    for (let i = 2; i < number; i++) {
        while (number % i == 0) {
            primeArray.push(i);
            number = number / i;
        }
    }
    if (number > 2) {
        primeArray.push(number);
    }
    console.log("prime factors are", primeArray)
}

//Program to show Sum of three Integer adds to ZERO
let givenArray = [1, 2, 4, -3, -1, 5, 6];
for (let i = 0; i < givenArray.length; i++) {
    for (let j = i + 1; j < givenArray.length; j++) {
        for (let k = j + 1; k < givenArray.length; k++) {
            if (givenArray[i] + givenArray[j] + givenArray[k] == 0) {
                console.log("Numbers found with sum zero are : " + givenArray[i] + "," + givenArray[j] + " and " + givenArray[k]);
            }
        }
    }
}

// Program to store Numbers repeated in an array
let StoreArray = new Array();
let transverseArray = [1, 2, 5, 5, 1, 6];
console.log(transverseArray);
for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        if (transverseArray[i] == transverseArray[j])
            StoreArray.push(transverseArray[i]);
    }
}
console.log("repeated elements are : ", StoreArray) 