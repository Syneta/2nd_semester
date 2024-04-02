// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const getNthCharacterInArray = (a, n) => {
  return a[n-1];
};
console.log(getNthCharacterInArray([10,9,8,7,6],5))

/*
Test cases:
myFunction([1,2,3,4,5],3) Expected 3
myFunction([10,9,8,7,6],5) Expected 6
myFunction([7,2,1,6,3],1) Expected 7
*/

// ========================================

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
// Tip: use the array prototype function slice()
const removeFirstThreeElements = (a) => {
  return a.slice(3);
};
console.log(removeFirstThreeElements([99,1,1]))

/*
Test cases:
myFunction([1,2,3,4]) Expected [4]
myFunction([5,4,3,2,1,0]) Expected [2,1,0]
myFunction([99,1,1]) Expected []
*/

// ========================================

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
// Tip: use the array prototype function slice()
const removeLastNElements = (a, n) => {
  return a.slice(a.length-n);
};
console.log(removeLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3))

/*
Test cases:
myFunction([1, 2, 3, 4, 5], 2) Expected [ 4, 5 ]
myFunction([1, 2, 3], 6) Expected [ 1, 2, 3 ]
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) Expected [ 6, 7, 8 ]
*/

// ========================================
// Write a function that takes an array (a) as argument
// Return the number of elements in a
// Tip: How do you find the length of an array?
const countNumberOfElements = (a) => {
  return a.length;
};
console.log(countNumberOfElements([9,9,9,5]))
/*
Test cases: 
myFunction([1,2,2,4]) Expected 4
myFunction([9,9,9]) Expected 3
myFunction([4,3,2,1,0]) Expected 5
*/

// ========================================

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
// Tip: There are multiple ways to solve this e.g.
// - Use .filter() to filter only negative numbers, and count them
// - Use .forEach() to iterate through all numbers and count negatives
const countNumberOfNegativeValues = (a) => {
  const negatives = a.filter((n) => n < 0)

  let howManyNegs = []
  const negativesEach = a.forEach((m) => {
      if(m < 0){
        howManyNegs.push(m);
      }
    });
  return howManyNegs.length;
};
console.log(countNumberOfNegativeValues([4,-3,2,1,0]))

/*
Test cases:
myFunction([1,-2,2,-4]) Expected 2
myFunction([0,9,1]) Expected 0
myFunction([4,-3,2,1,0]) Expected 1
*/

// ========================================

// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
// Tip: forEach, c-style loop (or even .reduce() for the brave)
const calcSumOfArrayOfNumbers = (a) => {
  let sum = 0
  a.forEach((n) =>  {
    sum = sum + n
  })
  reducerSum = a.reduce((acc, curr) => acc+curr, 0)
  return reducerSum;
};
console.log(calcSumOfArrayOfNumbers([10,100,40,90]))

/*
Test cases:
myFunction([10,100,40]) Expected 150
myFunction([10,100,1000,1]) Expected 1111
myFunction([-50,0,50,200]) Expected 200
*/

// ========================================
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
// Tip: forEach, c-style loop (or even .reduce() for the brave)
// to get the sum, then divide by number of elements in array
const calcAvgOfArrayOfNumbers = (arr) => {
  
  let sum = arr.reduce((acc, curr) => acc+curr, 0)
  const avg = sum/arr.length
  return avg;
};
console.log(calcAvgOfArrayOfNumbers([10,100,40]))

/*
Test cases:
myFunction([10,100,40]) Expected 50
myFunction([10,100,1000]) Expected 370
myFunction([-50,0,50,200]) Expected 50
*/

// ========================================
// Write a function that takes an array of strings as argument
// Return the longest string
// Tip: It's possible to get length of string with .length
// E.g. 'Gunnsteinn'.length = 10
const getLongestStringFromArray = (arr) => {
  
  maxLength = ''
  arr.forEach((s) => {
    if(s.length > maxLength.length){
      maxLength = s
    }
  })
  return maxLength;
};
console.log(getLongestStringFromArray(['Sigurjón', 'Veigar', 'Halldórsson']))

/*
Test cases:
myFunction(['help', 'me']) Expected 'help'
myFunction(['I', 'need', 'candy']) Expected 'candy'
*/

// ========================================
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
// Tip: STRICTLY equal, ====
const areAllEqual = (arr) => {
  return arr.every((v) => v === arr[0]);
};
console.log(areAllEqual([10,'10',]))

/*
Test cases:
myFunction([true, true, true, true]) Expected true 
myFunction(['test', 'test', 'test']) Expected true 
myFunction([1,1,1,2]) Expected false 
myFunction(['10',10,10,10]) Expected false 
*/
// ========================================
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
// Tip: Make use of the spread syntax (...), as the parameters suggest
const mergeAllArrays = (...arrays) => {
  const mergedArray = [];
  for (const arr of arrays) {
    mergedArray.push(...arr);
  }
  return mergedArray;
};

console.log(mergeAllArrays([true, true], [1, 2], ['a', 'b']));
/*
Test cases:
myFunction([1, 2, 3], [4, 5, 6]) Expected [1, 2, 3, 4, 5, 6]
myFunction(['a', 'b', 'c'], [4, 5, 6]) Expected ['a', 'b', 'c', 4, 5, 6]
myFunction([true, true], [1, 2], ['a', 'b']) Expected [true, true, 1, 2, 'a', 'b']
*/
