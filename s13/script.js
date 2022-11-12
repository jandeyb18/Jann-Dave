console.log("connected");
//JS operators
//symbols used to manipulate values or operands
//used to perform specific mathematical and logical computation in operands.

//1. assignment operators
//represents the equal symbol(=)

let a = 14;
a = 18;

let b = a;
console.log (b);
//in this sample, using let can reassign the values of a variable.

//addition
//arithmetic operators - mathematical operations on a numerical values/operands and returns a single numerical value.

console.log(20+30); //50 primitive data type
console.log("20"+"30"); //string
//string concatenation or just the plain concatenation
//concatenation - it links or combines to strings together.

//subtraction/difference (-)
console.log(20-10); //10
//this is declared as a number

console.log("50"-"10"); //40
//Type coercion - automatic/implicit conversion of values from one data type to another.

let val1 = 50;
let val2 = '30';
let diff = val1-val2;
console.log(diff);
//type coercion

console.log("twenty" - "ten");
//NaN - not a number

//Division (/)
console.log(50/5); //Number under primitive type

console.log("50"/"5"); // coercion

console.log("fifty"/"five");
//NaN - not a number

//Modulus division (modulo - %)
console.log(100%3);
// 1 - remainder

//Increment (++) and Decrement (--)

let c = 30;

/*
if operator comes first, it performs arithmetic operations before displaying the result.
*/

console.log(++c); //31 - add 1
console.log(c);// - the existing value has been added previously so that is why the new value displayed as 31.



console.log(--c);//30
console.log(c);//30

/*
If the operand comes first before the operator it displays the value of the operand before performing arithmetic operation.
*/

console.log(c++); //30
console.log(c); //31 current value of c

console.log(c--); //31
console.log(c); //30

console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5/5);

let d = 10;
let e = 15;

console.log(d+e);
console.log(d-e);
console.log(d*e);
console.log(d/e);

console.log (2*(4-2));

//compound assignment operator
//shorthand for arithmetic and assignment operation.
//performs mathematical operation then assigning the result back to the variable.

/*
Long method:
let j = 15;
console.log(j+3); // 18
console.log(j); //15
*/

//Addition Assignment Operator (+=)
let i = 15;
console.log(i += 3); //18 - adds the number in the initial value
console.log(i); //18

//Subtraction assignment operator (-=)
console.log(i-=10); //8

//multiplication assignment operator (*=)
console.log(i*=15); //120
//i = 8
//8*15 = 120

//Division assignment operator (/=)
console.log(i/=2); //60
//i = 120 based on above
// 120/2 = 60

//Modulus assignment operator (%=)
console.log(i%=8); //remainder is 4

//companion operators
//compares two operands and returns a logical value (true or fales)

/*
 < = less than
 > = greater than
*/

//equality operator (==) a.k.a "loose equality"
//compares the same value regardless of data type because of coercion.

console.log("Jan" == "Jan"); // true
console.log(true==true); //true
console.log(false==true); //false
console.log(true==false); //false

console.log(false==false); //true - same value
console.log(null==undefined); //true
console.log("20"==20);//true because of coercion

/*
binary numbers
1 = true
0 = false
*/
console.log(true==1); //true
console.log(true==2); //false
console.log(false==0); //true
console.log(false==1); //false

console.log(4.00==4); //true

//Type coercion - Automatic/implicit conversion of values from one data type to another.

//parseInt() - converted into whole numbers
//parsefloat() - used for decimal numbers

let x = 75.68;
console.log(parseInt("75.68"));
console.log(parseFloat("75.68"));

console.log(parseInt("75.68").toFixed(3)); 
//.toFixed(2) - displays 2 decimal places
console.log(parseFloat(x.toFixed(3)));

//Strict Equality Operator (===)
//doesn't practice coercion
//compares "sameness of value" and data type


console.log(1 === 1); //true
console.log(5 === "5"); //false
console.log(true === 1); //false
console.log(null === undefined); //false
console.log("James" === "James"); // false - sameness of value is practiced in strict equality operator
console.log(true === true); //true
console.log(false === false); //true

//Inequality Operator (!=)
//a.k.a Loose Inequality Operator
//Compares differences of values regardless of data types
//coercion will take place

console.log(false != true); //true
console.log(3 != 3.00); //false
console.log(null != undefined); //true
console.log(true != 1); //false

//Strict Inequality Operator(!==)
//data type and difference of values

console.log(false !== true); //true
console.log(4 !== 4.00); //false
console.log(null !== undefined); //true
console.log(true !== 1); //true

//Greater than (>)
console.log(100>75); //true
console.log(70>180); //false

//Less than (<)
console.log(45<50); //true
console.log(67<45); //false

//Greater Than or Equal To
console.log(45>=45); //true
console.log(44>=45); //false

//Less Than or Equal to (<=)
console.log(100<=100); //true
console.log(1 <= 0.5); //false

//Logical Operators
    //AND (&&) Operator - when there is false in the statement it will set as false

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(("Max" == "Max") &&(undefined == null)); //true

let kei = true;
console.log (kei > 2 && kei < 2);

let isOnline = true;
let isBoss = false;
let chatSiBoss = isOnline && isBoss;
console.log(chatSiBoss); //false

//best practice to declare a boolean use the word "is" before given word

// OR Operator (||)
//evalautes to true of either of the operand is true
//if both operands are false the result is false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//NOT Operator -  kabaligtaran
console.log(!true); //false
console.log(!false);

let isAdmin = true;
let isInstructor = "1";
let isAnswer = !isAdmin === isInstructor
console.log(isAnswer); //false

let faveNum = 333;
let chooseNum = 245;
let isHigher =  !(chooseNum > faveNum || faveNum >= chooseNum);
console.log(isHigher);


/*
let isTrue = true;
let isFalse = false;

let isTralse = !isFalse != !isFalse && isFalse !== isTrue || (!isTrue != !isFalse && isFalse != !isTrue));

(!isFalse != !isFalse && isFalse !== isTrue
    T != T && F
    F
    
    )
    */