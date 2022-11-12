console.log("connecterd");

// If statement
// conditional branching statement
//contition is true, group of statement is executed
//condition is false, the statement is skipped.

/**
    syntax:
    if (condition)
    {
        statement 1 
        statement 2
    }
 */

// if (20 <= 30);
// {
//     console.log("You are not allowed to enter");
// }

// let age = prompt ("Enter your age");

// function getAge (age){
//     if (age <= 30) {
//         console.log (" You are not allowed to enter")
//     }
//     return (age);
// }

// getAge (age);

// if-else statement

/*
    if (condition)
    {
        statement
    }
    else if (condition)
    {
        statement 2
    }
    else{
        statement 3
    }
 */

// let myAge = 30;
// if (myAge == "30")
// {
//     alert ("hello from the code block");
// }
// else{
//     console.log("haler from my block");
// }

// let centimeter = prompt ("Enter your height");

// if (centimeter <= 150){
//     alert ("Did not pass the minimum requirement");
// }
// else {
//     alert ("Pass the minimum height requirement")
// }

let name = "Jelly Lumactud";
console.log(name.length); //14
//it counts the number of characters that includes space

//Arrays and Objects
let numbers = [1,54,58,60,75,90,99,]; //7
console.log(numbers.length);
//it displays the number of elements inside the array.

//Objects inside the array

let grades = [
    {first: 90},
    {second: 92},
    {third: 75},
    {fourth: 74},
];

console.log(grades.length);
//counts the properties inside the object.
//properties are also known as "key value pair"

if (numbers.length == 7 && grades.length >= 4) {
    console.log("from our codeblock")
}
else{
    console.log("Hindi sya belong. out sya")
}

//BONUS: Ternary operator

