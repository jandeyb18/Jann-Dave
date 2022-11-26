console.log("connected");

// let students = ["John", "Jane", "Joe"];

// const [student1, student2, student3] = students;
// console.log(`${student1} is added to the list`);
// console.log(`${student2} is added to the list`);
// console.log(`${student3} is added to the list`);

// function total () {
//     console.log(`There are total number of ${students.length} in the students' list`);
// }
// total()

// students.forEach(student => console.log(student));

// let section = ('- Section A');


let students = [];
function addStudent(name)
{
    students.push(name);
    console.log(`${name} is added to the students' list.`);
}
addStudent("John");
addStudent("Jane");
addStudent("Joe");

function countStudents(){
    return `There are total number of ${students.length}`
}
console.log(countStudents());
console.log(students);

function printStudents(){
    students.sort();
    students.forEach(function(student){
        console.log(student);
    })
}
printStudents()

function findStudent(keyword){
    let match = students.filter
    (function (element){
        return element.toLowerCase().includes(keyword.toLowerCase())
    })
    console.log(match);

    if (match.length == 1){
        console.log(`${match} is an enrolee`);
    }
    else if (match.length  > 1)
    {
        console.log(`${match} are enrollees`);
    }
    else{
        console.log(`no student found with name ${match}`);
    }
}

findStudent("Joe");

let studentSection = [];
function addSection(section){
    studentSection = students.map(function (student){
        return `${student} - section ${section}`
    })
}
console.log(addSection("A"));
console.log(studentSection);


function removeStudent(name){
    let firstLetter = name.slice(0,1).toUpperCase();
    let remainingLetters = name.slice(1, name.length);
    let capitalizedName = firstLetter + remainingLetters;
    let studentIndex = students.indexOf(capitalizedName);

    if(studentIndex >= 0){
        students.splice(studentIndex, 1);

    }
    console.log(`${name} was removed from the students' list`);
}
removeStudent("Joe");
console.log(students);