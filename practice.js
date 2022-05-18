// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = {chi: 2700000};
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 

// function printeverynumberto100() {
//   var index = 1 ;
//   while (index <= 100) {
//     console.log(index) ;
//     index += 1 ;
//   }
// }

// printeverynumberto100() ;


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function printeveryothernumberto100() {
//   var index = 1;
//   while (index <= 100) {
//     console.log(index) ;
//     index += 2 ;
//   }
// }

// printeveryothernumberto100() ;


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function return55s(numbers) {
//   var index = 0 ;
//   var y = 0 ;
//   numbers.forEach(function(number) {
//     if (number === 55) {
//       y += 1 ;
//     }
//     index += 1 ;
//   }) ;
//   console.log(y) ;
// } 

// return55s([5, 7, 3, 9, 12, 546, 55, 43, 32, 76, 52, 44, 55]) ;

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesomesauce(strings) {
//   var newArray =[] ;
//   for (var i = 0; i < strings.length; i++c)

// }

// awesomesauce(["merry", "christmas", "charlie", "brown"])


// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is [“a”, “b”, “c”, “d”, “e”, “f”], the output should be [“a”, “c”, “e”].

// function everyotherstring(strings) {
//   var index = 0 ;
//   var newArray = [] ;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       newArray.push(strings[index]) ;
//     }
//     index++ ;
//   }) ;
//   console.log(newArray) ;
// }

// everyotherstring(['a', 'b', 'c', 'd', 'e', 'f']) ;

// // Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function maxnumber(numbers) {

//   var x = 0 ;
//   var y = 1 ;
//   var i = 0 ;

//   while (i < numbers.length) {
//     if (numbers[x] > numbers[y]) {
//       numbers[y] = numbers [x] ;
//     }
//     x++ ;
//     y++ ;
//     i++ ;
//   }
//   console.log(y) ;

// }

// maxnumber([6 , 3, 2, 8, 21, 65, 4, 2, 25, 32, 4]) ;


// // var i = 0;
// // var text = "";
// // while (i < 10) {
// //     text = text + " The number is " + i;
// //     i++;
// // }
// // console.log(text);

// // Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// function factorial(number) {
//   var product = 1 ;
//   while (number > 0) {
//     product *= number ;
//   }
//   number -- ;
// }

// factorial(8) ;


// # 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

function reverse(string) {
  var i = string.length -1;
  var word = "";
  var array = [];

  while (i !== -1 ) {
    word = string.split("");
    array.push(string[i]);

    i--;
  }
  console.log(array);
}

reverse("Javascript");

// Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function howmanyAs(string) {
  var i = 0;
  var y = 0;
  while (i < string.length) {
    if (string[i] === "a") {
      y ++;
    }
    i ++;
  }
  console.log(y);
}

howmanyAs("Javascript");

// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!


function finder(arg1, arg2) {
  var x = 0 ;
  var y = null;
  while (x < arg1.length) {
    if (arg1[x] === arg2) {
      y = x;
    }
    x++;
  }
  console.log(y);
}

finder([1, 4, 6, 7, 8, 9, 11, 12], 8);

// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

function insert(arg1, arg2) {
  var newArray = [];
  var x = 0;
  var y = arg2;
  var inserted = fasle;

  while (x < arg1.length) {
    if (arg1[x] < y) {
      newArray.push(arg1[x])}
    elseif (arg1[x] > y && inserted == false) {

    }
  }
}
insert([1, 2, 3, 4, 6, 7, 8, 9, 10], 5)