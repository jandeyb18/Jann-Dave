console.log("trust the process")

let gino = {
    firstGrading: 95,
    subject: "english",
    teacher: ["Jelly", "Jem", "Joey"],
    isStudent: true,
    school: {
        city: "Manila",
        Country: "Philippines"
    },
    classmates: [
        {
            name: "Dahl",
            batch: "26"
        },

        {
            name: "John Paul",
            batch: "5"
        },

        {
            name:"Jhyx",
            batch: "1"
        }
    ],

    description: function(){
        return `${this.subject}: ${this.firstGrading}`
    }
}

/*
    Q: How do we access properties in an object?
    //through dot (.) notation
    //through bracket ([""]) notation
    //objectName.propertyName
*/

console.log(gino.firstGrading);//95 
//objectName.propertyName

console.log(gino.subject);//English

console.log(gino[`isStudent`]);//true - returns a boolean

console.log(gino[`teacher`]);//array of teachers

console.log(gino.teacher);//even using dot notation it will still return the desired output

console.log(gino.teacher[1]);// outputs the index element Jem
console.log(gino.school); //objects

console.log(gino.school.city)//Manila

console.log(gino.school[`city`]);

console.log(gino[`school`][`city`]);

/*
Q: how to access school's country?
*/
console.log(gino.school.Country);

//Q: how to access the second object of classmates

console.log(gino.classmates[1]);
console.log(gino.classmates[1][`batch`]);

//Q:how do we access the function in the objects?
console.log(gino.description);//it displays the defined function but it did not execute the function

console.log(gino[`description`]);

//Q: How to add property in an object?
console.log(gino.semester); // undefined
gino.semester = "First";
console.log(gino);

//removing a property in an object
delete gino.semester
console.log(gino);

const studentGrades = [
    {
        studentId:1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4:89.8
    },

    {
      studentId:2,
        Q1: 69.2,
        Q2: 71.8,
        Q3: 76.5,
        Q4: 81.9
    
    },

    {
        studentId:3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6
    },

    {
        studentId:4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1
    },

    {
        studentId:5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.4,
        Q4: 81.8
    },
    
];

//ASSIGNMENT:compute the student average by accessing the declared objects

//CLUE: We can use to compute the average manually or using for loop

let student1 = (studentGrades[0].Q1);
let student2 = (studentGrades[0].Q2);
let student3 = (studentGrades[0].Q3);
let student4 = (studentGrades[0].Q4);

let sum1 = (student1+student2+student3+student4);

console.log(`The average grade of student1 is: ${sum1/4}`) ;

let student11 = (studentGrades[1].Q1);
let student22 = (studentGrades[1].Q2);
let student33 = (studentGrades[1].Q3);
let student44 = (studentGrades[1].Q4);

let sum2 = (student11+student22+student33+student44);

console.log(`The average grade of student2 is: ${sum2/4}`)

let student111 = (studentGrades[2].Q1);
let student222 = (studentGrades[2].Q2);
let student333 = (studentGrades[2].Q3);
let student444 = (studentGrades[2].Q4);

let sum3 = (student111+student222+student333+student444);

console.log(`The average grade of 3 is: ${sum3/4}`)

let student1111 = (studentGrades[3].Q1);
let student2222 = (studentGrades[3].Q2);
let student3333 = (studentGrades[3].Q3);
let student4444 = (studentGrades[3].Q4);

let sum4 = (student1111+student2222+student3333+student4444);

console.log(`The average grade of student4 is: ${sum4/4}`)

let student11111 = (studentGrades[4].Q1);
let student22222 = (studentGrades[4].Q2);
let student33333 = (studentGrades[4].Q3);
let student44444 = (studentGrades[4].Q4);

let sum5 = (student11111+student22222+student33333+student44444);

console.log(`The average grade of student5 is: ${sum5/4}`)

for (let i = 0; i < studentGrades.length; i++)
{

let forLoopAve = (studentGrades [i].Q1 + studentGrades [i].Q2 + studentGrades [i].Q3 + studentGrades [i].Q4) / 4;
console.log(forLoopAve);

studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(1));

}
console.log(studentGrades);

