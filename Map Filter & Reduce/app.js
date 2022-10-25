// Map Exercise 1 - Miles Converter

// Create an array Kilometers with 5 or more values.​
// Create a function called toMiles which returns a new array of the kilometers array converted miles.​
// You should use map in the function body​
// 1 mile = 0.621371km

let km = [2 , 5, 9, 13, 45, 56, 89];
let toMiles = (arr) => {
    let miles = arr.map((item) => Math.floor(item * 0.621371));
    return miles
}
console.log(toMiles(km));

// Map/filter Exercise 2 - User input ages

// InputArray is a list of students ages but they are some mistakes.​
// ["18", " 27", 19, 21, "22 ", NaN, Undefined]​
// Create a function which returns a new array of student ages where all the values have been converted to numbers and any missing values have been removed.

let InputArray = ["18", " 27", 19, 21, "22 ", NaN, "Undefined"];
let adjust = (arr) => {
    let result = arr.map((item) => Number(item));
    result = result.filter(Boolean);
    return result
}
console.log(adjust(InputArray));

// Filter Exercise - canVote

// Create function which takes in an array as a parameter and return an array of ages which are equal or over 18. User filter to accomplish this.​
// Test your functions with an array of ages.

let ages = [12, 32, 45, 16, 17, 21, 76, 35, 55, 61];
let canVote = (arr) => {
    let result = arr.filter((item) => item >= 18);
    return result
}
console.log(canVote(ages));

// Reduce Exercise 1 - Sum

// Create an array , numArray, with a list of 5 or more numbers​
// Create a function called sum which takes in an array as a parameter​
// The function should return the sum of the array.​
// Test the function with the array you created

let numArray = [17, 88, 200, 4, 65, 98, 30];
let sum = (arr) => {
    let result = arr.reduce((tot, item) => {return tot * item},1);
    return result
}
console.log(sum(numArray));


// Reduce Exercise 2 - Product

// Create a function called product that multiplies all the numbers in the array by each other.​
// Test the function by passing in your array of values

let numArray2 = [17, 88, 200, 4, 65, 98, 30];
let prod = (arr) => {
    let result = arr.reduce((tot, item) => {return tot * item},1);
    return result
}
console.log(prod(numArray2));