// declare variables
let name = "Owolabi Comfort";
let courses = ["HTML", "CSS", "Javascript"];

// display name and courses
console.log("My name is: ", name);
console.log("Courses I offer are: ", courses);

// find all odd numbers between 1 and 200
let allOddNumbers = [];
if (courses.length % 2 == 1) {
    for (var i = 0; i < 200; i++) {
        if (i % 2 == 1) {
            allOddNumbers.push(i);
        }
    }
}