//Using forEach:
// studentGrades.forEach(function(element)){
//     let forEachAve = (element.Q1 + element.Q2 + element.Q3 + element.Q4)/4;
//     console.log(forEachAve);
//     element.forEachAve = parseFloat(forEachAve.toFixed(1));
// });
// console.log(studentGrades);

//Object constructor
let hero = {
    name: "Angela",
    level: 1,
    role: "support",
    health: 100,
    attack: 50,
    mana: 100,

    tackle:function(){
        console.log(`This ${hero} tackled ${hero}`);
        console.log(`Target hero's heath is now reduced to heroHealth`)
    },

    faint:function(){
        console.log(`Hero fainted`);
    }
}
console.log(hero);

//Q: What if we want to create a multiple objects with the same properties? would you prefer creating one object each? No, it will take too long

//To solve this problem, object constructor will be a good use.

//Object constructor - serves as a blueprint of our objects.
//Objects created using "this" constructor will inherit what are the function properties and methods set by this function.

//Q: what are the steps in creating an object constructor?

//Step 1: create a template or blueprint
function Pokemon (name, lvl, hp){
    this.name = name;
    this.level = lvl;
    this.health = hp *2;
    this.attack = lvl;

    this.tackle = function (target){
        console.log(target);
        console.log(`This ${this.name} tackled ${target.name}`);
        console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
    },
    this.faint = function(){
        console.log(`${this.name} fainted!`);
    }
}

//Step 2: Initialize an Object with arguments:

let pikachu = new Pokemon ("Pikachu",5, 50);
let charizzard = new Pokemon ("Charizzard", 8, 40)

console.log(pikachu);
console.log(charizzard);

//Step 3: Execute the property
//for this example we execute the tackle property of Pikachu object
console.log(pikachu.tackle(charizzard));
console.log(pikachu.tackle(charizzard));
console.log(pikachu.tackle(charizzard));


function Person(name, nationality, age){
    this.name = name;
    this.nationality = nationality;  
    this.age = age;
    this.updateAge = function(){
        return ++this.age;
    };
}

let person01 = new Person ("Jann Dave", "Filipino", 17);
console.log(person01.nationality);

function Person (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${firstName}, ${lastName}`;
}

let Jann = new Person ("Jann Dave", "Apohin", 15);
console.log(Jann)

//Array of objects
let cars = [
    {
        brand: "Toyota",
        model: "Vios",
        price: 1000000
    },

    {
        brand: "Mazda",
        model: "MX-5",
        price: 2000000
    },

    {
        brand: "Nissan",
        model: "Fortuner",
        price: 2500000
    }
];

//find callback function());

//iterates over items in our array and returns the item/element which will satisfy the condition.
//find() will return the "first" item that will satisfy the condition and it stops its process.
//if find() cannot satisfy its condition even after iterating all of items/elements in the array it will return underfined.
//we can use logical operators for our condition.

let foundCar = cars.find(
    function(car) {
        console.log(car); //displays the objects inside the car array

        return (car.brand === "Nissan")
    }
);

console.log(foundCar);

if (foundCar === undefined) {
    console.log(`some data not existing`);
}

else {
    console.log(`Data exists`);
}




//Exercise: User details
let users = [
	{
		username: "kimdhyn",
		email: "dahyun@gmail.com",
		password: "dahyunTwiceu"
	},
	{
		username: "jenKimBP",
		email: "jennieSolo@gmail.com",
		password: "dududuJennie",
	},
	{
		username: "lisaBP",
		email: "lisaManoban@gmail.com",
		password: "lisaIsHere"
	}
];

function login (userEmail, userPassword)
{
    let userCredentials = users.find((user) => {
        return user.email === userEmail && user.password === userPassword
    });

    if (!userCredentials){
        alert ("Login failed. Wrong credentials.");

    }
    else{
        alert ("thank you for logging in.");
        console.log(userCredentials);
    }
}


login("dahyun@gmail.com", "dahyunTwiceu")