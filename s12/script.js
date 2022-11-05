/*
Javascript
 -creates dyanamically updating content , control multimedia, animate images, and pretty much everything else.

 DYNAMIC CODE
 Server side - ability to update the display of a web page/app, to show different things generating new content as required.

 Client side - It generates content inside the client's browser.
*/


console.log("Hello World");
//1. Using InnerHTML
// document.getElementById("sample").innerHTML=("Welcome to Javascript");
// //the most common way to display data in HTML

// //2. document.write() - testing purposes

// document.write("Hello World");

// //3. alert() - displays a window in the web browser
// alert ("I am an alert");

// //4. console.log() - for debugging purpose
// console.log("this is a console log");

// //this is  a single line comment

// //comment

// /*multi-line comment*/

//naming variables
const pi= 3.1416; // this variable cannot be reassigned.
console.log (pi);

// pi = 1.20;
// console.log(pi);

let name = "jem";
//let is reassignable
console.log(name);
name="Dahl";
console.log (name);

// let name = "Joey";
// //we cannot re-declare the variable itself
// console.log (name);

//primitive data types
let name1 = "Bryan"; //string
console.log(name1);
console.log(typeof name1);
//typeof enables us to know what data type is it

let age = 15;
console.log(typeof age);

let grade  = 90.5;
console.log(typeof grade);

let isPresent = true;
//boolean - asnwers true of false
//isPresent - the proper naming convention for assigning a boolean value;
console.log(isPresent);
console.log(typeof isPresent);

let myCopy;
console.log(myCopy);
//output is undefined because there's no value assigned into it.

let option1 = null;
console.log(option1);

// let 1fruit = apple;
// console.log(1fruit);

let $year = 2022;
console.log($year);
//we can use special character before word when naming a variable
//there are some special characters that do not work for assigning a variable

let $_year = 2023;
console.log($_year);
//two special characters are working before a word.

let state = 'Washington';
console.log(state);
//backticks are working but only for string


//object
let person = {
    //property value
    //key value pair

    name: "Jose Rizal", //string
    age: 30, //int/number
    address: "Calamba, Laguna", //String
    isDoctor: true, // boolean
    spouse: null, 
    siblings: [
        "Paciano",
        "Saturnina",
        "Lucia",
        "Trinidad",
        "Narcisa",
        "Soledad",
        "Olympia",
        "Conception",
        "Maria",
        "Josefa",

    ] //array
};

console.log(person);
console.log(person.name);
console.log(person.siblings);
console.log(person.siblings[3]);

//Array
let fruits = ["mango", "apple", "watermelon", "kiwi", "rambutan"];
console.log (fruits);
console.log (fruits.length); //displays the array's length
console.log(fruits[2]);

// let profile = {
//     name: "Chester Bennington",
//     age: 41,
//     address: "Palos Verdes Estates, California",
//     isVocalist: true,
//     concert: null,
//     bands[
//     "Linkin Park",
//     "Dead by Sunrise",
//     "Kings of Chaos",
//     ]
// }

//Function
    //Function Declaration
    //Function keyword
    //Function name and parenthesis (holds the parameters)\
    //curly braces - determine its block of codes, statements are written inside this code block.

function greeting (firstName, lastName)
//greeting - user defines function name
//(variable inside the parenthesis) - user defined parameters
//parameters are also known as arguments, properties or attributes
//parameters are named variable passed into a function.
//Imports argument in the function
{
    console.log('My name is ${firstName}, ${lastName}, it was nice to meet you!');
}

greeting ("Gerard", "Way"); //invoke function calls
greeting ("Chester", "Bennington");

function product (a,b){
    console.log("Product");
    return (a*b);
    //stops the execution of a function and returns a value.
}
console.log(product(2,4));

function averageNum (num1, num2, num3){
    return (num1+num2+num3)/3;
}
console.log(averageNum(67,34,22));

function convertNumbers (meters){
    const m =1000;
    console.log("Result in kilometers: ");
    return (meters/m);
}
console.log (convertNumbers(20));