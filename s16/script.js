console.log("sipagin na sana mag aral bushes");
//Nested IFs
//An If statement that is the target of another if or else

// let userInput = prompt("Enter your age");

// function eligibility (age){
//     if (age < 18)
//     {
//         return ("Minor pa u, that's child labor");
//     }
//     else
//     {
//         //NESTED IF EXAMPLE
//         if (age >=18 && age <=60){
//                 return("Pwede pala u mag work, rawr");
//             }
//             else
//             {
//             return("Tanders ka na, you need pension");
//         }
//     }
// }

// console.log(eligibility(userInput));



// Create a JavaScript code that will determine if the input type is even or odd.

// MAIN GOAL:
// Perform a Nested If for this scenario.
// Enclose inside the function.
// When a user input a word, it will display “Unexpected Input”
// When a user inputs none, it will display “Please input inside the box”.
// When a user inputs a valid number, it will display even or odd.

//Exercise 1: Nested If
// function oddEven(num){
//     if (isNaN (num) || typeof parseInt (num) !== "number")
//     {
//         //isNaN - determines whether a values is NaN (not a number) or a number
//         return `Unexpected Input`;
//     }
//     else if (num ===''){
//         return "Please input inside the box";
//     }
//     else{
//         if (num % 2 == 0)
//         {  
//             return ("Even Number");
//         }
//         else{
//             return ("Odd Number");
//         }
//     }
// }
// let userInput = prompt ("Give me a number");
// console.log(oddEven(userInput));

//NESTED LOOPS
//A loop that is place to another loop

/*
SYNTAX
for (init; condition; increment/decrement)
{
    //create an inner loop for (init; condition; increment/decrement)
}
    {
        //statement of an inner loop
    }
*/

//example 1 using for loop

// for (let i=0; i <=2; i++)
// {
//     console.log("-Outer Loop");
//     for (let j=0; j<=3; j++)
//     {
//         console.log("---Inner loop")
//     }
// }

//example 2 using while loop

// let i=0;
// while (i <= 2)
// {
//     console.log("-outer loop");
//     i++

//     let j=0;
//     while (j <=3 )
//     {
//         console.log("---inner loop");
//         j++
//     }
// }


//nested loops in an array
// function multiplyNumbers (arr)
// {
//     let product = 1;
//     //creating an outer loop
 
//         for (let k=0; k<arr.length; k++)
//         {
//             //creating an inner loop
//             for (let l=0; l<arr[k].length; l++)
//             {
//                   //create a statement for the inner loop
//                 product *= arr[k][l];
//             }          
//         }
    
//     //statement of an outer loop
//     //to know the answer
//     console.log(product);
//     return product;
// }

// multiplyNumbers([
//     [1,2],
//     [3,4],
//     [5,6,7]
// ]);

// Determine the code based on the given output

// MAIN GOAL:
// Perform a Nested Loop for this scenario.
// Include an array with elements.
// Ensure that names are included together the spelled name.

const names = ["Jan", "Dave", "Apohin"];

for (let i=0; i<names.length; i++)
{
    //outer loop displayed the names inside the array
    console.log(`My name is ${names[i]}`);
    for(let j=0; j<names[i].length; j++)
    {
        //inner loop that spells the names inside the array
        console.log(`spells ${names[i][j]}`);
    }
}