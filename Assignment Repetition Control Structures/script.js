console.log("Let's go");

//EXERCISE 1

let number = prompt ("Enter a number");

if (number < 50){
    console.log(`currently at number ${number}. Terminating the loop`)

}
else{
    console.log(number);
}
//---------------------------------------------------------------------------------------------------------------------------------

//EXERCISE 2
let numberDiv = prompt ("Input a number");

if (numberDiv%10 === 0){
    console.log ("The number is divisible by 10. Skipping the number");
}
    else{
        console.log("The number is not divisible by 10");
}
if (numberDiv%5 === 0){
    console.log(numberDiv/=5);
}