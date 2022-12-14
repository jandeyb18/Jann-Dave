console.log("UGMA SUGDAN ANG TINUOD NA PAGTUON")

/*
WHAT IS AN ARRAY?
-ordered collection of values
-why is it ordered? because of the index
*/

//BASIC STRUCTURE
//Elements - these are the values in a square brackets called "array literals"

//How to create JavaScript arrays?
//1. Declaring and initializing an array
let array = [];

//2. using new keyword and then the array
let arr = new Array();

let months = ["Jan", "Feb", "March", "April", "May"];

/*
How  to access array elements?
-via index
- index starts with zero

How to count the elements in the array?
-using the .length property
 */

console.log(months[0]);
//display jan

console.log(months[1]);
//display Feb

console.log(months);
//displays the months declared in the array

console.log(months.length);
//counts the number of elements inside the array

//Array manipulation

//OLD METHOD: Using the assignment operator(=)
let count = ["one","two","three","four"];
console.log(count[4]); //undefined, because we do not have elements inside the index 4.

count[4] = "five";
console.log(count[4]);
//already included the word five when we get the index form


console.log(count);
//already included the word "five"

//Mutator methods - these are the methods that modify the original array

//1. Push method
// adds an element at the end of an array
count.push("six");
console.log(count);

//push method inside the function

function addElement(element)
{
    count.push(element);
    console.log(count);
}

addElement("seven");

//2. Push method
//removes an element at he end of an array

count.pop();
console.log(count);

//pop inside the function
function removeElement(){
    count.pop();
    console.log(count);
}
removeElement();

//3. unshift method - 
count.unshift("zero");
console.log(count);

//4. Shift method
//removes the first element
count.shift();
console.log(count);

//sort method
let nums = [15,32,61,130,230,13,34];
nums.sort();
console.log(nums);
//sorts based on the first digit

nums.sort(
   function (a,b){

    //ascending order
    // return a-b;

    //descending order
    return b-a;
   }

);
console.log(nums);

//reverse method
nums.reverse();
console.log(nums);

//splice method - mutator method
// returns an array containing deleted elements
//first parameter index where to start omitting an element
//second parameter - number of elements to be omitted
//third parameter - elements to be added or inserted.
console.log(count);

let newSplice = count.splice(2);
//deletes all elements from index 2
console.log(newSplice);

//Slice Method
//returns new array
//start - removes all elements before the element specified by the index syntax.
//syntax: slice(<start>, <end>)
let animals = ["dog", "cat", "hamster", "crocodile", "lovebird"]
console.log(animals);

let newSlice = animals.slice(2);
console.log(newSlice);
//deletes all elements before the specified index.

console.log(animals);

let newSlice1 = animals.slice (1,2);
//it deletes specified number of elements from index 1, then return the remaining elements in the new array called newSlice1.
console.log(newSlice1); //cat

//concat method
//enables to merge two or more arrays

console.log(animals);
console.log(count)
let newConcat = animals.concat(count);
console.log(newConcat);

//join method
let meal = ["tapsilog","noodles","Burger Steak"];
let newJoin = meal.join();
console.log(newJoin);

newJoin = meal.join("-");
console.log(newJoin);

newJoin = meal.join("   ");
console.log(newJoin);

//toString Method

let elements = ["b", "a", "d", 8, 5, "e"];
console.log(elements);
console.log(typeof elements [0]); //string
console.log(typeof elements [3]); //number
console.log(typeof elements [4]); //number

let newString = elements.toString();
console.log(newString);
console.log(typeof newString); //it confirms that all elements converts into string.

//Array Accessor Methods
//Methods that return a new value of representation.
//indexOf()
//lastIndexOf()

let countries=["US", "PH","CAN", "TAI", "PH","SG", "HK", "PH"];

//IndexOf() - finds the index of a given element where it is "first" found

let index = countries.indexOf("PH");
console.log(index);

//lastIndexOf() - finds the index of a given element where it is "last" found.

let lastIndex = countries.lastIndexOf("PH");
console.log(lastIndex);

//Iterators - defines a sequence and potentially a return value upon its termination.
//forEach()

/*
Syntax:
forEach(function(){

})
*/

let bigData = [
{
    fn:"Joshua", Ln:"Garcia"
},

{
    Fn:"Dingdong", Ln:"Dantes"
},

{
    Fn:"Christopher", Ln:"De leon"
}
];

let result = bigData.forEach(function(element)
{
    console.log(element);
        return element
}
); 
console.log(result); //undefined 
//Q: How to create a copy of an array from the original array?

let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

//Step 1: map() - it iterates each element in an array and returns a new array with same elements (or different values depending on the result of the function operation) does not modify the original array

let mapNewDays = days.map(
    function(day){
        return day;
    }
);
console.log(mapNewDays);

//step 2. create a copy of a new array using forEach()
let newDays = []
console.log(newDays);
days.forEach(function(day){
    newDays.push(day);
});
console.log(newDays);

//filter - it filters out the elements based on the conditions.
//returns an array that contains elements which passes a given condition.

let digits = [1,2,3,4,5];
let newFilter = digits.filter(
    function(element){
        return element < 3
    }
)
console.log(newFilter);

//includes
//when checking array elements it is case sensitive
//returning true or fales as appropriate, it returns true if a string contains a specified string, otherwise it will return false.
//it determines whether an array includes a certain value among it entries

let pets = ["Shih tzu", "Hedgehog", "Squirrel", "Rats"];

// let newIncludes = pets.includes("squirrel");
// console.log(newIncludes); //true


// let pets = ["dogs", "cats", "birds","fishes"];

// let newIncludes = pets.includes("cats");
// console.log(newIncludes);

// if (newIncludes == pets.includes){


// console.log(newIncludes)
// }
// else{
//      return `not found`
// }

//Exercise using include method

function checkTheWord (word)
{
    if (pets.includes(word) == true)
    {
        return word
    }
    else {
        return `${word} not found`
    }
}
console.log(checkTheWord ("Squirrel"));
console.log(checkTheWord("dogs"));

//every() - checks if all elements passes a given condition

console.log(digits);

//returns true if all elements passed the given condition

let newEvery = digits.every(
    function (element){
        return element > 1
    }
);

console.log(newEvery); //false - returns a boolean

//some() - checks if "at least 1 element" passes a given condition.
//returns true even if only some of the elements passed the given condition.

let newSome = digits.some(
    function (element){
        //element parameter represents the index in the array
        return element > 2
    }
);

console.log(newSome); //true - boolean

//reduce() - evaluates elements from left to right and returns a "single value"

let newReduce = digits.reduce(
    function (a, b){
        let total = a + b;
        return total;
    }
);

console.log(newReduce);
//it adds all elements in an array

console.log(newReduce/digits.length);//3 -it divides the total number of an array and the elements

let numeric = [5,11,30,118,634];

let nReduce = numeric.reduce(
    function (a,b){
        let tot = a+b
        return tot
        
    }
);
console.log(nReduce/numeric.length);

//Exercice 2 - using reduce method
//Get the average of the elements in the array and display the aveage

let numba = numeric.reduce(
    function(a,b){
        return a+b
    }
);
console.log(numba); //798
console.log(numba/numeric.length); //159.6

//Stretch goal
/*
 The the average of the elements in the array and display the average to  your browser's console using for loop
 */

 let total = 0;
 for (let m = 0; m < numeric.length; m++){
    total = total + numeric[m];
 }
 console.log(total);
 console.log(total/numeric.length);