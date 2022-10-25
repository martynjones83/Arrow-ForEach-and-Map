// ForEach & Callback

// Exercise 1 - Favourite Foods

// Create an array of your favourite foods​
// Use forEach to iterate over the array console logging each item on the list.

let favouriteFoods = ["Curry" , "Salad Cream" , "Fruit" , "Vegetables"];
favouriteFoods.forEach((item)); console.log((item));

// Exercise 2 - Sum

// Create an array , numArray, with a list of 5 or more numbers​
// Create a function called sum which takes in an array as a parameter​
// The function should return the sum of the array.​
// Test the function with the array you created

let numArray = [3, 8, 15, 16, 28];
sumArray = (arr) => {
    let result = 0;
    arr.forEach((item) => += item);
    return result
}
console.log(sumArray(numArray));

// Exercise 3 - Product

// Create a function called product that multiplies all the numbers in the array by each other.​
// Test the function by passing in your array of values

let numArray2 = [1, 1, 1, 2, 2];
prodArray = (arr) => {
    let result = 1;
    arr.forEach((item) => result *= item);
    return result
}
console.log(prodArray(numArray2));

// Exercise 4 - Student Grades

// Create an array, studentGrades, with the values 70, 20, 53, 64, 78, 60, 32​
// Create function call passedGrades. The function should take in an array and return an array of the scores above 50.

let studentGrades = [70, 20, 53, 64, 78, 60, 32];
passedGrades = (arr) => {
    let passed = [];
    let i = 0;
    arr.forEach((item) => {if(intem >= 50) {passed[i] = item; i++}});
    return pass
}
console.log(passedGrades(studentGrades));

// Join Exercise 1 - Names

// Create an array , students, with a list of 3 or more student names​
//Use join to convert the student array to a string with a space in between each name.

let students = ["Ben" , "Dave" , "Tom" , "Sam"];
let string = students.join(' ');
console.log(string);

// Join Exercise 2 - to CSV

// Create a function called toCSV. ​
// The function should take in an array and return a string in CSV format.​
// Test it out on your student array.

let students2 = ["Ben" , "Dave" , "Tom" , "Sam"];
let toCSV = (arr) => {let string = students2.join(', '); return string};
console.log(toCSV(students2));
