console.log("connected");
//FOR LOOPS - repeats a block of code as long as a certain condition is met
//used to execute a block of code for a certain number of times.


/*
for (initialization
    condition; increment)
    {
        //code
    }

    USAGE:
    1. Initialization - 
    initialize the counter variables and EVALUATED ONCE  unconditionally before the first execution of the loop body

    2.Condition - it is evaluated at the  beginning of each iteration (loop)
    -if true, the loop statement execute.
    -if false, loop execution ends

    3. Increments - updates the loop counter with a new value each time the loop runs.

    */

    for (let i = 0; i <= 5; i++)
    {
            //i=0
            //true
            //i++ = 1   

            console.log(`this is number ${i}`)
    }

    let herName = "Lady Ada Augusta Byron King";

    console.log(herName.length);
    console.log(herName[6]);//d
    //index - position of the character in a string
    // zero based
    console.log(herName[13]);//s

    //displaying the initial value outside the for loop statement
    let letter = 0;
    for (letter; letter<herName.length; letter++)
    {
        console.log(herName [letter]);
          //it displays next line per character
    }
  
    let fruits = ["atis","mango","durian","apple"];
    console.log(fruits[2]); //durian
    console.log(fruits[0]); //atis
    console.log(fruits.length); //4-displays the index

    let index = 0;
    for (index; index<fruits.length; index++)
    {
        console.log(fruits[index]);
        //displays the elements of an array
    }

    let cars = 
        [{brand: "Toyota", type:"Sedan"},
        {brand: "Mazda", type:"hatchback"},
        {brand: "BMW", type:"Sedan"}

];
let x = 0;
for (x; x<cars.length; x++)
{
    console.log(cars[x]);
    //it displays the object properties of an array

    console.log(cars[x].brand);
    //it displays the brand inside the object

    console.log(cars[x].type);
}

//WHILE LOOP

/*
    SYNTAX: 
    while (condition){
        statement
    }
*/

// let count = 5;
// while (count > 0){
//     console.log(count)
//     count--;
// }




// let count = 20;
// while (count > -1){
//     console.log(count)
//     count--;
//     prompt("Enter number");
    
// }

//Create a loop where it will count from 20 to 0.
//Display the number in the console if it is even number.

let b = 20;
for (b;b>0 ; b--){
    if (b % 2 === 0)
    {
        console.log(`number: ${b}`);
    }
}

/*
Solution B
*/

// let userInput = prompt ("Enter a number between 0 to 20");

// function counting (b) {
//     for (b; b >=0; b--) {
//         if (b% 2 ===0){
//             console.log(b)
//         }
//     }
// }

// counting(userInput);

//BONUS FEATURE
//continue statement
//breaks one iteration (in the loop) if a specified conditions occurs
//it continues with the next iteration of the loop
//it jumps over one iteration in the loop

//using the continue statement in skipping numbers
// let text = "";
// let i = 1;

// for (i; i<8; i++)
// {
//     if (i === 2 || i === 3)
//     {
//     continue;
//     }
//     console.log(text+=i);
// }
//for this example we skipped the number 2 and 3

let text = "";

const kotse = ["Porsche", "Mustang", "Tesla", "Lamborghini"];

for (let ai = 0; ai < kotse.length; ai++)
{
    if (kotse [ai] === "Tesla") continue;
    console.log(text += ai);
}

// ACTIVITY ANSWER

//prompt a user to enter a number
let number = prompt("Give me a number");

for (number; number >= 0; number --)
{
    //When a number is less than to 50, we need to display that we need to terminate the loop

    if (number <= 50){
        console.log(`Currently at number ${number}.Terminating the loop`);
        break; // jumps out of the loop
    }
        if (number% 10 === 0)
        {
            console.log(`The number is divisible by 10. Skipping the number`);
            continue; //jumps over one iteration in the loop
        } 
  //if divisible by 5, display a number

  if (number % 5 === 0)
  {
    console.log(number)
  }
}