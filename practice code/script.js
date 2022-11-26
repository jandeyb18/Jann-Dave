// console.log("I can do this");

// let profile ={
//     firstName: "Jann Dave",
//     lastName: "Apohin",
//     Age: "25",
//     Hobbies: ["Biking", "Playing drums", "Performing"],
//     workAddress: {houseNumber: "12", Street: "Bartolaba", City: "Kidapawan", Country: "Philippines" }
// }

// console.log(profile);
// console.log(`Hi! my name is ${profile.firstName} ${profile.lastName}, I am ${profile.Age} of age`);
// console.log(`First Name: ${profile.firstName}`);
// console.log(`Last Name: ${profile.lastName}`);
// console.log(`Age" ${profile.Age}`);
// console.log(`Hobbies: ${profile.Hobbies}`);
// console.log(`Work Address: ${profile.workAddress}`);

// let isMarried = false;
// console.log(`The value of isMarried is: ${isMarried}`);



//     let password = [
//         ["watatii"],
//         ["burdagol"],
//         ["mehehe"],
//  ]
//     if (password !== )
//     console.log(password.length);


//PART 1

    let firstName = "John";
    console.log(`First Name: ${firstName}`);

    let lastName = "Smith";
    let age = 30;
    let hobbies = ["Biking", "Mountain", "Climbing", "Swimming"];
    let workAddress = {
        houseNumber: "32",
        street: "Washington",
        City: "Lincoln",
        State: "Nebraska"
    };

    console.log(`Last Name: ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: `);
    console.log(hobbies);
    console.log(`Work Address: `);
    console.log(workAddress);

// Create a function that will accept the first name, last name and age as arguments and print those details in the console as a single string. This function will also print the hobbies and work address.
// Create another function that will return a value and store it in a variable.

function printUserInfo (fn, ln,age ){
                            //parameters
    console.log(`My name is ${fn} ${ln} ${age} years of age`);

    console.log(`This was printed inside of a function`);
    console.log(hobbies);

    console.log(`This was printed inside of a function`);
    console.log(workAddress);

}

// // //invoke the function and provide arguments
 printUserInfo("Jann", "Apohin", "25");

// //Create another function that will return a value and store it in a variable.
function returnValue(){
    return true;
    //the return statement stops the execution of a function and returns a value.
}

// //console.log(returnValue);

let isMarried = returnValue();

console.log(`The value of isMarried is:${isMarried}`);

// //PART 2 - Nested IFs
 /*
Username: Student@mail.com
Password: discovery

// */

 let login_attempts = 3

 let uname = prompt ("Enter a username or email");
 let pass = prompt ("Enter a password");

function login(uname, pass){

       if (uname == "student@mail.com" && pass == "discovery")
   {
        alert("Successfully logged in");
   }
   else{
    login_attempts = login_attempts - 1;

       alert("Login failed now only " + login_attempts+ " Login attempts available");

         let uname = prompt ("Enter a username or email");
       
        let pass = prompt ("Enter a password");

        if (uname == "student@mail.com" && pass == "discovery")
   {
        alert("Successfully logged in");
   }
   else{
    login_attempts = login_attempts - 1;

       alert("Login failed now only " + login_attempts+ " Login attempts available");

         let uname = prompt ("Enter a username or email");
       
        let pass = prompt ("Enter a password");

        if (uname == "student@mail.com" && pass == "discovery")
   {
        alert("Successfully logged in");
        }
        else{
           login_attempts = login_attempts - 1;
           
           alert("Login failed now only"+login_attempts+"Login attempts available");
        }
    } 
    }
}

login (uname, pass);

// //PART 3 - USING LOOP

/*
Username: student@mail.com
 Password: discovery
 */

let i = 3;
while (i != 0 )
{
     let userName = "student@mail.com"
     let uname = prompt ("Enter a username or email");

   let userPassword = "discovery";
     let pass = prompt ("Enter a password");

     if (userName == uname && userPassword == pass)
     {
    
       i = 4 - i;
       alert ("Successfully login");
       break;
   }
    else{
        i= i-1;
       alert("Login failed now only"+i+"Login attempts available");
//         alert("Login failed now only"+i+"login attempts available");
   }

 }