console.log("Assignment");

/*1. What is the difference between a comparison operator and an assignment operator?
-The difference between the two is that Comparison operator do not change any values of the variable but instead it compares whether it is a true or false. On the other hand, Assignment operators assigns a value of the specific variable
*/

/*2.What is a Boolean? What does it represent?
-Boolean is a data type with two possible values: true or false. It consists of operators such as: AND, OR, NOT, NOR, NAND, and XOR.
 */

/*3.How is the += operator different than + operator?
-The difference between the += operator and + operator is that += operator adds the value of the right operand to a variable and assigns the result to the variable. Whereas the + operator purely adds the two or more figures and assigns to a specific variable
*/

/*Code Part

1.Set two variables equal to two different numbers. Use a comparison operator to compare these two variables. Change one of their values by using the +=, -=, *=, or /= operator. Then, compare their values again.

2.Try out the <= and >= operators.

3.3.Try to use the !== operator.*/

let jann = 18;
let dave = 10;
console.log (jann+=dave); //28

let jann1 = 28;
console.log (jann1-=dave); //18

let jann2 = 18;
console.log (jann2*=dave); //180

let jann3 = 180;
console.log (jann3/=dave); //18

//<= and >= operators.
console.log(jann<=dave); //false
console.log(jann>=dave); //true

//!== operator.
console.log(jann !== dave); //true